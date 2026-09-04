import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.nps.gov" },
      { protocol: "https", hostname: "home.army.mil" },
      { protocol: "https", hostname: "api.army.mil" },
      { protocol: "https", hostname: "www.iafc.org" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" }
    ]
  }
};

export default nextConfig;
