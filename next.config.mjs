/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable optimization for all image formats
    formats: ['image/webp', 'image/avif'],
    // If you need to load images from external domains, add them here
    // domains: ['example.com'],
  },
  // For Tailwind CSS v4 compatibility
  experimental: {
    optimizeCss: true,
  },
  // Enable static exports if you want to deploy as a static site
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig