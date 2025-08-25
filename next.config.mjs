/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // output: 'export', // Static HTML for GitHub Pages
  // basePath: '/FBG', // Replace with your repo name
  // assetPrefix: '/FBG/', // Replace with your repo name
  // trailingSlash: true, // Ensures CSS/JS paths work correctly on subpaths
};

export default nextConfig;
