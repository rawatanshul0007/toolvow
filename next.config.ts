import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-release",
  devIndicators: false,
  cacheComponents: true,
  async redirects() {
    return [{ source: "/privacy", destination: "/privacy-policy", permanent: true }];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
