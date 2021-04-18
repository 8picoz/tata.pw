import { mount, route } from "navi";
import React from "react";
import { Blog } from "../../components/pages/Blog";
import { Post } from "../../components/pages/Post";
import { BLOGPOST_DIR_URL } from "../constants/path";

export default mount({
  "/": route(async () => {
    return { view: <Blog /> };
  }),
  "/:post_file_name": route(async (req) => {
    const fileName = req.params.post_file_name;

    return {
      view: <Post postDirPath={BLOGPOST_DIR_URL} postFileName={fileName} />,
    };
  }),
});
