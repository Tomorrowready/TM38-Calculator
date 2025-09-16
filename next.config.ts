/** @type {import('next').NextConfig} */
const repo = 'TM38-Calculator'
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  
  // Enables the static export required for GitHub Pages
  output: 'export',
  
  // Add trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
  
  // Only set basePath and assetPrefix in production
  basePath: isProduction ? `/${repo}` : '',
  assetPrefix: isProduction ? `/${repo}/` : '',
  
  // Disables server-side image optimization, which is incompatible with static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Your existing project-specific configurations
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    allowedDevOrigins: [
      '*.cuddly-space-guacamole-vwj4rgwg75qfxxpv.github.dev/',
    ],
  },
};

module.exports = nextConfig;