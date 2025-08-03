import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable image optimization for Docker deployment
  images: {
    unoptimized: true
  }
};

export default nextConfig;