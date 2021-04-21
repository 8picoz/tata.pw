import React from "react";
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
  return (
    <Container>
      <NameCard name="Yuya Ohta" HN="tata" />
    </Container>
  );
};

export { Top };
