import React, { useEffect, useReducer } from "react";
import { GetAllShaderPostDirName } from "../../lib/api/markdown";
import { SHADER_POST_DIR_URL } from "../../lib/constants/path";
import { ShaderPost } from "../organisms/WebGLPlaygroundPage/ShaderPost";

interface store {
  shader: string[];
}

interface actionType {
  type: "update";
  payload: {
    shader: string[];
  };
}

const initialState: store = {
  shader: {} as string[],
};

const reducer: React.Reducer<store, actionType> = (state, action) => {
  switch (action.type) {
    case "update":
      return { shader: action.payload.shader };
    default:
      return state;
  }
};

const WebGLPlayground: React.VFC = () => {
  const [dirNames, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const f = async () => {
      const data = await GetAllShaderPostDirName();

      dispatch({
        type: "update",
        payload: {
          shader: data.shader,
        },
      });
    };

    f();
  }, []);

  return (
    <div>
      {dirNames.shader.length !== undefined &&
        dirNames.shader.map((data, i) => {
          return (
            <ShaderPost
              key={i}
              postDirName={SHADER_POST_DIR_URL}
              postDirPath={data}
            />
          );
        })}
    </div>
  );
};

export { WebGLPlayground };
