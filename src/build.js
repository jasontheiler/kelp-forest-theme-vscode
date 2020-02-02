const fs = require("fs")
const mustache = require("mustache")

const template = require("./template.json")
const globals = require("./globals.json")

const themeNames = ["kelp-forest", "kelp-forest-italic", "kelp-forest-bold"]

for (let themeName of themeNames) {
  const locals = require(`./${themeName}.json`)

  const theme = mustache.render(JSON.stringify(template), {
    ...globals,
    ...locals,
  })

  fs.writeFileSync(`${__dirname}/../themes/${themeName}.json`, theme)
}
