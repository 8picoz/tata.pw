import React from "react";
import styled, { css } from "styled-components";
import { ROOT, WEBGL_PLAYGROUND, LINK, CONTACT } from "../../../lib/constants/path";
import { VerticalBarItem } from "./BarItem/VerticalBarItem";
import { HorizontalBarItem } from "./BarItem/HorizontalBarItem";

interface BarItemProps {
    link: string;
    description: string;
};

const Container = styled.ul`
    width: 500px;
    height: 300px;
    margin: 0;
    padding: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    list-style: none;
`;

const BarContainer = css`
    position: absolute;
    bottom: 0;
`;

const VerticalBarContainer = styled.div`
    ${BarContainer}
`;

const HorizontalBarContainer = styled.div`
    ${BarContainer}
    padding: 0 10px;
`;

const LowNaviBar: React.FC = React.memo(() => {
    return (
        <Container>
            <VerticalBarContainer>
                <VerticalBarItem link={CONTACT} description={"contact"} />
                <VerticalBarItem link={LINK} description={"link"} />
            </VerticalBarContainer>
            <HorizontalBarContainer>
                <HorizontalBarItem link={ROOT} description={"Top"} />
                <HorizontalBarItem link={WEBGL_PLAYGROUND} description={"WebGL PlayGround"} />
            </HorizontalBarContainer>
        </Container>
    );
});

export { LowNaviBar, BarItemProps };