import React from "react";
import styled from "styled-components";

const PageNaviBarContainer = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const InnerContent = styled.div`
  font-size: 18px;
  display: inline-block;
  margin: 0 10px;
`;

interface Props {
  length: number;
  notPosition: number;
}

const PageNaviBar: React.VFC<Props> = (props) => {
  if (props.length <= 4) {
    return <div></div>;
  }

  return (
    <PageNaviBarContainer>
      <Inner>
        <InnerContent>&lt;</InnerContent>
        <InnerContent>1</InnerContent>
        <InnerContent>...</InnerContent>
        <InnerContent>2</InnerContent>
        <InnerContent>...</InnerContent>
        <InnerContent>3</InnerContent>
        <InnerContent>&gt;</InnerContent>
      </Inner>
    </PageNaviBarContainer>
  );
};

export { PageNaviBar };
