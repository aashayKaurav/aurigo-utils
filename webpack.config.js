const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.ts",
    stringUtils: "./src/stringUtils.ts",
    mathUtils: "./src/mathUtils.ts",
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "aurigo",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
  },
  plugins: [
    new CleanWebpackPlugin(), // To clean the build directory
    new BundleAnalyzerPlugin(), // Add Webpack Bundle Analyzer
  ],
};
