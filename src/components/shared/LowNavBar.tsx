import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import styled from "styled-components";
import { ROOT, WEBGL_PLAYGROUND } from "../../lib/constants/path";

interface BarItemProps {
    link: string;
    description: string;
};

const BarItemContainer = styled.li`
    width: 200px;
    min-height: 100%;
    float: left;
    margin: 0 10px;
    color: #FFFFFF;
    text-align: center;
    background-color: #000000;
    cursor: pointer;

    a {
        font-weight: bold;
        user-select: none;
    }
`;

const HorizontalBarItem: React.FC<BarItemProps> = React.memo(props => {
    const navigation = useNavigation();
    const handleClickItem = useCallback(() => {
        navigation.navigate(props.link);
    }, []);

    return (
        <BarItemContainer onClick={handleClickItem}><a>{props.description}</a></BarItemContainer>
    );
});

const Container = styled.ul`
    width: 100%;
    height: 40px;
    margin: 0 5px;
    padding: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    list-style: none;
`;

const LowNaviBar: React.FC = React.memo(() => {
    return (
        <Container>
            <HorizontalBarItem link={ROOT} description={"Top"} />
            <HorizontalBarItem link={WEBGL_PLAYGROUND} description={"WebGL PlayGround"} />
        </Container>
    );
});

export { LowNaviBar };