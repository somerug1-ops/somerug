import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile in the home directory otherwise wins the workspace-root guess.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
