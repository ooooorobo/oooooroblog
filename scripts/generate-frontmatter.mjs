import fs from "fs"
import path from "path"

const postBasePath = "/backup/posts";
const getPostPath = (filePath) =>
    path.join(process.cwd(), postBasePath, filePath);

const readFromDirectory = async (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) reject(err);
            resolve(files);
        });
    });
};

const readFile = async (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dirPath, (err, file) => {
            if (err) reject(err);
            resolve(file);
        });
    });
};
const writeFile = async (dirPath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dirPath, data, (err, file) => {
            if (err) reject(err);
            resolve(file);
        });
    });
};

const getFileStat = async (filenameWithPath) => {
    return new Promise((resolve, reject) => {
        fs.stat(filenameWithPath, (err, stats) => {
            if (err) reject(err);
            resolve(stats);
        });
    });
};

const getAllFilePath = async (dirPath) => {
    const names = (await readFromDirectory(dirPath)).map((name) => ["", name]);
    const filePaths = [];
    for (const [dir, name] of names) {
        const joined = path.join(dirPath, dir, name);
        if ((await getFileStat(joined)).isFile()) {
            filePaths.push([dir, name].join("/"));
        } else {
            names.push(
                ...(await readFromDirectory(joined)).map((foundName) => [
                    [dir, name].join("/"),
                    foundName,
                ])
            );
        }
    }
    return filePaths;
};

const getFileMeta = async (filePath) => {
    const fileContents = await readFile(filePath);
    const replaced = fileContents
        .toString()
        .match(/createPostMeta\(\{(.|\n)*}\);/g)[0]
        .match("{(.|\n)*}")[0]
        .replace(/ {4}(\w*):/g, (_, key) => {
            return `"${key}":`;
        })
        .replace(/'([^'\n]*)'/g, (_, contents) => `"${contents}"`)
        .replace(/,(}|\n)*$/, "}");
    return JSON.parse(replaced);
};

const makeFrontMatter = (meta) => {
    const date = meta.postedAt.trim()
        .split(".")
        .filter(Boolean)
        .map((x) => x.trim())
        .join("-");
    return `---
id: ${meta.index}
title: ${meta.title}
description: ${meta.description}
tags: ${meta.tags}
date: ${date}
---
`;
};

(async () => {
    const paths = await getAllFilePath(getPostPath(""));
    console.log(paths);
    const metas = await Promise.all(
        paths.map((filePath) => getFileMeta(getPostPath(filePath)))
    );
    paths.forEach(async (filePath, idx) => {
        const original = await readFile(getPostPath(filePath));
        const frontmatter = makeFrontMatter(metas[idx]);

        const pattern = /export\s+const\s+meta\s+=\s+PostUtil/;
        const match = original.toString().match(pattern);

        const newContent = frontmatter + (match ? original.toString().substring(0, match.index) : original);
        writeFile(path.join(process.cwd(), 'src/posts', filePath), newContent)
    });
})();
