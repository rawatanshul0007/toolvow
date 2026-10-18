import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { publishedExtensions } from "@/data/extensions";
import { pageMetadata } from "@/lib/metadata";
import { WebpForgePreview } from "@/components/webp-forge-preview";

export const metadata = pageMetadata("/extensions", "Browser extensions", "Browse Toolvow browser extensions, with verified compatibility, permissions, privacy details, and installation instructions.");

export default function ExtensionsPage() {
  return <><SiteHeader /><main className="directory page-wrap"><Link href="/" className="back-link"><ArrowLeft size={14} aria-hidden="true" />Toolvow home</Link><header className="directory-heading"><div className="section-label"><span>Toolvow</span><span>Extensions</span></div><h1>Downloads with<br />the details attached.</h1><p>Each release comes with verified browser support, permissions, privacy details, and steps to install it yourself.</p></header>{publishedExtensions.length ? <div className="extension-list">{publishedExtensions.map((extension) => <article className="extension-entry" key={extension.slug}>
    <div className="extension-listing-layout">
      <div className="extension-listing-copy">
        <div className="extension-product-heading">
          <span className="entry-icon entry-icon-large">{extension.iconImage ? <Image src={extension.iconImage} alt={`${extension.name} extension icon`} width={64} height={64} /> : extension.icon}</span>
          <div><span className="entry-category">{extension.category}</span><h2>{extension.name}</h2></div>
        </div>
        <p className="extension-listing-description">{extension.shortDescription}</p>
        <div className="extension-listing-actions"><Link href={`/extensions/${extension.slug}`} className="button-primary">View extension <ArrowUpRight size={16} aria-hidden="true" /></Link>{extension.downloadUrl && <a href={extension.downloadUrl} className="text-link" download>Download ZIP <ArrowUpRight size={15} aria-hidden="true" /></a>}</div>
      </div>
      <div className="extension-listing-visual">{extension.slug === "webp-forge" ? <WebpForgePreview /> : extension.screenshots.length > 0 ? <div className="extension-images">{extension.screenshots.map((shot, index) => <Image key={shot} src={shot} alt={`${extension.name} interface screenshot ${index + 1}`} width={900} height={560} />)}</div> : <span className="listing-visual-note">Product preview not available</span>}</div>
    </div>
    <dl className="extension-listing-facts"><div><dt>Browser</dt><dd>{extension.browserCompatibility.join(", ")}</dd></div>{extension.supportedFormats?.length ? <div><dt>Input formats</dt><dd>{extension.supportedFormats.join(", ")}</dd></div> : null}<div><dt>Permissions</dt><dd>{extension.permissions.length ? extension.permissions.map(({ name }) => name).join(", ") : "None requested"}</dd></div><div><dt>Release</dt><dd>Version {extension.version}{extension.fileSize ? ` · ZIP ${extension.fileSize}` : ""}</dd></div></dl>
    <div className="extension-listing-bottom"><Link href={`/extensions/${extension.slug}`} className="text-link">View full product details <ArrowUpRight size={15} aria-hidden="true" /></Link><Link href="/installation-guide" className="text-link">Installation guide <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
  </article>)}</div> : <section className="directory-empty"><span className="empty-caption">NO PUBLISHED EXTENSIONS</span><h2>Nothing to download yet.</h2><p>No extensions are available to download right now. A product will appear here when its download and support details are ready.</p><Link href="/installation-guide" className="text-link">Read how manual installation works <ArrowUpRight size={15} aria-hidden="true" /></Link></section>}<div className="directory-note"><span>Only released extensions appear in this list.</span><Link href="/installation-guide">Installation guide <ArrowUpRight size={13} aria-hidden="true" /></Link></div></main><SiteFooter /></>;
}
