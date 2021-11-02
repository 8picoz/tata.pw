import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 80%;
  min-height: 100%;
  margin: 50px auto;
  padding: 10px;
  border-right: groove #999999 1px;
  border-left: groove #999999 1px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  a {
    color: #dddddd;
  }

  a:visited {
    color: #dddddd;
  }

  a:hover {
    color: #666666;
  }
`;

const ContentsContainer: React.FC = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export { ContentsContainer };
