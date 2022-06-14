import fs from "fs";
import { getAllPostIds } from '../lib/posts'

function generateSiteMap(staticPages, dynamicPosts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${staticPages
      .map((url) => {
        return `
        <url>
          <loc>${url}</loc>
        </url>`;
      }).join('')}
    ${dynamicPosts
      .map((post) => {
        return `
       <url>
           <loc>${post}</loc>
       </url>
     `;
      }).join('')}
   </urlset>
 `;
}

function SiteMap() { }

export async function getServerSideProps({ res }) {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://kyled.wtf",
  }[process.env.NODE_ENV];

  const staticPages = [`${baseUrl}/`, `${baseUrl}/about`];

  const postIds = getAllPostIds()
  const dynamicPosts = postIds.map((postId) => {
    const id = postId.params.id;

    return `${baseUrl}/posts/${id}`;
  });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(staticPages, dynamicPosts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;