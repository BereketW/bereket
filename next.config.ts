import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.cnbcfm.com",
        protocol: "https",
        pathname: "/",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
