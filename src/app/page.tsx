import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { publishedExtensions } from "@/data/extensions";
import { pageMetadata } from "@/lib/metadata";

const publishedScreenshots = publishedExtensions.flatMap((extension) =>
  extension.screenshots.map((src, index) => ({ src, extension, index })),
);
export const metadata = pageMetadata("/", "Browser extensions for everyday work", "Practical browser extensions for routine tasks, with clear downloads, permissions, privacy notes, and manual setup instructions.");

export default function Home() {
  return <><SiteHeader /><main>
    <section className="home-hero page-wrap">
      <div className="hero-kicker"><span className="blue-rule" />Independent browser software<span className="hero-kicker-index">Toolvow / 01</span></div>
      <div className="hero-layout"><h1>Browser extensions<br />for the work<br /><span>you repeat.</span></h1><div className="hero-aside"><p>Toolvow develops practical add-ons for routine browser tasks. Every release comes with a direct download, clear permission details, and instructions for installing it yourself.</p><Link href="/extensions" className="button-primary">Browse extensions <ArrowRight size={16} aria-hidden="true" /></Link><span className="hero-aside-note">No account required. No automatic installs.</span></div></div>
      <div className="hero-bottomline"><span>Small software for a familiar workspace</span><span>Scroll to explore <span aria-hidden="true">↓</span></span></div>
    </section>

    <section className="release-section page-wrap" aria-labelledby="release-title"><div className="section-label"><span>01</span><span>Current releases</span></div><div className="release-content"><div className="release-heading"><h2 id="release-title">Available extensions</h2><p>A product is listed only after its release and support details are confirmed.</p></div>{publishedExtensions.length ? <div className="release-list">{publishedExtensions.map((extension) => <Link className="release-row" href={`/extensions/${extension.slug}`} key={extension.slug}><div className="release-name"><span className="release-glyph">{extension.iconImage ? <Image src={extension.iconImage} alt="" width={56} height={56} /> : extension.icon}</span><span><b>{extension.name}</b><small>{extension.shortDescription}</small></span></div><span className="release-category">{extension.category}</span><ArrowUpRight size={17} aria-hidden="true" /></Link>)}</div> : <div className="release-empty"><span className="empty-caption">NO PUBLISHED EXTENSIONS</span><h3>There is nothing to download today.</h3><p>When a product is available, its supported browsers, permissions, privacy notes, and installation steps will be listed here.</p><Link href="/extensions" className="text-link">Visit the extensions page <ArrowRight size={15} aria-hidden="true" /></Link></div>}{publishedScreenshots.length > 0 && <div className="release-visuals" aria-label="Extension interfaces">{publishedScreenshots.map(({ src, extension, index }) => <figure key={`${extension.slug}-${src}`}><Image src={src} alt={`${extension.name} interface, screenshot ${index + 1}`} width={1200} height={760} /><figcaption>{extension.name} / Interface screenshot {index + 1}</figcaption></figure>)}</div>}</div></section>

    <section className="installation-section" id="installation-guide"><div className="page-wrap installation-layout"><div className="section-label"><span>02</span><span>Installation guide</span></div><div className="installation-copy"><div><span className="eyebrow">Manual installation</span><h2>A ZIP is a download.<br />You choose when to install.</h2></div><div className="installation-detail"><p>Extract the ZIP, then load the extracted extension folder through your browser’s extension settings. Manual installation is separate from a one-click Chrome Web Store install.</p><Link href="/installation-guide" className="text-link">Read the complete installation guide <ArrowRight size={15} aria-hidden="true" /></Link></div></div></div></section>

    <section className="about-section page-wrap" id="about"><div className="section-label"><span>03</span><span>About Toolvow</span></div><div className="about-copy"><h2>Built around a simple question.</h2><p className="about-lede">Can a small browser extension make a repeated task less tedious?</p><div className="about-foot"><p>Toolvow publishes practical browser software with product pages that explain its features, permissions, privacy details, and installation.</p><Link className="text-link" href="/about">About Toolvow <ArrowRight size={15} aria-hidden="true" /></Link></div></div></section>

  </main><SiteFooter /></>;
}
