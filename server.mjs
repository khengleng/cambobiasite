import { createReadStream, existsSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const DIST_DIR = resolve('dist');
const PORT = Number.parseInt(process.env.PORT ?? '4173', 10);
const REQUEST_TIMEOUT_MS = 15_000;
const HEADERS_TIMEOUT_MS = 10_000;
const KEEP_ALIVE_TIMEOUT_MS = 5_000;

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

const CLEAN_ROUTES = new Map([
  ['/', 'index.html'],
  ['/404', '404.html'],
  ['/ai-learning-center', 'ai-learning-center.html'],
  ['/banking-skills-academy', 'banking-skills-academy.html'],
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

const sendBuffer = (res, statusCode, body, headers = {}) => {
  if (res.headersSent) {
    res.end(body);
    return;
  }

  res.writeHead(statusCode, { ...SECURITY_HEADERS, ...headers });
  res.end(body);
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

const server = createServer(async (req, res) => {
  try {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      sendBuffer(res, 405, 'Method Not Allowed', {
        'Allow': 'GET, HEAD',
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
      });
      return;
    }

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
