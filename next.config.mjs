/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable optimization for all image formats
    formats: ['image/webp', 'image/avif', 'image/jpg', "image/png"],
    // If you need to load images from external domains, add them here
    // domains: ['example.com'],
  },
  // Enable static exports if you want to deploy as a static site
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig