import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "react-navi";
import { useRemark } from "react-remark";
import { FrontMatter } from "src/lib/types/markdown";
import styled from "styled-components";
import { GetPostMarkdown } from "../../lib/api/markdown";
import { BLOG } from "../../lib/constants/path";
import { BackButton } from "../shared/Buttons";
import { ContentsContainer } from "../shared/ContentsContainer";

interface Props {
  postDirPath: string;
  postFileName: string;
}

const TitleText = styled.h1`
  font-size: 36px;
`;

const Post: React.VFC<Props> = (props) => {
  const navigation = useNavigation();
  const [md, setMdSource] = useRemark();
  const [matter, setMatter] = useState({} as FrontMatter);
  const handleClickBackButton = useCallback(() => {
    navigation.navigate(BLOG);
  }, []);

  useEffect(() => {
    const f = async () => {
      const data = await GetPostMarkdown(
        props.postDirPath,
        props.postFileName + ".md"
      );

      setMatter(data.matter);
      setMdSource(data.md);

      document.title = data.matter.title;
    };

    f();
  }, []);

  return (
    <ContentsContainer>
      <BackButton text="back" onClick={handleClickBackButton} />
      <TitleText>{matter.title}</TitleText>
      {md}
    </ContentsContainer>
  );
};

export { Post };
