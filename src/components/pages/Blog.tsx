import React from "react";
import { BlogPost } from "../organisms/BlogPage/BlogPost";

const Blog: React.FC = () => {
  return (
    <div>
      <BlogPost title="test1" mdPost="test1" />
      <BlogPost title="test2" mdPost="test2" />
      <BlogPost title="test3" mdPost="test3" />
    </div>
  );
};

export { Blog };
