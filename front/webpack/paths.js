const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "build"),
  entryPath: path.resolve(__dirname, "../", "src/index.jsx"),
  templatePath: path.resolve(__dirname, "../", "src/template.html"),

  fontsFolder: "fonts",
  cssFolder: "css",
  jsFolder: "js",

  store: path.resolve(__dirname, "./src/store"),
  atoms: path.resolve(__dirname, "./src/components/atoms"),
  molecules: path.resolve(__dirname, "./src/components/molecules"),
  organimes: path.resolve(__dirname, "./src/components/organimes"),
  actions: path.resolve(__dirname, "./src/store/actions"),
  utils: path.resolve(__dirname, "./src/utils/")
};
