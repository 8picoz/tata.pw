import React from "react";
import { BLOGPOST_DIR_URL } from "../../lib/constants/path";
import { BlogPost } from "../organisms/BlogPage/BlogPost";

const Blog: React.VFC = () => {
  return (
    <div>
      <BlogPost postDirPath={BLOGPOST_DIR_URL} postFileName={"20210412.md"} />
    </div>
  );
};

export { Blog };
