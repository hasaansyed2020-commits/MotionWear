/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'www.genspark.ai',
        port: '',
        pathname: '/api/files/**',
      },
    ],
    domains: ['localhost', 'images.pexels.com', 'www.genspark.ai'],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
