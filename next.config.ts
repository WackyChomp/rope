import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '*',
      },
      // {
      //   protocol: 'https',
      //   hostname: '',
      // },
      // {
      //   protocol: 'https',
      //   hostname: '',
      //   port: '',
      //   pathname: '',
      // },
    ]
  }
};

export default nextConfig;
