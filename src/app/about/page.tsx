import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about", "About Toolvow", "Learn about Toolvow, an independent publisher of practical browser extensions.");

export default function AboutPage() {
  return <><SiteHeader /><main className="about-page page-wrap"><header className="about-page-heading"><div className="section-label"><span>TOOLVOW</span><span>ABOUT</span></div><h1>Small tools for<br />repeated work.</h1><p>Toolvow is an independent label for browser extensions built to make routine tasks easier to finish.</p></header><article className="about-page-body"><section><h2>What we publish</h2><p>We publish browser add-ons with a clear product page, a direct package download, and practical information about features, browser support, permissions, privacy, and installation.</p></section><section><h2>What is available</h2><p>The first listed product is WebP Forge, a local image-to-WebP converter for Chrome. Its page explains how it works, what it can and cannot do, and how to load its package manually.</p><Link className="text-link" href="/extensions/webp-forge">View WebP Forge <ArrowRight size={15} aria-hidden="true" /></Link></section><section><h2>Contact</h2><p>Toolvow’s operator and contact details have not been supplied for this site yet.</p><Link className="text-link" href="/contact">Contact information <ArrowRight size={15} aria-hidden="true" /></Link></section></article></main><SiteFooter /></>;
}
