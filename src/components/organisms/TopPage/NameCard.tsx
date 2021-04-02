import React from "react";
import styled from "styled-components";
import icon from "./assets/tata.svg";


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

//[TODO]: 普段の画像を板ポリのモデルに変換してWebGLから色々いじる
const NameCard: React.FC = () => {

    return (
        <CardContainer>
            <img src={icon} />
            <p>{CardNameContent.name}</p>
        </CardContainer>
    );
};

export { NameCard };

