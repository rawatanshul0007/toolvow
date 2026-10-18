import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Toolvow | Browser extensions for everyday work", template: "%s | Toolvow" },
  description: "Practical browser extensions for repetitive work, with clear downloads, permissions, and installation instructions.",
  openGraph: { type: "website", siteName: "Toolvow", title: "Toolvow | Browser extensions for everyday work", description: "Practical browser extensions for repetitive work, with clear downloads, permissions, and installation instructions.", ...(siteUrl ? { url: siteUrl } : {}) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
