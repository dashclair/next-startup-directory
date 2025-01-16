import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
  experimantal: {
    ppr: "incremental"
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right'
  }
};

export default nextConfig;
