import { createReadStream, existsSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { extname, join, normalize, resolve } from 'node:path';
import OpenAI from 'openai';

const DIST_DIR = resolve('dist');
const PORT = Number.parseInt(process.env.PORT ?? '4173', 10);
const REQUEST_TIMEOUT_MS = 15_000;
const HEADERS_TIMEOUT_MS = 10_000;
const KEEP_ALIVE_TIMEOUT_MS = 5_000;
const MAX_BODY_BYTES = 12_000;
const MAX_CHAT_MESSAGES = 8;
const MAX_MESSAGE_CHARS = 700;
const RATE_LIMIT_WINDOW_MS = 5 * 60_000;
const RATE_LIMIT_MAX_REQUESTS = 12;
const OPENAI_MODEL = process.env.OPENAI_MODEL?.trim() || 'gpt-5.6-luna';
const OPENAI_TIMEOUT_MS = 12_000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';
const OPENAI_SAFETY_SALT = process.env.OPENAI_SAFETY_SALT?.trim() || 'cambobia-site';

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self' https://fonts.gstatic.com data:",
  "form-action 'self' mailto:",
  "frame-ancestors 'none'",
  "img-src 'self' data: https:",
  "manifest-src 'self'",
  "object-src 'none'",
  "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  'upgrade-insecure-requests',
].join('; ');

const SECURITY_HEADERS = {
  'Content-Security-Policy': CSP,
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Origin-Agent-Cluster': '?1',
  'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};

const JSON_HEADERS = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
};

const CLEAN_ROUTES = new Map([
  ['/', 'index.html'],
  ['/404', '404.html'],
  ['/ai-learning-center', 'ai-learning-center.html'],
  ['/banking-skills-academy', 'banking-skills-academy.html'],
  ['/biz-platform', 'biz-platform.html'],
  ['/company-updates', 'company-updates.html'],
  ['/data-privacy', 'data-privacy.html'],
  ['/investors', 'investors.html'],
  ['/messenger-hub', 'messenger-hub.html'],
  ['/micro-lending-platform', 'micro-lending-platform.html'],
  ['/micro-sme-platform', 'micro-sme-platform.html'],
  ['/paykh', 'paykh.html'],
  ['/pair-me-up', 'pair-me-up.html'],
  ['/privacy-policy', 'privacy-policy.html'],
  ['/student-portal', 'student-portal.html'],
  ['/teacher-portal', 'teacher-portal.html'],
  ['/terms-of-use', 'terms-of-use.html'],
]);

const ASSISTANT_PRODUCTS = {
  messenger_hub: {
    href: '/messenger-hub',
    label: 'Messenger Hub',
    summary: 'Broadcast customer campaigns on WhatsApp, Telegram, and Signal.',
  },
  micro_sme_platform: {
    href: '/micro-sme-platform',
    label: 'Micro-SME Platform',
    summary: 'Run AI-led sales conversations, inventory, and POS workflows for SMEs.',
  },
  paykh: {
    href: '/paykh',
    label: 'PayKH',
    summary: 'Support merchant checkout, KHQR-ready payment flow, and transaction collection.',
  },
  biz_platform: {
    href: '/biz-platform',
    label: 'Biz Platform',
    summary: 'Support broader business workflow access through the Biz platform.',
  },
  micro_lending_platform: {
    href: '/micro-lending-platform',
    label: 'Micro-Lending Platform',
    summary: 'Manage borrowers, repayments, loans, and lending records through DBank.',
  },
  ai_learning_center: {
    href: '/ai-learning-center',
    label: 'AI Learning Center',
    summary: 'Present the full education stack across students, teachers, and banking training.',
  },
  student_portal: {
    href: '/student-portal',
    label: 'Student Portal',
    summary: 'Support student learning, curriculum access, revision, and quizzes.',
  },
  teacher_portal: {
    href: '/teacher-portal',
    label: 'Teacher Portal',
    summary: 'Support teacher oversight, question management, and learning administration.',
  },
  banking_skills_academy: {
    href: '/banking-skills-academy',
    label: 'Banking Skills Academy',
    summary: 'Deliver banking-industry learning and skill checks for training teams.',
  },
  pair_me_up: {
    href: '/pair-me-up',
    label: 'Pair Me Up',
    summary: 'Provide focus, memory, and attention practice for learners.',
  },
};

