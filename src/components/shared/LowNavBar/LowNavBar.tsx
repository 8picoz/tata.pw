import React from "react";
import styled, { css } from "styled-components";
import { BLOG, CONTACT, LINK, ROOT, WEBGL_PLAYGROUND } from "../../../lib/constants/path";
import { VerticalBarItem } from "./BarItem/VerticalBarItem";

interface BarItemProps {
    link: string;
    description: string;
};

const Container = styled.ul`
    width: 700px;
    height: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    list-style: none;
`;

const BarContainer = css`
    position: absolute;
    top: 0;
`;

const VerticalBarContainer = styled.div`
    ${BarContainer}
`;

const LowNaviBar: React.FC = React.memo(() => {
    return (
        <Container>
            <VerticalBarContainer>
                <VerticalBarItem link={ROOT} description={"Top"} />
                <VerticalBarItem link={WEBGL_PLAYGROUND} description={"WebGL Playground"} />
                <VerticalBarItem link={BLOG} description={"blog"} />
                <VerticalBarItem link={LINK} description={"link"} />
                <VerticalBarItem link={CONTACT} description={"contact"} />
            </VerticalBarContainer>
        </Container>
    );
});

export { LowNaviBar, BarItemProps };

