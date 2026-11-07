import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

// Reuse the homepage's supplied Warp geometry so the social image stays in sync.
const source = await readFile(new URL('../src/components/warp-hover-background.tsx', import.meta.url), 'utf8');
const paths = [...source.matchAll(/^      '([^']+)'/gm)].map((match) => `<path d="${match[1]}"/>`).join('');
if (!paths) throw new Error('Warp paths not found');
const hash = (x, y) => {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
};
const glyphs = [];
for (let y = 0; y < 400; y += 6) {
  for (let x = 0; x < 1200; x += 6) {
    const noise = hash(x / 6, y / 6);
    const u = x / 1200;
    const band = Math.floor((y / 400 - 0.5) * 12);
    const pulse = 0.5 + 0.5 * Math.sin(u * 17 + band * 1.3);
    const warmth = (0.5 + 0.5 * Math.sin(u * 8 + band * 0.65)) ** 3;
    const accent = warmth * (noise > 0.65 ? 1 : 0.15);
    const color = `rgb(${Math.round(37 + 202 * accent)},${Math.round(37 + 62 * accent)},${Math.round(37 + 13 * accent)})`;
    const opacity = (0.22 + noise * 0.5 + pulse * 0.28) * 0.85;
    const size = 6 * (0.28 + noise * 0.24);
    const symbol = Math.floor(noise * 5);
    const shape = symbol === 0
      ? `<circle cx="${x}" cy="${y}" r="${size / 2}" fill="none"/>`
      : symbol === 1
        ? `<path d="M${x - size / 2} ${y}h${size}M${x} ${y - size / 2}v${size}" fill="none"/>`
        : `<rect x="${x - size / 2}" y="${y - size / 2}" width="${symbol === 2 ? size : size * 0.6}" height="${size}" fill="${symbol === 2 ? 'none' : color}"/>`;
    glyphs.push(`<g stroke="${color}" stroke-width="0.65" opacity="${opacity}">${shape}</g>`);
  }
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
  <clipPath id="ribbons" transform="translate(-144 -120) scale(${1488 / 350} ${640 / 350})">${paths}</clipPath>
  <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="70%" stop-color="white"/><stop offset="100%" stop-color="black"/></linearGradient>
  <mask id="soft-edge"><rect width="1200" height="400" fill="url(#fade)"/></mask>
</defs>
<rect width="1200" height="630" fill="white"/>
<g mask="url(#soft-edge)"><g clip-path="url(#ribbons)">${glyphs.join('')}</g></g>
<g font-family="Inter, Helvetica, Arial, sans-serif">
  <text x="60" y="516" font-size="34" letter-spacing="-1" fill="#1a1a1a">vicente sanchez</text>
  <text x="60" y="554" font-size="21" fill="#6f6f6f">são paulo, brazil</text>
</g>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile(new URL('../public/opengraph-image.png', import.meta.url).pathname);
console.log('Generated public/opengraph-image.png (1200 × 630)');
