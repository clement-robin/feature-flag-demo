/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Pour la génération statique
  basePath: "/feature-flag-demo", // Le nom de votre repo
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clement-robin.github.io',
        pathname: '/feature-flag-demo/**',
      },
    ],
  },
};

module.exports = nextConfig;
