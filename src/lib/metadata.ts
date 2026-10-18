import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function pageMetadata(path: string, title: string, description: string, noIndex = false): Metadata {
  const canonical = siteUrl ? `${siteUrl}${path}` : undefined;
  const fullTitle = `${title} | Toolvow`;

  return {
    title: { absolute: fullTitle },
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      siteName: "Toolvow",
      title: fullTitle,
      description,
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: { card: "summary", title: fullTitle, description },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
