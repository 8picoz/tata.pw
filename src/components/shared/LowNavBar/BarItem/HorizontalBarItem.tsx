import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import styled from "styled-components";
import { BarItemProps } from "../LowNavBar";
import { textStyle } from "./textStyle";

const HorizontalBarItemContainer = styled.li`
    width: 180px;
    height: 35px;
    margin: 0 20px;
    color: #FFFFFF;
    text-align: center;
    background-color: #000000;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;
    vertical-align: top;

    ${ textStyle }

    a {
        bottom: 0;
        margin: 0;
        padding: 0;
        display: inline-block;
        vertical-align: bottom;
    }

    :hover {
        height: 80px;
    }
`;

const HorizontalBarItem: React.FC<BarItemProps> = React.memo(props => {
    const navigation = useNavigation();
    const handleClickItem = useCallback(() => {
        navigation.navigate(props.link);
    }, []);

    return (
        <HorizontalBarItemContainer onClick={handleClickItem}><a>{props.description}</a></HorizontalBarItemContainer>
    );
});

export { HorizontalBarItem };

