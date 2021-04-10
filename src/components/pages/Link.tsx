import React from "react";
import { LinkContent } from "../organisms/LinkPage/LinkContent";
import { ContentsContainer } from "../shared/ContentsContainer";

const Link: React.FC = () => {
    return (
        <div>
            <ContentsContainer>
                <LinkContent linkTargetServiceName="twitter" targetServiceId="8picumu" linkUrl="https://twitter.com/8picomu"/>
                <LinkContent linkTargetServiceName="github" targetServiceId="8picomu" linkUrl="https://github.com/8picomu"/>
            </ContentsContainer>
        </div>
    );
};

export { Link };

