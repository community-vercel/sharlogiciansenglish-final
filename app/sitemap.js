import { getUrl } from "./utils/getUrls";

export default async function sitemap() {
  const baseUrl = getUrl();

  const fetchDynamicRoutes = async (endpoint) => {
    const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
    const response = await fetch(`${serverurls}${endpoint}`);
    const data = await response.json();
    return data.data.map((item) => ({
      url: `${baseUrl}/${endpoint}/${item.slug}`,
      lastModified: new Date().toISOString(),
    }));
  };

  const [serviceRoutes, portfolioRoutes, newsRoutes] = await Promise.all([
    fetchDynamicRoutes("services"),
    fetchDynamicRoutes("portfolio"),
    fetchDynamicRoutes("news"),
  ]);

  // Filter out the unwanted URL (e.g., /news/test)
  const filteredNewsRoutes = newsRoutes.filter(route => route.url !== `${baseUrl}/news/test`);

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/service`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/#team`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/news`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/#about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/quote`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
  ];

  // Combine and return the filtered routes
  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...filteredNewsRoutes];
}