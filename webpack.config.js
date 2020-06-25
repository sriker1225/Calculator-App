const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: "babel-loader"
            },
            {
                test: /.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};
