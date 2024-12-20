import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "postings/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`postings/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            keywords: matterResult.data.keywords,
        };
    });

    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export default getPostMetadata;
