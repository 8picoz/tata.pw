import React from "react";
import { NotFoundBoundary } from "react-navi";
import { NotFound } from "./organisms/NotFound";
import styled from "styled-components";

const PageContainer = styled.div`

`;

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <NotFoundBoundary render={NotFound}>
                <PageContainer>{children}</PageContainer>
            </NotFoundBoundary>
        </div>
    );
};

export { Layout };