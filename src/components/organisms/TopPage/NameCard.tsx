import React from "react";
import styled from "styled-components";
import icon from "./assets/tata.svg";


const CardContainer = styled.div`
    color: #DDDDDD;
`;

interface CardNameContentType {
    name: string;
    description: string;
    twitterID: string;
    githubID: string;
};

const CardNameContent: CardNameContentType = {
    name: "太田 侑冶",
    description: "色々やりたいです",
    twitterID: "8picomu",
    githubID: "8picomu",
};

const NameCard: React.FC = () => {

    return (
        <CardContainer>
            <img src={icon} width={200} height={200} />
            <p>{CardNameContent.name}</p>
            <p>{CardNameContent.description}</p>
            <p>{CardNameContent.twitterID}</p>
            <p>{CardNameContent.githubID}</p>
        </CardContainer>
    );
};

export { NameCard };

