/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Pour la génération statique
  basePath: "/feature-flag-demo", // Le nom de votre repo
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clement-robin.github.io",
        pathname: "/feature-flag-demo/**",
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
