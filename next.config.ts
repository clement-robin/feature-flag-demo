/** @type {import('next').NextConfig} */
const nextConfig = {
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
  images: {
    unoptimized: true,
    // Utilisez le path uniquement en production
    ...(process.env.NODE_ENV === "production"
      ? {
          path: "/feature-flag-demo",
        }
      : {}),
  },
};

module.exports = nextConfig;
