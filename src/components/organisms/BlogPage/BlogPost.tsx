import React from "react";
import { ContentsContainer } from "../../shared/ContentsContainer";

interface Props {
  title: string;
  mdPost: string;
}

const BlogPost: React.FC<Props> = (props) => {
  return (
    <ContentsContainer>
      <h1>{props.title}</h1>
      <p>{props.mdPost}</p>
    </ContentsContainer>
  );
};

export { BlogPost };
