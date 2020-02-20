// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fetch = require("node-fetch")

module.exports = ({ loadSource, createPages }) => {
  loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const { syntax, ui, ansi } = await fetch(
      "https://raw.githubusercontent.com/jasontheiler/kelp-forest-theme-vscode/master/src/globals.json"
    ).then(res => res.json())

    const syntaxColors = addCollection({
      typeName: "syntaxColors",
    })

    for (const [name, value] of Object.entries(syntax)) {
      syntaxColors.addNode({
        name,
        value,
      })
    }

    const uiColors = addCollection({
      typeName: "uiColors",
    })

    for (const [name, value] of Object.entries(ui)) {
      uiColors.addNode({
        name,
        value,
      })
    }

    const normalTerminalColors = addCollection({
      typeName: "normalTerminalColors",
    })

    for (const [name, value] of Object.entries(ansi.normal)) {
      normalTerminalColors.addNode({
        name,
        value,
      })
    }

    const brightTerminalColors = addCollection({
      typeName: "brightTerminalColors",
    })

    for (const [name, value] of Object.entries(ansi.bright)) {
      brightTerminalColors.addNode({
        name,
        value,
      })
    }
  })

  createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
