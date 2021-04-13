import { mount, route } from "navi";
import React from "react";
import { Blog } from "../../components/pages/Blog";

export default mount({
  "/": route(async () => {
    return { view: <Blog /> };
  }),
});
