import { route, mount } from "navi";
import React from "react";
import { WebGLPlayground } from "../../components/pages/WebGLPlayground";

export default mount({
    "/": route({
        title: "WebGL Playground",
        view: <WebGLPlayground />
    }),
});