const ASSISTANT_RESPONSE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    reply: {
      type: 'string',
      description: 'Main conversational reply, 2 to 5 short sentences.',
    },
    followUpQuestion: {
      type: 'string',
      description: 'A single focused next question, or an empty string if not needed.',
    },
    recommendedProducts: {
      type: 'array',
      items: {
        type: 'string',
        enum: Object.keys(ASSISTANT_PRODUCTS),
      },
      maxItems: 3,
    },
    leadStage: {
      type: 'string',
      enum: ['discover', 'qualify', 'handoff'],
    },
    shouldOfferContact: {
      type: 'boolean',
    },
    contactSubject: {
      type: 'string',
      description: 'Short subject line for a contact handoff email.',
    },
    contactSummary: {
      type: 'string',
      description: 'Brief summary of what the visitor appears to need.',
    },
  },
  required: [
    'reply',
    'followUpQuestion',
    'recommendedProducts',
    'leadStage',
    'shouldOfferContact',
    'contactSubject',
    'contactSummary',
  ],
};

const ASSISTANT_SYSTEM_PROMPT = `You are the CamboBIA website customer service advisor for Cambodia Boutique Investment Advisory.

Primary goals:
1. Understand the visitor's use case quickly.
2. Recommend the best CamboBIA platform or platform combination.
3. Sound like a real human customer service and solution advisor, not like a bot directory.
4. Keep the conversation practical, clear, commercially useful, and easy to act on.
5. Ask one focused follow-up question when the need is still unclear.
6. When the visitor shows real buying intent, implementation interest, partnership interest, investor interest, or asks for direct help, move toward contact@cambobia.com.

Important rules:
- Write in the same language as the visitor. If the visitor writes in Khmer, answer in Khmer.
- Keep the tone warm, calm, direct, and conversational.
- Do not sound robotic, scripted, generic, or overly promotional.
- Respond like a good human service representative: briefly acknowledge the need, give a recommendation, explain why it fits, and then guide the next step.
- Keep answers concise. Prefer short paragraphs over bullet lists unless the user explicitly asks for a list.
- Avoid repeating the full product catalog unless the customer asks what products exist.
- If the customer mentions their business type, channel, team, payment need, school, or lending workflow, use that detail in your reply.
- If the request is broad, narrow it down with one smart question instead of dumping options.
- If the user sounds serious or urgent, be more decisive and more helpful.
- Do not invent pricing, customers, integrations, or operational claims that were not provided.
- If uncertain, recommend the closest fit and explain why.
- Recommend at most 3 products.
- Only set shouldOfferContact to true when the visitor appears qualified for a demo, implementation discussion, partnership, investor discussion, or direct business follow-up.
- contactSummary should be short and useful for a sales or business follow-up email.
- The reply should usually be 2 to 4 sentences. The followUpQuestion should be one natural, specific question, not a generic template.

Platform catalog:
${Object.values(ASSISTANT_PRODUCTS)
  .map((product) => `- ${product.label}: ${product.summary} (${product.href})`)
  .join('\n')}

Business mapping:
- Messenger Hub: outreach, announcements, promotions, broadcast messaging.
- Micro-SME Platform: conversational selling, Telegram bot commerce, sales flow, inventory, POS, trade inquiries, AI customer interaction.
- PayKH: payments, merchant checkout, KHQR-ready transaction flow.
- Micro-Lending Platform / DBank: borrower records, loans, repayments, lending books.
- AI Learning Center group: student learning, teacher oversight, banking-industry training, quizzes, curriculum support.
- Pair Me Up: focus and memory support for learners.
- Biz Platform: broader business workspace path inside the CamboBIA business stack.
`;

const openai = OPENAI_API_KEY
  ? new OpenAI({
      apiKey: OPENAI_API_KEY,
      timeout: OPENAI_TIMEOUT_MS,
    })
  : null;

