/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/CV',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
