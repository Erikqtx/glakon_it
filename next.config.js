/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/legal/AGBS": { page: "/legal/AGBS" },
      "/legal/Datenschutz": { page: "/legal/Datenschutz" },
      "/legal/Impressum": { page: "/legal/Impressum" },
      "/Leistungen/Design": { page: "/Leistungen/Design" },
      "/Leistungen/Fotografie": { page: "/Leistungen/Fotografie" },
      "/Leistungen/Fragen": { page: "/Leistungen/Fragen" },
      "/Leistungen/Hosting": { page: "/Leistungen/Hosting" },
      "/Leistungen/SocialMedia": { page: "/Leistungen/SocialMedia" },
      "/Leistungen/Softwareentwicklung": {
        page: "/Leistungen/Softwareentwicklung",
      },
      "/Leistungen/Systemintegration": {
        page: "/Leistungen/Systemintegration",
      },
      "/Leistungen/Team": { page: "/Leistungen/Team" },
      "/Leistungen/UnsereLeistungen": { page: "/Leistungen/UnsereLeistungen" },
      "/Leistungen/Videografie": { page: "/Leistungen/Videografie" },
      "/portfolio/[id]": { page: "/portfolio/[id]" },
      "/portfolio/Portfolio": { page: "/portfolio/Portfolio" },
      "/404": { page: "/404" },
      "/Kontakt": { page: "/Kontakt" },
      "/UeberUns": { page: "/UeberUns" },
    };
  },
};

module.exports = nextConfig;
