
import { MetadataRoute } from "next";
import { listMDX } from "@/lib/mdx";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["/", "/sobre", "/atuacao", "/contato", "/politica-de-privacidade"];
  const pub = await listMDX("publicacoes");
  const blog = await listMDX("blog");
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((p) => ({
      url: `${siteUrl}${p}`,
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1 : 0.7,
      lastModified: now,
    })),
    ...pub.map((p) => ({
      url: `${siteUrl}/publicacoes/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      lastModified: p.date ? new Date(p.date) : undefined,
    })),
    ...blog.map((p) => ({
      url: `${siteUrl}/blog/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
      lastModified: p.date ? new Date(p.date) : undefined,
    })),
  ];

  return entries;
}
