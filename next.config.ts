import type { NextConfig } from "next";
// const repo = "Saktra";

const nextConfig: NextConfig = {
  output: "export",
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
