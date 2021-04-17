import { mount, route } from "navi";
import React from "react";
import { Blog } from "../../components/pages/Blog";
import { Post } from "../../components/pages/Post";

export default mount({
  "/": route(async () => {
    return { view: <Blog /> };
  }),
  "/:post_file_name": route(async (req) => {
    const fileName = req.params.post_file_name;

    return { view: <Post postFileName={fileName} /> };
  }),
});
