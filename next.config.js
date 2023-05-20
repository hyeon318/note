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
  },
  async redirects(){
    return [
      {
        source:"/products/deleted_forever",
        destination: '/products',
        permanent: true
        // 해당으로 계속 보내줄거기 때문에 search 엔진에서 캐시할건지 여부
      },{
        source:"/products/deleted_temp",
        destination: '/products',
        permanent: false
        // 해당으로 계속 보내줄거기 때문에 search 엔진에서 캐시할건지 여부
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: '/items/:slug',
        destination: '/products/:slug'
      }
    ]
  }
}

module.exports = nextConfig
