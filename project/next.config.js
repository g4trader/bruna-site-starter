/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: { bodySizeLimit: "2mb" }
  },
  // Ignorar rotas de API durante o build
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

module.exports = nextConfig;

