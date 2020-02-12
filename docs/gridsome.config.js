// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path")

module.exports = {
  siteUrl: "https://jasontheiler.github.io",
  pathPrefix: "/kelp-forest-theme-vscode",
  siteName: "Kelp Forest Theme",
  titleTemplate: "%s | Kelp Forest Theme",
  siteDescription: "A cool and cozy dark theme for Visual Studio Code",
  icon: "./src/icons/logo.svg",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/images/preview-*.json",
        typeName: "Previews",
      },
    },
  ],
  chainWebpack(config) {
    const preprocessor = "scss"
    const types = ["vue-modules", "vue", "normal-modules", "normal"]

    for (const type of types) {
      config.module
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
