use std::env;
use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::Path;

use serde::{Serialize, Deserialize};

const BLOG_POST_DIR: &str = "blog/markdown/";
const BLOG_RESOURCE_PATH_PATH: &str = "blogResourcePath.json";

const SHADER_POST_DIR: &str = "shader/";
const SHADER_RESOURCE_PATH_PATH: &str = "shaderResourcePath.json";

#[derive(Debug, Serialize, Deserialize)]
struct BlogJson {
    blog: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
struct ShaderJson {
    shader: Vec<String>,
}

fn main() {    
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        eprintln!("Please specify the target folder path as the first argument");
        std::process::exit(1);
    }
    let dir = Path::new(&args[1]);

    let blog_post = dir.join(BLOG_POST_DIR);
    let webgl_post = dir.join(SHADER_POST_DIR);

    let blog_paths = fs::read_dir(blog_post).unwrap_or_else(|_| {
        eprintln!("It isn't existent blog folder.");
        std::process::exit(1);
    });
    let shader_paths = fs::read_dir(webgl_post).unwrap_or_else(|_| {
        eprintln!("It isn't existent blog folder.");
        std::process::exit(1);
    });

    let mut blog_paths: Vec<String> = blog_paths.into_iter().map(|item| item.unwrap().file_name().into_string().unwrap().replace(".md", "")).collect();
    let mut shader_paths: Vec<String> = shader_paths.into_iter().map(|item| item.unwrap().file_name().into_string().unwrap()).collect();

    blog_paths.sort_by(|a, b| b.cmp(a));
    shader_paths.sort_by(|a, b| b.cmp(a));

    let j = BlogJson { blog: blog_paths };
    let data = serde_json::to_string(&j).unwrap();

    let resource_path = dir.join(BLOG_RESOURCE_PATH_PATH);

    let mut f = File::create(resource_path).unwrap();

    f.write_all(data.as_bytes()).unwrap();

    println!("{:?}; generated", data);

    let j = ShaderJson { shader: shader_paths };
    let data = serde_json::to_string(&j).unwrap();

    let resource_path = dir.join(SHADER_RESOURCE_PATH_PATH);

    let mut f = File::create(resource_path).unwrap();

    f.write_all(data.as_bytes()).unwrap();

    println!("{:?}; generated", data);
}
