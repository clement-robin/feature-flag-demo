/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  output: "export",
  basePath: "/feature-flag-demo",
  assetPrefix: "/feature-flag-demo/",
};

module.exports = nextConfig;
