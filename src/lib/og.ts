import { readFile } from "node:fs/promises";
import path from "node:path";
import { cacheLife } from "next/cache";
import sharp from "sharp";

/**
 * Recursos compartilhados das imagens sociais (opengraph-image / twitter-image).
 * As leituras ficam em "use cache" para que as imagens sejam geradas no build
 * (com Cache Components, IO sem cache torna a rota dinâmica).
 */

export const ogSize = { width: 1200, height: 630 };

const root = process.cwd();

async function fontBase64() {
  "use cache";
  cacheLife("max");
  return (await readFile(path.join(root, "src/fonts/Gotham-Medium.otf"))).toString("base64");
}

export async function ogFont() {
  return Buffer.from(await fontBase64(), "base64");
}

/** Foto do /public convertida para JPEG (o gerador de imagens não lê WebP). */
export async function ogPhoto(publicPath: string, width: number, height: number) {
  "use cache";
  cacheLife("max");
  const buf = await sharp(path.join(root, "public", publicPath)).resize(width, height, { fit: "cover" }).jpeg({ quality: 82 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export async function ogLogo() {
  "use cache";
  cacheLife("max");
  const svg = await readFile(path.join(root, "public/brand/logo-horizontal-branco.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

export const ogColors = {
  navy: "#0d1733",
  copper: "#bf8055",
  copperLight: "#dcab84",
  paper: "#f4f2ee",
};
