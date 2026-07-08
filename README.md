# Cambobia Marketing Site

Single-page marketing website for `cambobia.com`, built with Vite and prepared for Railway deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Railway deployment

1. Create a new Railway project connected to this repository.
2. Railway will detect `package.json` and `railway.json`.
3. Use the default build step: `npm install && npm run build`.
4. Railway will start the site with `npm run start`.

The app serves the built site through `serve` on Railway using the platform-provided `PORT`.
