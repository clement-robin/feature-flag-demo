/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  output: "export",
  // Utilisez le basePath uniquement en production
  ...(process.env.NODE_ENV === "production"
    ? {
        basePath: "/feature-flag-demo",
        assetPrefix: "/feature-flag-demo/",
      }
    : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
