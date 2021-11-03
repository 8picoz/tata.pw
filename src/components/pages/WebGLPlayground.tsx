import React, { useEffect } from "react";
import { UnderConstruction } from "../organisms/UnderConstruction";

const WebGLPlayground: React.VFC = () => {
  useEffect(() => {
    document.title = "WebGLPlayground";
  }, []);

  return <UnderConstruction />;
};

export { WebGLPlayground };
