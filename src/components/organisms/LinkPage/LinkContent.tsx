import React from "react";
import styled from "styled-components";

interface Props {
    linkTargetServiceName: string,
    targetServiceId: string,
    linkUrl: string,
}

const Container = styled.div`
    text-align: center;
    font-size: 20px;
`;

const LinkContent: React.FC<Props> = (props) => {
    return (
        <Container>
            <p>{props.linkTargetServiceName}: <a href={props.linkUrl}>@{props.targetServiceId}</a></p>
        </Container>
    );
};

export { LinkContent };

