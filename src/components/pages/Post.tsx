import React, { useCallback, useEffect } from "react";
import { useNavigation } from "react-navi";
import { useRemark } from "react-remark";
import { GetPostMarkdown } from "../../lib/api/markdown";
import { BLOG } from "../../lib/constants/path";
import { BackButton } from "../shared/Buttons";
import { ContentsContainer } from "../shared/ContentsContainer";

interface Props {
  postDirPath: string;
  postFileName: string;
}

const Post: React.VFC<Props> = (props) => {
  const navigation = useNavigation();
  const [md, setMdSource] = useRemark();
  const handleClickBackButton = useCallback(() => {
    navigation.navigate(BLOG);
  }, []);

  useEffect(() => {
    const f = async () => {
      const data = await GetPostMarkdown(
        props.postDirPath,
        props.postFileName + ".md"
      );

      setMdSource(data.md);
    };

    f();
  }, []);

  return (
    <ContentsContainer>
      <BackButton text="back" onClick={handleClickBackButton} />
      {md}
    </ContentsContainer>
  );
};

export { Post };
