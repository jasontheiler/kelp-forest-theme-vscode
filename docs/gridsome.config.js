// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path")

module.exports = {
  siteName: "Kelp Forest Theme",
  siteDescription: "A cool and cozy dark theme for Visual Studio Code",
  siteUrl: "https://jasontheiler.github.io",
  pathPrefix: "/kelp-forest-theme-vscode",
  titleTemplate: "%s | Kelp Forest Theme",
  icon: "./src/icons/logo.svg",
  metadata: {
    author: "Jason Theiler",
    publisher: "jasontheiler",
    extensionId: "jasontheiler.kelp-forest-theme-vscode",
    repositoryPath: "jasontheiler/kelp-forest-theme-vscode",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/images/preview-*.json",
        typeName: "Previews",
      },
    },
  ],
  chainWebpack({ module }) {
    const preprocessor = "scss"
    const types = ["vue-modules", "vue", "normal-modules", "normal"]

    for (type of types) {
      module
        .rule(preprocessor)
        .oneOf(type)
        .use("style-resource")
        .loader("style-resources-loader")
        .options({
          patterns: [
            path.resolve(__dirname, `./src/styles/_*.${preprocessor}`),
          ],
        })
    }
  },
}
