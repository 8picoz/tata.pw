interface FrontMatter {
    title: string;
}

interface Markdown {
    matter: FrontMatter;
    md: string;
    fileName: string;
}

interface ResourcePathFile {
    blog: string[];
}

export { FrontMatter, Markdown, ResourcePathFile };

