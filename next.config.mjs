/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['instagram.com', 'www.instagram.com', 'cdninstagram.com'],
  },
  compress: true,
}

export default nextConfig
