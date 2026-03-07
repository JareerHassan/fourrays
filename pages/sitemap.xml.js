import blogData from "../util/blog.json";

function buildUrlset(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${priority !== undefined ? `<priority>${priority}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const baseUrl = "https://FourRayssolutions.com";
  const lastmod = new Date().toISOString();

  const staticPages = [
    { loc: `${baseUrl}/`, changefreq: "weekly", priority: 1.0 },

    { loc: `${baseUrl}/about`, changefreq: "monthly", priority: 0.8 },
    { loc: `${baseUrl}/faqs`, changefreq: "monthly", priority: 0.7 },
    { loc: `${baseUrl}/contact`, changefreq: "monthly", priority: 0.7 },

    // ✅ your current routes
    { loc: `${baseUrl}/privacy`, changefreq: "yearly", priority: 0.3 },
    { loc: `${baseUrl}/terms`, changefreq: "yearly", priority: 0.3 },

    // Services
    { loc: `${baseUrl}/medical-credentialing`, changefreq: "monthly", priority: 0.8 },
    { loc: `${baseUrl}/compliance`, changefreq: "monthly", priority: 0.7 },
    { loc: `${baseUrl}/enrollment`, changefreq: "monthly", priority: 0.8 },
    { loc: `${baseUrl}/medical-billing`, changefreq: "monthly", priority: 0.8 },
    { loc: `${baseUrl}/insurance`, changefreq: "monthly", priority: 0.7 },
    { loc: `${baseUrl}/virtual-appointment`, changefreq: "weekly", priority: 0.7 },

    // Blog index
    { loc: `${baseUrl}/blog`, changefreq: "weekly", priority: 0.6 },
  ].map((u) => ({ ...u, lastmod }));

  // ✅ Blog ID-based URLs: /blog/1, /blog/2 ...
  // If your blog.json has { id: 1 } then it will create /blog/1
  // If id is missing, it will fallback to index+1
  const blogUrls = (blogData || []).map((p, index) => {
    const id = p?.id ?? index + 1;
    return {
      loc: `${baseUrl}/blog/${id}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.5,
    };
  });

  const xml = buildUrlset([...staticPages, ...blogUrls]);

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
