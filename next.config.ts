import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.dashingcreations.com",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // or whatever your local Strapi backend runs on
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
