import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const rootDir = resolve('.');
const distDir = resolve(rootDir, 'dist');

await mkdir(distDir, { recursive: true });

for (const fileName of ['robots.txt', 'sitemap.xml', 'llms.txt']) {
  await copyFile(resolve(rootDir, fileName), resolve(distDir, fileName));
}
