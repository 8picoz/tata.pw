import React from "react";
import styled from "styled-components";

const BaseContainer = styled.div`
  margin: 0 0 0 auto;

  width: 80px;
  height: 30px;
  background-color: #333333;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  cursor: pointer;

  p {
    text-align: center;
    line-height: 30px;
  }

  :hover {
    background-color: #666666;
  }
`;

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const BaseButton: React.VFC<Props> = (props) => {
  return (
    <BaseContainer onClick={props.onClick}>
      <p>{props.text}</p>
    </BaseContainer>
  );
};

const ReadMoreButton = styled(BaseButton)``;

const BackButton = styled(BaseButton)``;

export { BaseButton, ReadMoreButton, BackButton };
