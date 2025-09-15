import type {NextConfig} from 'next';
const repoName = 'TM38-Calculator';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    allowedDevOrigins: [
      '*.cuddly-space-guacamole-vwj4rgwg75qfxxpv.github.dev/',
    ],
  },
};

export default nextConfig;
