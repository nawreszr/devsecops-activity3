import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  allowedDevOrigins: ["192.168.78.129", "localhost"],
};

export default nextConfig;
