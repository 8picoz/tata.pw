import matter from "gray-matter";
import { RESOURCE_PATH_FILE_URL } from "../constants/path";
import { FrontMatter, Markdown, ResourcePathFile } from "../types/markdown";

//webフロントなのでfsではなくhttpで取ってくるようにする
//path_generatorがjsonを作成する
async function GetAllPostFileName(): Promise<ResourcePathFile> {
    const resp = await fetch(RESOURCE_PATH_FILE_URL);

    //jsonの型のバリデーションは走らないので注意
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

export { GetAllPostFileName, GetPostMarkdown };

