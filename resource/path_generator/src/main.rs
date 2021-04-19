use std::env;
use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::Path;

use serde::{Serialize, Deserialize};

const BLOG_POST_DIR: &str = "blog/markdown/";
const RESOURCE_PATH_PATH: &str = "resourcePath.json";

#[derive(Debug, Serialize, Deserialize)]
struct Json {
    blog: Vec<String>,
}

fn main() {    
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        eprintln!("Please specify the target folder path as the first argument");
        std::process::exit(1);
    }
    let dir = Path::new(&args[1]);

    let blog_post = dir.join(BLOG_POST_DIR);

    let paths = fs::read_dir(blog_post).unwrap_or_else(|_| {
        eprintln!("It isn't existent folder.");
        std::process::exit(1);
    });

    let mut paths: Vec<String> = paths.into_iter().map(|item| item.unwrap().file_name().into_string().unwrap()).collect();

    paths.sort_by(|a, b| b.cmp(a));

    let j = Json { blog: paths };
    let data = serde_json::to_string(&j).unwrap();

    let resource_path = dir.join(RESOURCE_PATH_PATH);

    let mut f = File::create(resource_path).unwrap();

    f.write_all(data.as_bytes()).unwrap();

    println!("{:?}; generated", data);
}
