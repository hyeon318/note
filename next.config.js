/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      }
    ],
    // loader : 'custom',
    // loaderFile: 'src/service/productsImageLoader.ts'
  }
}

module.exports = nextConfig
