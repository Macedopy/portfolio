/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add images: { unoptimized: true } if you want to use the <Image /> component in static mode
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
