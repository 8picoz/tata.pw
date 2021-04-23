import React from "react";

interface Props {
  postDirPath: string;
  postDirName: string;
}

const ShaderPost: React.VFC<Props> = (props) => {
  return (
    <div>
      <p>{props.postDirName}</p>
      <p>{props.postDirPath}</p>
    </div>
  );
};

export { ShaderPost };
