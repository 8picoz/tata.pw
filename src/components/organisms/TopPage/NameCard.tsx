import React from "react";
import { Link } from "react-navi";
import styled from "styled-components";
import { WEBGL_PLAYGROUND } from "../../../lib/constants/path";

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
            <p>{CardNameContent.name}</p>
            <Link href={WEBGL_PLAYGROUND}>
                <p>to webgl playgroud</p>
            </Link>
        </CardContainer>
    );
};

export { NameCard };