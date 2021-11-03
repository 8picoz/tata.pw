import React, { useEffect, useReducer } from "react";
import { GetAllBlogPostFileName } from "../../lib/api/markdown";
import { BLOG_POST_DIR_URL } from "../../lib/constants/path";
import { BlogPost } from "../organisms/BlogPage/BlogPost";
import { PageNaviBar } from "../organisms/BlogPage/PageNaviBar";

interface store {
  blog: string[];
}

interface actionType {
  type: "update";
  payload: {
    blog: string[];
  };
}

const initialState: store = {
  blog: {} as string[],
};

const reducer: React.Reducer<store, actionType> = (state, action) => {
  switch (action.type) {
    case "update":
      return { blog: action.payload.blog };
    default:
      return state;
  }
};

const Blog: React.VFC = () => {
  const [fileNames, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = "Blog";

    const f = async () => {
      const data = await GetAllBlogPostFileName();

      dispatch({
        type: "update",
        payload: {
          blog: data.blog,
        },
      });
    };

    f();
  }, []);

  return (
    <div>
      {fileNames.blog.length !== undefined &&
        fileNames.blog.map((data, i) => {
          return (
            <BlogPost
              key={i}
              postDirPath={BLOG_POST_DIR_URL}
              postFileName={data}
            />
          );
        })}

      {fileNames.blog.length !== undefined && (
        <PageNaviBar length={fileNames.blog.length}></PageNaviBar>
      )}
    </div>
  );
};

export { Blog };
