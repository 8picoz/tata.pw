import React, { useEffect, useReducer } from "react";
import { GetAllPostFileName } from "../../lib/api/markdown";
import { BLOGPOST_DIR_URL } from "../../lib/constants/path";
import { BlogPost } from "../organisms/BlogPage/BlogPost";

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
    const f = async () => {
      const data = await GetAllPostFileName();

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
              postDirPath={BLOGPOST_DIR_URL}
              postFileName={data}
            />
          );
        })}
    </div>
  );
};

export { Blog };