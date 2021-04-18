import React, { useCallback, useEffect } from "react";
import { useNavigation } from "react-navi";
import { useRemark } from "react-remark";
import { GetPostMarkdown } from "../../../lib/api/markdown";
import { BLOG } from "../../../lib/constants/path";
import { Button } from "../../shared/Button";
import { ContentsContainer } from "../../shared/ContentsContainer";

interface Props {
  postDirPath: string;
  postFileName: string;
}

const STRING_LIMIT = 200;

const BlogPost: React.VFC<Props> = (props) => {
  const navigation = useNavigation();
  const [md, setMdSource] = useRemark();
  const handleClickReadMoreButton = useCallback(() => {
    navigation.navigate(BLOG + "/" + props.postFileName);
  }, []);

  useEffect(() => {
    const f = async () => {
      const data = await GetPostMarkdown(props.postDirPath, props.postFileName);

      let mdSource = data.md;

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
      {md}
      <Button text="More" onClick={handleClickReadMoreButton} />
    </ContentsContainer>
  );
};

export { BlogPost };
