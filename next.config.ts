import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Ensure LinkedInBot gets full metadata in HTML (not streamed after scripts).
  htmlLimitedBots: /.*/,
};

export default nextConfig;
