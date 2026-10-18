import type { MetadataRoute } from "next";
import { publishedExtensions } from "@/data/extensions";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["", "/extensions", "/installation-guide", "/about", ...publishedExtensions.map((extension) => `/extensions/${extension.slug}`)].map((path) => ({ url: `${siteUrl}${path}` }));
}
