import React from "react";
import styled from "styled-components";
import {
  BLOG,
  LINK,
  ROOT,
  WEBGL_PLAYGROUND,
} from "../../../lib/constants/path";
import { VerticalBarItem } from "./VerticalBarItem";

interface BarItemProps {
  link: string;
  description: string;
}

const Container = styled.ul`
  width: 100px;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-around;
  -ms-justify-content: space-around;
  justify-content: space-around;
`;

const NaviBar: React.FC = React.memo(() => {
  return (
    <Container>
      <VerticalBarItem link={ROOT} description={"Top"} />
      <VerticalBarItem
        link={WEBGL_PLAYGROUND}
        description={"WebGL Playground"}
      />
      <VerticalBarItem link={BLOG} description={"blog"} />
      <VerticalBarItem link={LINK} description={"link"} />
    </Container>
  );
});

export { NaviBar, BarItemProps };
