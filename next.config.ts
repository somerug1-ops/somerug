import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(__dirname) },
  devIndicators: false,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
