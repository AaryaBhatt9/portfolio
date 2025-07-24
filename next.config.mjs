// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     // basePath: '/portfolio1',
//     // assetPrefix: '/portfolio1/', 
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/portfolio'; // Your GitHub repo name

const nextConfig = {
  output: 'export',
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName + '/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
