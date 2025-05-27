/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  output: "export",
  basePath: "/kameleoon-feature-flag",
  assetPrefix: "/kameleoon-feature-flag/",
};

module.exports = nextConfig;
