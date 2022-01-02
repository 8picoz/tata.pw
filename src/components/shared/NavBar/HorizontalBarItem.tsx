import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import styled from "styled-components";

const HorizontalBarItemContainer = styled.li``;

interface Props {
  link: string;
  description: string;
}

const HorizontalBarItem: React.VFC<Props> = React.memo((props) => {
  const navigation = useNavigation();
  const handleClickItem = useCallback(() => {
    navigation.navigate(props.link);
  }, []);

  return (
    <HorizontalBarItemContainer onClick={handleClickItem}>
      <a>{props.description}</a>
    </HorizontalBarItemContainer>
  );
});

export { HorizontalBarItem };
