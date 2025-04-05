const path = require("path");

module.exports = {
  entry: "./src/chatbot.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@animations": path.resolve(__dirname, "@src/animations"),
      "@ui": path.resolve(__dirname, "@src/ui"),
    },
    extensions: [".js", ".json"],
  },
  devServer: {
    contentBase: "./dist"
  }
};
