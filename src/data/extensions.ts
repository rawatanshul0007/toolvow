export type Extension = {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features?: string[];
  category: string;
  supportedFormats?: string[];
  icon: string;
  iconImage?: string;
  screenshots: string[];
  browserCompatibility: string[];
  version?: string;
  releaseDate?: string;
  downloadUrl?: string;
  fileSize?: string;
  sha256?: string;
  youtubeVideoId?: string;
  permissions: { name: string; purpose: string }[];
  installationSteps: string[];
  privacyNotes: string;
  troubleshooting?: { issue: string; resolution: string }[];
  changelog: { version: string; date: string; notes: string[] }[];
  relatedExtensions?: string[];
  published: boolean;
};

// Product facts below were checked against the submitted WebP Forge MV3 package.
export const extensions: Extension[] = [
  {
    name: "WebP Forge: Image Converter & Compressor",
    slug: "webp-forge",
    shortDescription: "Batch-convert common image files to WebP with a target size and optional maximum width.",
    fullDescription: "WebP Forge is a Manifest V3 browser extension that converts selected images to WebP in its popup. Choose several files at once, set a target file size, optionally limit the output width, review each result, then download files individually or together.",
    features: [
      "Convert JPEG, PNG, SVG, GIF, BMP, and WebP images to WebP.",
      "Add multiple files by choosing them or dropping them into the popup.",
      "Choose a 50 KB, 100 KB, or 200 KB target, or enter a custom target from 10 KB to 5,000 KB.",
      "Keep the original width or set a maximum width of 400, 800, or 1,200 pixels.",
      "Preview converted files and download results one at a time or as separate files.",
    ],
    category: "Image conversion",
    supportedFormats: ["JPEG", "PNG", "SVG", "GIF", "BMP", "WebP"],
    icon: "W",
    iconImage: "/extensions/webp-forge/icon128.png",
    screenshots: [],
    browserCompatibility: ["Google Chrome (Manifest V3; manual installation)"],
    version: "1.0.0",
    fileSize: "13,676 bytes",
    sha256: "c225cf54b9474e0c8526ec4c6c2395bc78862558d5cc9948e4434cf07915e3c1",
    downloadUrl: "/downloads/webp-forge-1.0.0.zip",
    permissions: [],
    installationSteps: [
      "Download the ZIP and extract it. The archive contains a webp-converter-extension folder.",
      "Open chrome://extensions and turn on Developer mode.",
      "Choose Load unpacked, then select the extracted webp-converter-extension folder that directly contains manifest.json.",
      "Open the WebP Forge toolbar button, choose image files, and convert them in the popup.",
    ],
    privacyNotes: "The manifest requests no browser permissions. The extension processes files you choose in its popup using the browser's Image and Canvas APIs. The reviewed package contains no network requests, remote resources, or browser storage calls; selected image contents are not uploaded by the extension. Temporary conversion results are held in popup memory until you close or reset it.",
    troubleshooting: [
      { issue: "Chrome does not accept the selected folder.", resolution: "Select the extracted webp-converter-extension folder, not the ZIP, its parent folder, or an individual file. The selected folder must directly contain manifest.json." },
      { issue: "An output is larger than the chosen target size.", resolution: "The target size is best effort. Try a smaller maximum width; some images cannot reach the target at the minimum quality used by the converter." },
      { issue: "A transparent image has a white background in the result.", resolution: "The current converter paints a white background before encoding, so transparency is not preserved." },
      { issue: "An animated GIF becomes a still image.", resolution: "The converter uses the browser image and canvas APIs and does not preserve GIF animation." },
    ],
    changelog: [],
    relatedExtensions: [],
    published: true,
  },
];

export const publishedExtensions = extensions.filter((extension) => extension.published);
