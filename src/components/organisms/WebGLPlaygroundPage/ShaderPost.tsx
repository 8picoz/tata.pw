import { mat4 } from "gl-matrix";
import React, { useEffect, useRef } from "react";

// vertexシェーダ

const vertexSrc = `
uniform mat4 modelviewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec3 normal;
varying vec3 e_normal;
attribute vec4 color;
varying lowp vec4 vColor;
void main() {
  gl_Position = projectionMatrix * modelviewMatrix * vec4(position, 1.0);
  e_normal = vec3(modelviewMatrix * vec4(normal, 0.0));
  vColor = color;
}
`;

// fragmentシェーダ

const fragmentSrc = `
precision mediump float;
varying vec3 e_normal;
varying lowp vec4 vColor;
void main() {
  vec3 n = normalize(e_normal);
  float l = abs(dot(n, normalize(vec3(-1, 1, 1))));
  gl_FragColor = vColor;
}
`;

interface Props {
  postDirPath: string;
  postDirName: string;
}

//const STRING_LIMIT = 200;

const ShaderPost: React.VFC<Props> = (props) => {
  console.log(props);

  //型が良くない
  const canvasRef = useRef({} as HTMLCanvasElement);
  let frame = 0;

  //初期化
  useEffect(() => {
    const ctx = canvasRef.current.getContext("webgl");

    if (!(ctx instanceof WebGLRenderingContext)) {
      throw new Error("Failed to initialize WebGL.");
    }

    //プログラムの作成
    const program = ctx.createProgram();

    if (!(program instanceof WebGLProgram)) {
      throw new Error("Failed to create program(WebGL)");
    }

    //vertexシェーダーをコンパイル
    const vShader = ctx.createShader(ctx.VERTEX_SHADER);

    if (!(vShader instanceof WebGLShader)) {
      throw new Error("Failed to create vertex shader");
    }

    ctx.shaderSource(vShader, vertexSrc);
    ctx.compileShader(vShader);

    //fragmentシェーダーをコンパイル
    const fShader = ctx.createShader(ctx.FRAGMENT_SHADER);

    if (!(fShader instanceof WebGLShader)) {
      throw new Error("Failed to create fragment shader");
    }

    ctx.shaderSource(fShader, fragmentSrc);
    ctx.compileShader(fShader);

    //プログラムとシェーダーを関連付ける
    ctx.attachShader(program, vShader);
    ctx.deleteShader(vShader);

    ctx.attachShader(program, fShader);
    ctx.deleteShader(fShader);

    ctx.linkProgram(program);

    if (ctx.getProgramParameter(program, ctx.LINK_STATUS)) {
      ctx.useProgram(program);
    } else {
      console.log(ctx.getProgramInfoLog(program));
      return;
    }

    //空バッファ作成
    const positionBuffer = ctx.createBuffer();

    if (!(positionBuffer instanceof WebGLBuffer)) {
      throw new Error("Failed to create Buffer");
    }

    // 生成したバッファをバインド
    ctx.bindBuffer(ctx.ARRAY_BUFFER, positionBuffer);
    const position = new Float32Array([
      0,
      0.5,
      0.5,
      -0.5,
      -0.5,
      0.5,
      0.5,
      -0.5,
      0.5,
    ]);

    //バインドされたバッファをセット
    ctx.bufferData(ctx.ARRAY_BUFFER, position, ctx.STATIC_DRAW);

    const verticesColorBuffer = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, verticesColorBuffer);

    if (!(verticesColorBuffer instanceof WebGLBuffer)) {
      throw new Error("Failed to create Buffer");
    }

    const colors = new Float32Array([
      1.0,
      0.0,
      0.0,
      1.0,
      0.0,
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      1.0,
    ]);

    ctx.bufferData(ctx.ARRAY_BUFFER, colors, ctx.STATIC_DRAW);

    //バインド削除
    ctx.bindBuffer(ctx.ARRAY_BUFFER, null);

    render(ctx, program, positionBuffer, verticesColorBuffer);

    //render関数をマウスホバー時に呼ぶことでマウスが乗っているものだけが動くようにする
    function render(
      ctx: WebGLRenderingContext,
      program: WebGLProgram,
      positionBuffer: WebGLBuffer,
      verticesColorBuffer: WebGLBuffer
    ) {
      frame++;

      const proj_mat = mat4.create();
      mat4.frustum(proj_mat, -1, 1, -1, 1, 3, 10);

      const mv_mat = mat4.create();
      mat4.translate(mv_mat, mv_mat, [0, 0, -6]);
      mat4.rotate(mv_mat, mv_mat, frame * 0.01, [0, 1, 0]);

      ctx.uniformMatrix4fv(
        ctx.getUniformLocation(program, "projectionMatrix"),
        false,
        proj_mat
      );
      ctx.uniformMatrix4fv(
        ctx.getUniformLocation(program, "modelviewMatrix"),
        false,
        mv_mat
      );

      ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.clearColor(0.0, 0.0, 0.0, 0.0);
      ctx.clear(ctx.COLOR_BUFFER_BIT);

      //三角ポリゴン頂点バッファをバインド
      ctx.bindBuffer(ctx.ARRAY_BUFFER, positionBuffer);
      //頂点シェーダのアドレスを保持
      const positionAddress = ctx.getAttribLocation(program, "position");

      ctx.enableVertexAttribArray(positionAddress);

      ctx.vertexAttribPointer(positionAddress, 3, ctx.FLOAT, false, 0, 0);

      ctx.bindBuffer(ctx.ARRAY_BUFFER, verticesColorBuffer);

      const verticesColorAddress = ctx.getAttribLocation(program, "color");
      //頂点属性を有効化する
      ctx.enableVertexAttribArray(verticesColorAddress);
      //頂点属性に頂点データを設定する
      ctx.vertexAttribPointer(verticesColorAddress, 4, ctx.FLOAT, false, 0, 0);

      //描画
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 3);

      setTimeout(render, 16);
    }
  }, []);

  /*   const [md, setMdSource] = useRemark();

  useEffect(() => {
    const f = async () => {
      const data = await GetPostMarkdown(
        props.postDirPath + props.postDirName + "/",
        props.postDirName + ".md"
      );

      let mdSource = data.md;

      if (mdSource.length > 200) {
        mdSource = mdSource.substr(0, STRING_LIMIT);
        mdSource += "...";
      }

      setMdSource(mdSource);
    };

    f();
  });

  return <ContentsContainer>{md}</ContentsContainer>; */
  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export { ShaderPost };
