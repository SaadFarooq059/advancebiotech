/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'images.unsplash.com'],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

module.exports = nextConfig;
