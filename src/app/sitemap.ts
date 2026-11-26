import type { MetadataRoute } from "next";
import { solutions } from "@/lib/solutions";
import { solutionDetails } from "@/lib/details";
import { legalPaths } from "@/lib/legal";
import { absoluteUrl, SEO_UPDATED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SEO_UPDATED);
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: ["/images/hero-vitoria.webp", "/images/socios.webp"].map(absoluteUrl),
    },
    {
      url: absoluteUrl("/solucoes"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/images/hero-3.webp")],
    },
    ...solutions.map((s) => {
      const d = solutionDetails[s.slug];
      return {
        url: absoluteUrl(`/solucoes/${s.slug}`),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        images: [s.image, d?.context.image.src, d?.checklist.image.src, d?.audience.image.src]
          .filter((x): x is string => Boolean(x))
          .map(absoluteUrl),
      };
    }),
    { url: absoluteUrl("/contato"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    ...legalPaths.map((p) => ({ url: absoluteUrl(p), lastModified, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
