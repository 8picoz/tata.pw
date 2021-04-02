import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import styled from "styled-components";
import { BarItemProps } from "./LowNavBar";

const VerticalBarItemContainer = styled.li`
    width: 30px;
    height: 100px;
    writing-mode: vertical-rl;
    text-align: center;
    color: #DDDDDD;
    background-color: #333333;
    margin: 40px 0;
    cursor: pointer;
    transition: all 0.1s;

    a {
        user-select: none;
    }

    :hover {
        width: 80px;
    }
`;

const VerticalBarItem: React.FC<BarItemProps> = React.memo(props => {
    const navigation = useNavigation();
    const handleClickItem = useCallback(() => {
        navigation.navigate(props.link);
    }, []);

    return (
        <VerticalBarItemContainer onClick={handleClickItem}><a>{props.description}</a></VerticalBarItemContainer>
    );
});

export { VerticalBarItem };

