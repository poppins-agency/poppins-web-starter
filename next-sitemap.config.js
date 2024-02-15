/** @type {import('next-sitemap').IConfig} */
module.exports = {
  //TODO change to your domain
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true,
};
