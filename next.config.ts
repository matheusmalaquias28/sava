import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Site institucional 100% estático: cada link pré-carrega a página inteira
  partialPrefetching: false,
  images: {
    // Única qualidade liberada: toda <Image> é entregue em 90 (padrão do Next é 75)
    qualities: [90],
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
