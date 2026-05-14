import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Serve uploaded files from /app/uploads
  async rewrites() {
    return [
      {
        source: '/uploads/:filename',
        destination: '/api/upload/:filename',
      },
    ];
  },
};

export default nextConfig;