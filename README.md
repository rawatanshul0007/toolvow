# Toolvow

Toolvow is an independent browser extension website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Extension content

WebP Forge 1.0.0 is listed in `src/data/extensions.ts`. Its downloadable package is `public/downloads/webp-forge-1.0.0.zip`; the package contains a top-level `webp-converter-extension` folder with `manifest.json` inside. The published product page includes the archive size and SHA-256 checksum. Product screenshots were not included in the submitted package.

For future releases, add confirmed product information and a real ZIP before setting `published: true`. Add only real screenshots under `public/` and reference them in `screenshots`. Update the package checksum and size after every ZIP change.

## Site URL and search metadata

Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment, for example `https://your-verified-domain.example`. The application uses it to create absolute canonical URLs, Open Graph URLs, `sitemap.xml`, and the sitemap reference in `robots.txt`. Without this value, the site does not emit a guessed production domain.

## Legal and contact details

The privacy policy, terms, and contact page are drafts marked for owner review. They are excluded from the indexable sitemap while operator details remain unconfirmed. Confirm the hosting provider and log retention, legal operator, contact details, package license, governing law, and final legal wording before treating them as final.
