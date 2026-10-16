/** @type {import('next').NextConfig} */
const FRAME_ANCESTORS =
  "frame-ancestors 'self' capacitor://localhost https://localhost https://web.bwalletx.com https://desktop.bwalletx.com";

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  async headers() {
    return [{ source: '/:path*', headers: [{ key: 'Content-Security-Policy', value: FRAME_ANCESTORS }] }];
  },
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