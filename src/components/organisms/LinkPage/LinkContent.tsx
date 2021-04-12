import React from "react";
import styled from "styled-components";

interface Props {
  linkTargetServiceName: string;
  targetServiceId: string;
  linkUrl?: string;
}

const Container = styled.div`
  text-align: center;
  font-size: 23px;
  margin: 35px 0;
  line-height: 5px;
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

const LinkContent: React.FC<Props> = (props) => {
  return (
    <Container>
      <p>
        {props.linkTargetServiceName}:{" "}
        <a href={props.linkUrl}>{props.targetServiceId}</a>
      </p>
      {props.children}
    </Container>
  );
};

export { LinkContent };
