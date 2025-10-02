/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      canvas: false,
    };
    
    // Handle Konva for SSR
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'konva'];
    }
    
    return config;
  },
};

export default nextConfig;