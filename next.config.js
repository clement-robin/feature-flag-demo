/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  basePath: "/feature-flag-demo", 
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clement-robin.github.io",
        pathname: "/feature-flag-demo/**",
      },
    ],
  },
  eslint: {
    
    
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
