/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-tester2',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
