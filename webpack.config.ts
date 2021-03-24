import path from "path";
import { Configuration } from "webpack";
import CopyPlugin = require("copy-webpack-plugin");

const config: Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    context: path.join(__dirname, "src"),
    entry: "./index.tsx",
    output: {
        path: path.join(__dirname, "dist/assets/"),
        filename: "bundle.js",
        publicPath: "/assets",
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.json",
                    }
                }],
            },
        ],
    },
    
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true,
        port: 8080,
    },
};

export default config;