/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['instagram.com', 'www.instagram.com', 'cdninstagram.com'],
  },
  compress: true,
  trailingSlash: true,
}

export default nextConfig
