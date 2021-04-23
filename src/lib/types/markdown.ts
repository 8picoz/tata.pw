interface FrontMatter {
    title: string;
}

interface Markdown {
    matter: FrontMatter;
    md: string;
    fileName: string;
}

interface BlogResourcePathFile {
    blog: string[];
}

interface ShaderResourcePathFile {
    shader: string[],
}

export { FrontMatter, Markdown, BlogResourcePathFile, ShaderResourcePathFile };