const rateLimitState = new Map();

const sendBuffer = (res, statusCode, body, headers = {}) => {
  if (res.headersSent) {
    res.end(body);
    return;
  }

  res.writeHead(statusCode, { ...SECURITY_HEADERS, ...headers });
  res.end(body);
};

const sendJson = (res, statusCode, payload) => {
  sendBuffer(res, statusCode, JSON.stringify(payload), JSON_HEADERS);
};

const sendHtmlFile = async (res, fileName, statusCode) => {
  try {
    const filePath = join(DIST_DIR, fileName);
    const body = await readFile(filePath);
    sendBuffer(res, statusCode, body, {
      'Cache-Control': 'no-store',
      'Content-Type': MIME_TYPES['.html'],
    });
  } catch {
    sendBuffer(res, 500, 'Internal Server Error', {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    });
  }
};

const getCacheControl = (filePath) => {
  if (filePath.includes('/assets/') || filePath.includes('\\assets\\')) {
    return 'public, max-age=31536000, immutable';
  }

  if (filePath.endsWith('.html')) {
    return 'no-store';
  }

  return 'public, max-age=86400';
};

const resolveRequestPath = (pathname) => {
  if (CLEAN_ROUTES.has(pathname)) {
    return join(DIST_DIR, CLEAN_ROUTES.get(pathname));
  }

  const normalizedPath = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const candidatePath = join(DIST_DIR, normalizedPath);
  const resolvedPath = resolve(candidatePath);

  if (!resolvedPath.startsWith(DIST_DIR)) {
    return null;
  }

  if (existsSync(resolvedPath) && statSync(resolvedPath).isFile()) {
    return resolvedPath;
  }

  return null;
};

const getClientAddress = (req) => {
  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket.remoteAddress || 'unknown';
};

const hashSafetyIdentifier = (req) => {
  const clientAddress = getClientAddress(req);
  const userAgent = req.headers['user-agent'] || '';

  return createHash('sha256')
    .update(`${OPENAI_SAFETY_SALT}:${clientAddress}:${userAgent}`)
    .digest('hex');
};

const isRateLimited = (req) => {
  const key = getClientAddress(req);
  const now = Date.now();
  const bucket = rateLimitState.get(key) ?? [];
  const recentRequests = bucket.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitState.set(key, recentRequests);
    return true;
  }

  recentRequests.push(now);
  rateLimitState.set(key, recentRequests);
  return false;
};

const readJsonBody = async (req) =>
  new Promise((resolveBody, rejectBody) => {
    let size = 0;
    let rawBody = '';

    req.setEncoding('utf8');

    req.on('data', (chunk) => {
      size += chunk.length;

      if (size > MAX_BODY_BYTES) {
        rejectBody(new Error('Body too large'));
        req.destroy();
        return;
      }

      rawBody += chunk;
    });

    req.on('end', () => {
      try {
        resolveBody(rawBody ? JSON.parse(rawBody) : {});
      } catch {
        rejectBody(new Error('Invalid JSON'));
      }
    });

    req.on('error', rejectBody);
  });

const cleanMessageText = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, MAX_MESSAGE_CHARS);
};

const normalizeMessages = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((entry) => entry && (entry.role === 'user' || entry.role === 'assistant'))
    .map((entry) => ({
      role: entry.role,
      content: cleanMessageText(entry.content),
    }))
    .filter((entry) => entry.content)
    .slice(-MAX_CHAT_MESSAGES);
};

const buildAssistantActions = (responsePayload) => {
  const recommendedProducts = responsePayload.recommendedProducts
    .map((productKey) => ASSISTANT_PRODUCTS[productKey])
    .filter(Boolean)
    .map((product) => ({
      label: product.label,
      href: product.href,
    }));

  return recommendedProducts;
};

