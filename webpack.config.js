const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const MODE = process.env.NODE_ENV || "development";
const PROD = MODE === "production";
const DEV = MODE === "development";

const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html",
  },
  {
    from: __dirname + "/src/assets",
    to: __dirname + "/dist",
  },
  {
    from: __dirname + "/resource",
    to: __dirname + "/dist/resource"
  },
  {
    from: __dirname + "/favicon",
    to: __dirname + "/dist"
  },
];

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  context: __dirname + "/src",
  entry: "./index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
        ],
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      },
      {
        test: /\.(svg|png|jpg|asc)$/,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new CopyPlugin({ patterns: copyRules }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  
};
