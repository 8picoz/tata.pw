import React, { Suspense } from "react";
import { Router, View } from "react-navi";
import { routes } from "../lib/routes";
import { Layout } from "./Layout";

const App: React.VFC = () => {
  return (
    <Router routes={routes}>
      <Suspense fallback={<h1>Loading view...</h1>}>
        <Layout>
          <View />
        </Layout>
      </Suspense>
    </Router>
  );
};

export { App };
