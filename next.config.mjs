/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@bitcoin-os/bridge'],
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
  // Exclude bitcoin-art directory from build
  experimental: {
    externalDir: false,
  },
};

export default nextConfig;