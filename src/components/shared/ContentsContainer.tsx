import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 80%;
  min-height: 100%;
  margin: 50px auto;
  padding: 10px;
  border-right: groove #999999 1px;
  border-left: groove #999999 1px;
`;

const ContentsContainer: React.FC = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export { ContentsContainer };
