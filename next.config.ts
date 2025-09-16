/** @type {import('next').NextConfig} */

const repo = 'TM38-Calculator'

const nextConfig = {
  reactStrictMode: true,
  
  // Enables the static export required for GitHub Pages [2, 3, 4]
  output: 'export',
  
  // Sets the path prefix for routing within the subdirectory 
  basePath: `/${repo}`,
  
  // Sets the path prefix for static assets like CSS and JS [5, 6]
  assetPrefix: `/${repo}/`,
  
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

// Use the correct CommonJS syntax for exporting the configuration
module.exports = nextConfig;