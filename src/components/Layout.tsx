import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
`;

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <PageContainer>{children}</PageContainer>
        </div>
    );
};

export { Layout };