import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "react-navi";
import { useRemark } from "react-remark";
import { FrontMatter } from "src/lib/types/markdown";
import styled from "styled-components";
import { GetPostMarkdown } from "../../../lib/api/markdown";
import { BLOG } from "../../../lib/constants/path";
import { ReadMoreButton } from "../../shared/Buttons";
import { ContentsContainer } from "../../shared/ContentsContainer";

interface Props {
  postDirPath: string;
  postFileName: string;
}

const TitleText = styled.h1`
  font-size: 36px;
  cursor: pointer;
`;

const STRING_LIMIT = 200;

const BlogPost: React.VFC<Props> = (props) => {
  const navigation = useNavigation();
  const [md, setMdSource] = useRemark();
  const [matter, setMatter] = useState({} as FrontMatter);
  const handleClickReadMoreButton = useCallback(() => {
    navigation.navigate(BLOG + "/" + props.postFileName);
  }, []);

  useEffect(() => {
    const f = async () => {
      const data = await GetPostMarkdown(
        props.postDirPath,
        props.postFileName + ".md"
      );

      let mdSource = data.md;

      setMatter(data.matter);

      if (mdSource.length > 200) {
        mdSource = mdSource.substr(0, STRING_LIMIT);
        mdSource += "...";
      }

      setMdSource(mdSource);
    };

    f();
  }, []);

  return (
    <ContentsContainer>
      <TitleText onClick={handleClickReadMoreButton}>{matter.title}</TitleText>
      {md}
      <ReadMoreButton text="More" onClick={handleClickReadMoreButton} />
    </ContentsContainer>
  );
};

export { BlogPost };
