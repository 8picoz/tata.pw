import React from "react";
import { NotFoundBoundary } from "react-navi";
import styled from "styled-components";
import { NotFound } from "./organisms/NotFound";

const PageContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
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