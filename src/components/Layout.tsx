import React from "react";
import { NotFoundBoundary } from "react-navi";
import { NotFound } from "./organisms/NotFound";
import styled from "styled-components";
import { LowNaviBar } from "./shared/LowNavBar";

const PageContainer = styled.div`

`;

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <NotFoundBoundary render={NotFound}>
                <PageContainer>{children}</PageContainer>
                <LowNaviBar />
            </NotFoundBoundary>
        </div>
    );
};

export { Layout };