const requestAssistantReply = async ({ messages, lang, page, req }) => {
  const conversationMessages = messages.map((message) => ({
    role: message.role,
    content: [
      {
        type: 'input_text',
        text: message.content,
      },
    ],
  }));

  const response = await openai.responses.create({
    model: OPENAI_MODEL,
    store: false,
    reasoning: {
      effort: 'low',
    },
    text: {
      format: {
        type: 'json_schema',
        name: 'cambobia_assistant_reply',
        strict: true,
        schema: ASSISTANT_RESPONSE_SCHEMA,
      },
    },
    input: [
      {
        role: 'system',
        content: [
          {
            type: 'input_text',
            text: `${ASSISTANT_SYSTEM_PROMPT}\nContext:\n- Visitor language: ${lang === 'km' ? 'Khmer' : 'English'}\n- Current page: ${page || '/'}\n- Contact email: contact@cambobia.com`,
          },
        ],
      },
      ...conversationMessages,
    ],
    safety_identifier: hashSafetyIdentifier(req),
  });

  const outputText = response.output_text?.trim();

  if (!outputText) {
    throw new Error('Empty OpenAI response');
  }

  const parsed = JSON.parse(outputText);

  return {
    ...parsed,
    actions: buildAssistantActions(parsed),
  };
};

const server = createServer(async (req, res) => {
  try {
    let url;

    try {
      url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
    } catch {
      sendBuffer(res, 400, 'Bad Request', {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      });
      return;
    }

    let pathname;

    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      sendBuffer(res, 400, 'Bad Request', {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      });
      return;
    }

    if (pathname === '/api/assistant/status' && req.method === 'GET') {
      sendJson(res, 200, {
        enabled: Boolean(openai),
        model: openai ? OPENAI_MODEL : null,
      });
      return;
    }

    if (pathname === '/api/assistant') {
      if (req.method !== 'POST') {
        sendBuffer(res, 405, 'Method Not Allowed', {
          Allow: 'POST',
          'Cache-Control': 'no-store',
          'Content-Type': 'text/plain; charset=utf-8',
        });
        return;
      }

      if (isRateLimited(req)) {
        sendJson(res, 429, {
          error: 'Too many requests. Please try again shortly.',
        });
        return;
      }

      if (!openai) {
        sendJson(res, 503, {
          error: 'AI assistant is not configured yet.',
        });
        return;
      }

      let body;

      try {
        body = await readJsonBody(req);
      } catch (error) {
        const statusCode = error instanceof Error && error.message === 'Body too large' ? 413 : 400;
        sendJson(res, statusCode, {
          error: statusCode === 413 ? 'Request body is too large.' : 'Invalid request body.',
        });
        return;
      }

      const messages = normalizeMessages(body.messages);
      const lang = body.lang === 'km' ? 'km' : 'en';
      const page = typeof body.page === 'string' ? body.page.slice(0, 120) : '/';

      if (!messages.length || messages[messages.length - 1].role !== 'user') {
        sendJson(res, 400, {
          error: 'A user message is required.',
        });
        return;
      }

      try {
        const payload = await requestAssistantReply({ messages, lang, page, req });
        sendJson(res, 200, payload);
      } catch (error) {
        console.error('Assistant request failed:', error);
        sendJson(res, 502, {
          error: 'Assistant request failed.',
        });
      }

      return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      sendBuffer(res, 405, 'Method Not Allowed', {
        Allow: 'GET, HEAD',
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      });
      return;
    }

    const filePath = resolveRequestPath(pathname);

    if (!filePath) {
      await sendHtmlFile(res, '404.html', 404);
      return;
    }

    const fileExtension = extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[fileExtension] ?? 'application/octet-stream';
    const headers = {
      'Cache-Control': getCacheControl(filePath),
      'Content-Type': contentType,
    };

    res.writeHead(200, { ...SECURITY_HEADERS, ...headers });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const stream = createReadStream(filePath);

    stream.on('error', () => {
      sendBuffer(res, 500, 'Internal Server Error', {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      });
    });

    stream.pipe(res);
  } catch {
    sendBuffer(res, 500, 'Internal Server Error', {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    });
  }
});

server.requestTimeout = REQUEST_TIMEOUT_MS;
server.headersTimeout = HEADERS_TIMEOUT_MS;
server.keepAliveTimeout = KEEP_ALIVE_TIMEOUT_MS;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Cambobia listening on ${PORT}`);
});
