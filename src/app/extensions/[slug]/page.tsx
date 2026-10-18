import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Download, LockKeyhole } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { WebpForgePreview } from "@/components/webp-forge-preview";
import { publishedExtensions } from "@/data/extensions";
import { pageMetadata } from "@/lib/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function generateStaticParams() {
  const products = publishedExtensions.map(({ slug }) => ({ slug }));
  // Next 16 Cache Components requires one build sample if the catalog is ever empty.
  return products.length ? products : [{ slug: "__empty_catalog__" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const extension = publishedExtensions.find((item) => item.slug === slug);
  if (!extension) return {};
  return pageMetadata(`/extensions/${slug}`, extension.name, extension.shortDescription);
}

export default function ExtensionPage({ params }: { params: Promise<{ slug: string }> }) {
  return <Suspense fallback={<main className="detail page-wrap"><p className="muted">Loading product details...</p></main>}>
    <ExtensionPageContent params={params} />
  </Suspense>;
}

async function ExtensionPageContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const extension = publishedExtensions.find((item) => item.slug === slug);
  if (!extension) notFound();

  const relatedExtensions = extension.relatedExtensions?.flatMap((relatedSlug) => {
    const related = publishedExtensions.find((candidate) => candidate.slug === relatedSlug);
    return related ? [related] : [];
  }) ?? [];

  const breadcrumbData = siteUrl ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Extensions", item: `${siteUrl}/extensions` },
      { "@type": "ListItem", position: 3, name: extension.name, item: `${siteUrl}/extensions/${slug}` },
    ],
  } : null;

  return <>
    <SiteHeader />
    <main className="detail page-wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/extensions">Extensions</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{extension.name}</span>
      </nav>
      {breadcrumbData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />}

      <header className="detail-heading">
        <span className="entry-icon entry-icon-large">
          {extension.iconImage ? <Image src={extension.iconImage} alt="" width={128} height={128} /> : extension.icon}
        </span>
        <div><div className="eyebrow">{extension.category}</div><h1>{extension.name}</h1><p>{extension.shortDescription}</p></div>
      </header>

      {extension.screenshots.length > 0 ? <section className="detail-screenshots" aria-label={`${extension.name} screenshots`}>
        {extension.screenshots.map((shot, index) => <figure key={shot}>
          <Image src={shot} alt={`${extension.name} interface, screenshot ${index + 1}`} width={1280} height={800} />
          <figcaption>{extension.name}, screenshot {index + 1}</figcaption>
        </figure>)}
      </section> : <WebpForgePreview />}

      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-section"><div className="section-label"><span>About</span></div><h2>What it does</h2><p>{extension.fullDescription}</p></section>

          {extension.features?.length ? <section className="detail-section">
            <div className="section-label"><span>Features</span></div><h2>What you can do</h2>
            <ul className="features-list">{extension.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </section> : null}

          <section className="detail-section">
            <div className="section-label"><span>Compatibility</span></div><h2>Supported browsers</h2>
            {extension.browserCompatibility.length ? <ul className="check-list">{extension.browserCompatibility.map((browser) => <li key={browser}><Check size={15} aria-hidden="true" />{browser}</li>)}</ul> : <p className="muted">Compatibility information is not available yet.</p>}
          </section>

          <section className="detail-section" id="installation">
            <div className="section-label"><span>Installation</span></div><h2>Install manually</h2>
            <p>Downloading the ZIP does not install the extension. Extract the archive, then follow these product-specific steps:</p>
            <ol className="install-list">{extension.installationSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            <Link href="/installation-guide" className="text-link">Complete installation guide <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </section>

          {extension.youtubeVideoId && <section className="detail-section">
            <div className="section-label"><span>Tutorial</span></div><h2>Watch the setup</h2>
            <div className="video-embed"><iframe src={`https://www.youtube-nocookie.com/embed/${extension.youtubeVideoId}`} title={`${extension.name} installation tutorial`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <p className="embed-note">This video is provided by YouTube. Loading it may share browser information with Google.</p>
          </section>}

          <section className="detail-section">
            <div className="section-label"><span>Permissions</span></div><h2>What it can access</h2>
            {extension.permissions.length ? <dl className="permission-list">{extension.permissions.map((permission) => <div key={permission.name}><dt>{permission.name}</dt><dd>{permission.purpose}</dd></div>)}</dl> : <><p>The extension package requests no Chrome permissions.</p><p className="muted">Chrome still lets the extension read files you select in its popup so it can convert them.</p></>}
          </section>

          <section className="detail-section"><div className="section-label"><span>Privacy</span></div><h2>Extension data</h2><p>{extension.privacyNotes}</p><Link href="/privacy-policy" className="text-link">Read the privacy policy <ArrowUpRight size={14} aria-hidden="true" /></Link></section>

          <section className="detail-section"><div className="section-label"><span>Limitations</span></div><h2>What to expect</h2><ul className="features-list"><li>Animated GIFs are converted as still images; animation is not preserved.</li><li>Transparency is flattened onto white before conversion.</li><li>The chosen target file size is best effort. Some images may remain larger.</li></ul></section>

          {extension.changelog.length > 0 && <section className="detail-section"><div className="section-label"><span>Release notes</span></div><h2>Changelog</h2>{extension.changelog.map((entry) => <article className="changelog-entry" key={entry.version}><div><b>Version {entry.version}</b><time>{entry.date}</time></div><ul>{entry.notes.map((note) => <li key={note}>{note}</li>)}</ul></article>)}</section>}

          {extension.troubleshooting?.length ? <section className="detail-section"><div className="section-label"><span>Troubleshooting</span></div><h2>Common issues</h2><dl className="troubleshooting-list">{extension.troubleshooting.map((entry) => <div key={entry.issue}><dt>{entry.issue}</dt><dd>{entry.resolution}</dd></div>)}</dl></section> : null}

          {relatedExtensions.length > 0 && <section className="detail-section"><div className="section-label"><span>Related extensions</span></div><h2>More from Toolvow</h2><ul className="related-list">{relatedExtensions.map((related) => <li key={related.slug}><Link href={`/extensions/${related.slug}`}><span><b>{related.name}</b><small>{related.shortDescription}</small></span><ArrowUpRight size={15} aria-hidden="true" /></Link></li>)}</ul></section>}
        </div>

        <aside className="detail-aside">
          <div className="download-panel">
            <span className="eyebrow">EXTENSION PACKAGE</span><h2>{extension.name}</h2>
            {extension.downloadUrl ? <a className="button-primary download-button" href={extension.downloadUrl} download><Download size={15} aria-hidden="true" />Download ZIP</a> : <p className="muted">A download is not available.</p>}
            <dl className="package-facts">{extension.version && <div><dt>Version</dt><dd>{extension.version}</dd></div>}{extension.releaseDate && <div><dt>Released</dt><dd>{extension.releaseDate}</dd></div>}{extension.fileSize && <div><dt>File size</dt><dd>{extension.fileSize}</dd></div>}{extension.sha256 && <div><dt>SHA-256</dt><dd className="checksum">{extension.sha256}</dd></div>}</dl>
          </div>
          <div className="privacy-aside"><LockKeyhole size={16} aria-hidden="true" /><p>Review the permission list and privacy notes before installing.</p></div>
          <Link className="text-link" href="/installation-guide">General installation guide <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </aside>
      </div>
      <footer className="detail-end"><span>TOOLVOW / {extension.name.toUpperCase()}</span><Link href="/extensions">Back to extensions <ArrowUpRight size={14} aria-hidden="true" /></Link></footer>
    </main>
    <SiteFooter />
  </>;
}
