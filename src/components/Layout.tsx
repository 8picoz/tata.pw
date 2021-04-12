import React from "react";
import { NotFoundBoundary } from "react-navi";
import styled from "styled-components";
import { NotFound } from "./organisms/NotFound";
import { NaviBar } from "./shared/NavBar/NavBar";

const PageContainer = styled.div``;

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NotFoundBoundary render={NotFound}>
        <PageContainer>{children}</PageContainer>
      </NotFoundBoundary>
      <NaviBar />
    </div>
  );
};

export { Layout };
