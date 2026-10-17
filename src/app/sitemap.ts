import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const routes = ["/", "/about", "/services", "/gallery", "/contact", "/privacy", "/terms"];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  return [...routes, ...serviceRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
