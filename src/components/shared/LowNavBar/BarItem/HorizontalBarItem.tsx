import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import styled from "styled-components";
import { BarItemProps } from "../LowNavBar";
import { textStyle } from "./textStyle";

const HorizontalBarItemContainer = styled.li`
    width: 180px;
    height: 20px;
    float: left;
    margin: 0 10px;
    color: #FFFFFF;
    text-align: center;
    background-color: #000000;
    cursor: pointer;

    ${ textStyle }
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