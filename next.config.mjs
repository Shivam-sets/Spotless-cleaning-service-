/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for a year (sources are content-hashed/static).
    minimumCacheTTL: 31536000,
  },
  eslint: {
    // Linting is run separately; don't block production builds on it.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
