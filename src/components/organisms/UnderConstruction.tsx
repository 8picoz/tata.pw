import React from "react";
import styled from "styled-components";

const Container = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const UnderConstruction: React.VFC = () => {
  return <Container>under construction...</Container>;
};

export { UnderConstruction };
