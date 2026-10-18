import Link from "next/link";

function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 28 28" aria-hidden="true"><path d="M5 8.5h17M11 4.5v13c0 3.3 1.8 5 5 5h2" /></svg>;
}

export function Wordmark() {
  return <Link href="/" className="wordmark" aria-label="Toolvow home"><BrandMark /><span>toolvow</span></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><Wordmark /><nav className="desktop-nav" aria-label="Main navigation"><Link href="/extensions">Extensions</Link><Link href="/installation-guide">Installation guide</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><details className="mobile-menu"><summary><span>Menu</span><i aria-hidden="true"><b /><b /></i></summary><nav aria-label="Mobile navigation"><Link href="/extensions">Extensions</Link><Link href="/installation-guide">Installation guide</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav></details></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-brand"><Wordmark /><p>Independent browser extensions for everyday work.</p></div><nav className="footer-nav" aria-label="Footer navigation"><Link href="/extensions">Extensions</Link><Link href="/installation-guide">Installation guide</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms and conditions</Link></nav><div className="footer-meta"><span>Operator and contact details are awaiting confirmation.</span><span>© 2026 Toolvow</span></div></footer>;
}
