/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],  // AVIF first (preferred), WebP as fallback
    // Your other image config (remotePatterns, etc.) goes here
  },
};

export default nextConfig;