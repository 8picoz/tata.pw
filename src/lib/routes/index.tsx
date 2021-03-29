import { route, mount, lazy } from "navi";
import React from "react";
import { Top } from "../../components/pages/Top";

export const routes = mount({
    "/": route({
        title: "tata.pw",
        view: <Top />,
    }),
    "/WebGLPlayground": lazy(() => import("./webgl")),
});