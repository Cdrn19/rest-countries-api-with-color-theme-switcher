const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@context": path.resolve(__dirname, "src/context"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
