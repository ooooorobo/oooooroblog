import fs from "fs"
import { globby } from "globby"
import prettier from "prettier"

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html", printWidth: 1000 });

const genDate = new Date().toISOString();
const domain = "https://www.oooooroblog.com";

(async () => {
    const pages = await globby([
        // include
        "src/pages/**/*.tsx",
        "src/pages/**/*.mdx",
        // exclude
        "!src/pages/_*.tsx",
        "!src/pages/api/**/*.*",
    ]);

    const makeUrlNode = (url, lastMod = genDate) => `
        <url> 
          <loc>${url}</loc> 
          <lastmod>${lastMod}</lastmod> 
        </url>`;

    let xml = `
    <?xml version="1.0" encoding="UTF-8"?> 
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    `;

    xml += pages.map(page => {
        const path = page
            .replace('src/pages/', '')
            .replace('.mdx', '')
            .replace('.tsx', '')
            .replace('index', '')
        return makeUrlNode(`${domain}/${path}`)
    }).join('');

    xml += '\n</urlset>';

    const formattedXml = formatted(xml);
    fs.writeFileSync("./public/sitemap.xml", formattedXml, "utf8");
})();
