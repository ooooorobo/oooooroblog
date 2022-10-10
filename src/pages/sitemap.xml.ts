import { GetServerSidePropsContext } from "next";
import PostService from "@src/service/postService";

const genDate = new Date().toISOString();
const domain = "https://www.oooooroblog.com";

function makeUrlNode(url: string, lastMod = genDate) {
  return `
        <url> 
          <loc>${url}</loc> 
          <lastmod>${lastMod}</lastmod> 
        </url>`;
}

function generateSiteMap(posts: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?> 
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>${domain}</loc>
                </url>
                ${posts
                  .map((page) => {
                    const path = page
                      .replace(".mdx", "")
                      .replace(".tsx", "")
                      .replace("index", "");
                    return makeUrlNode(`${domain}/posts/${path}`);
                  })
                  .join("")}
            </urlset>
`;
}

export default function SiteMap() {
  //
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const slugs = await PostService.instance.getAllPostSlugs();
  const sitemap = generateSiteMap(slugs);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}
