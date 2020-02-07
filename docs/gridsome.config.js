// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: "https://jasontheiler.github.io",
  pathPrefix: "/kelp-forest-theme-vscode",
  siteName: "Kelp Forest Theme",
  titleTemplate: "%s | Kelp Forest Theme",
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
}
