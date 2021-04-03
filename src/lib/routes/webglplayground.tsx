import { mount, route } from "navi";
import React from "react";
import { WebGLPlayground } from "../../components/pages/WebGLPlayground";

export default mount({
    "/": route(async () => {
        return { view: <WebGLPlayground /> };
    }),
});