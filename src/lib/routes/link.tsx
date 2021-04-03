import { mount, route } from "navi";
import React from "react";
import { Link } from "../../components/pages/Link";

export default mount({
    "/": route({
        title: "Link",
        view: <Link />
    }),
});