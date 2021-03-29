import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`

`;

interface CardNameContentType {
    name: string;
    discription: string;
    twitterID: string;
    githubID: string;
};

const CardNameContent: CardNameContentType = {
    name: "たた",
    discription: "色々やりたいです",
    twitterID: "8picomu",
    githubID: "8picomu",
};

const NameCard: React.FC = () => {



    return (
        <CardContainer>
            <p>{CardNameContent.name}</p>
        </CardContainer>
    );
};

export { NameCard };