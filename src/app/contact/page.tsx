import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact", "Contact Toolvow", "Contact information for Toolvow. Operator contact details are awaiting confirmation.", true);

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page page-wrap"><header className="contact-heading"><div className="section-label"><span>TOOLVOW</span><span>CONTACT</span></div><h1>Contact</h1><p>Contact details for the Toolvow operator have not been provided for this site.</p></header><section className="contact-notice"><h2>Operator details awaiting confirmation</h2><p>A contact email or mailing address will be added after the site owner supplies and confirms it. No contact form or address is active on this website.</p><p>For product-specific information, review the <Link href="/extensions/webp-forge">WebP Forge details</Link>, <Link href="/privacy-policy">privacy policy</Link>, and <Link href="/installation-guide">installation guide</Link>.</p></section></main><SiteFooter /></>;
}
