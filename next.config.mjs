/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa verificações extras do React em dev
  reactStrictMode: true,

  // ⚡ Força o Next a usar PostCSS no lugar do LightningCSS (que não funciona no ARM/Termux)
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;