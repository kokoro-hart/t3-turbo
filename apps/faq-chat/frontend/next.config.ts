import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@dir/ui", "@dir/share"],
};

export default nextConfig;
