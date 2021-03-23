import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    mode: "production",
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
    }
};

export default config;