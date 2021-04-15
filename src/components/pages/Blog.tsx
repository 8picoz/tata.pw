import React from "react";
import { BLOGPOST_DIR_URL } from "../../lib/constants/path";
import { BlogPost } from "../organisms/BlogPage/BlogPost";

const Blog: React.FC = () => {
  return (
    <div>
      <BlogPost postPath={BLOGPOST_DIR_URL + "/20210412.md"} />
    </div>
  );
};

export { Blog };
