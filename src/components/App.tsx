import React from "react";
import { Router, View } from "react-navi";
import { routes } from "../lib/routes";
import { Layout } from "./Layout";

const App: React.FC = () => {
    return (
        <Router routes={routes}>
            <Layout>
                <View />
            </Layout>
        </Router>
    );
};

export { App };