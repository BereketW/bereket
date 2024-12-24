import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.cnbcfm.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
