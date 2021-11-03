import React, { useEffect } from "react";
import styled from "styled-components";
import { NameCard } from "../organisms/TopPage/NameCard";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Top: React.VFC = () => {
  useEffect(() => {
    document.title = "tata.pw";
  }, []);

  return (
    <Container>
      <NameCard id="8picoz" HN="tata" />
    </Container>
  );
};

export { Top };
