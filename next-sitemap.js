/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.VERCEL_URL || "https://akademi.3hhareketi.org",
  generateRobotsTxt: true, // (optional)
  exclude: ["/admin/*", "/egitimler/[category]/[slug]/*", "/eposta-dogrulama"],
};
