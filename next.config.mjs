/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/originals/**', // Matches /originals/e0/4a/52/...
      },
      {
        protocol: 'https',
        hostname: 'media3.giphy.com',
        port: '',
        pathname: '/media/**', // Optional: Restricts to paths starting with /media/
      },
    ],
  },
};

export default nextConfig;
