const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//source-map
//html plugin
//babel loader
//css loader
//dev server
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "bundled"),
    },
    mode: "production", //production
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
    devServer: {
        client: {
            overlay: {
                warnings: false,
            },
        },
        compress: true,
        port: 9000,
    },
};
