import Image from "next/image";
import { ImagePlus } from "lucide-react";

export function WebpForgePreview() {
  return <figure className="popup-preview" aria-label="Static interface preview of the WebP Forge popup">
    <div className="popup-preview-window">
      <header className="popup-preview-header">
        <span className="popup-preview-brand"><Image src="/extensions/webp-forge/icon128.png" alt="" width={32} height={32} />WebP<strong>Forge</strong></span>
        <span className="popup-preview-badge">FREE</span>
      </header>
      <div className="popup-preview-body">
        <div className="popup-preview-drop">
          <span className="popup-preview-upload"><ImagePlus size={25} aria-hidden="true" /></span>
          <strong>Drop your images here</strong>
          <span>or click to browse files</span>
          <div className="popup-preview-formats"><span>JPG</span><span>PNG</span><span>SVG</span><span>GIF</span><span>BMP</span><span>WEBP</span></div>
        </div>
        <div className="popup-preview-options">
          <div><span>Target size</span><b>100 KB</b></div>
          <div><span>Max width</span><b>Keep original</b></div>
        </div>
      </div>
    </div>
    <figcaption>Static interface preview based on the submitted popup files. Controls are illustrative.</figcaption>
  </figure>;
}
