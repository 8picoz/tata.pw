import React, { useEffect, useState } from "react";
import { useRemark } from "react-remark";
import { FrontMatter } from "src/lib/types/markdown";
import { GetPostMarkdown } from "../../../lib/api/markdown";
import { ContentsContainer } from "../../shared/ContentsContainer";

interface Props {
  postPath: string;
}

//blogに内包されたコンポーネント
//TODO: もっと良い名前をつける
const BlogPost: React.FC<Props> = (props) => {
  const [matter, setMatter] = useState({} as FrontMatter);
  const [md, setMdSource] = useRemark();

  useEffect(() => {
    const f = async () => {
      const data = await GetPostMarkdown(props.postPath);
      console.log(data);
      setMdSource(data.md);
      setMatter(data.matter);
    };
    f();
  }, []);

  return (
    <ContentsContainer>
      <h1>{matter.title}</h1>
      <p>{md}</p>
    </ContentsContainer>
  );
};

export { BlogPost };
