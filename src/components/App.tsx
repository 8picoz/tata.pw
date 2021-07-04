import React, { Suspense } from "react";
import { Router, View } from "react-navi";
import styled from "styled-components";
import { routes } from "../lib/routes";
import { Layout } from "./Layout";

const LoadingContainer = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const App: React.VFC = () => {
  return (
    <Router routes={routes}>
      <Suspense fallback={<LoadingContainer>Loading view...</LoadingContainer>}>
        <Layout>
          <View />
        </Layout>
      </Suspense>
    </Router>
  );
};

export { App };
