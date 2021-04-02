import React from "react";
import { NotFoundBoundary } from "react-navi";
import styled from "styled-components";
import { NotFound } from "./organisms/NotFound";
import { LowNaviBar } from "./shared/LowNavBar/LowNavBar";

const PageContainer = styled.div`

`;

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <NotFoundBoundary render={NotFound}>
                <PageContainer>{children}</PageContainer>
            </NotFoundBoundary>
            <LowNaviBar />
        </div>
    );
};

export { Layout };

