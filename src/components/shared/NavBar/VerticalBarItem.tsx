import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import styled from "styled-components";

const VerticalBarItemContainer = styled.li`
  width: 30px;
  height: 180px;
  writing-mode: vertical-rl;
  text-align: center;
  color: #dddddd;
  background-color: #252525;
  cursor: pointer;
  transition: all 0.1s;

  a {
    user-select: none;
    font-size: 17px;
  }

  :hover {
    width: 80px;
  }
`;

interface Props {
  link: string;
  description: string;
}

const VerticalBarItem: React.VFC<Props> = React.memo((props) => {
  const navigation = useNavigation();
  const handleClickItem = useCallback(() => {
    navigation.navigate(props.link);
  }, []);

  return (
    <VerticalBarItemContainer onClick={handleClickItem}>
      <a>{props.description}</a>
    </VerticalBarItemContainer>
  );
});

export { VerticalBarItem };
