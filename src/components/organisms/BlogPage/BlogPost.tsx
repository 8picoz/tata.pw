import React, { useCallback, useEffect } from "react";
import { useNavigation } from "react-navi";
import { useRemark } from "react-remark";
import { GetPostMarkdown } from "../../../lib/api/markdown";
import { ContentsContainer } from "../../shared/ContentsContainer";
import { ReadMoreButton } from "../../shared/ReadMoreButton";

interface Props {
  postDirPath: string;
  postFileName: string;
}

const STRING_LIMIT = 200;

const BlogPost: React.VFC<Props> = (props) => {
  const navigation = useNavigation();
  const [md, setMdSource] = useRemark();
  const handleClickReadMoreButton = useCallback(() => {
    navigation.navigate("/blog/" + props.postFileName);
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
      <p>{md}</p>
      <ReadMoreButton text="More" onClick={handleClickReadMoreButton} />
    </ContentsContainer>
  );
};

export { BlogPost };
