import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 0 0 auto;

  width: 80px;
  height: 30px;
  background-color: #333333;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

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

const ReadMoreButton: React.VFC<Props> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <p>{props.text}</p>
    </Container>
  );
};

export { ReadMoreButton };
