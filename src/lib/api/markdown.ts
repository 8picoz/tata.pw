import matter from "gray-matter";
import { BLOG_RESOURCE_PATH_FILE_URL, SHADER_RESOURCE_PATH_FILE_URL } from "../constants/path";
import { BlogResourcePathFile, FrontMatter, Markdown, ShaderResourcePathFile } from "../types/markdown";

//path_generatorがjsonを作成する
async function GetAllBlogPostFileName(): Promise<BlogResourcePathFile> {
    const resp = await fetch(BLOG_RESOURCE_PATH_FILE_URL);

    //jsonの型のバリデーションは走らないので注意
    return await resp.json();
}

async function GetAllShaderPostFileName(): Promise<ShaderResourcePathFile> {
    const resp = await fetch(SHADER_RESOURCE_PATH_FILE_URL);

    return await resp.json();
}

//TODO
async function GetPostMarkdown(dirPath: string, fileName: string): Promise<Markdown> {
    const resp = await fetch(dirPath + fileName);
    const post = await resp.text();
    const { data, content } = matter(post);

    return {
        matter: data as FrontMatter,
        md: content,
        fileName: fileName,
    }
}

export { GetAllBlogPostFileName, GetPostMarkdown };

