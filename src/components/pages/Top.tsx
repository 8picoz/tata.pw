import React from "react";
import styled from "styled-components";
import { NameCard } from "../organisms/TopPage/NameCard";

const TopPageContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

const Top: React.FC = () => {
    return (
        <TopPageContainer>
            <NameCard />
        </TopPageContainer>
    );
};

export { Top };