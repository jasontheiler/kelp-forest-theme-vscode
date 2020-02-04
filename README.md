<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://github.com/jasontheiler/kelp-forest-theme-vscode/raw/master/images/logo.png" alt="Kelp Forest Theme" height="256px" />
  </a>
</p>

<h1 align="center">Kelp Forest Theme</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://img.shields.io/vscode-marketplace/v/jasontheiler.kelp-forest-theme-vscode.svg?style=for-the-badge&labelColor=14191B&color=0AE194" alt="version" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://img.shields.io/visual-studio-marketplace/d/jasontheiler.kelp-forest-theme-vscode.svg?style=for-the-badge&labelColor=14191B&color=0AE194" alt="downloads" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://img.shields.io/visual-studio-marketplace/stars/jasontheiler.kelp-forest-theme-vscode.svg?style=for-the-badge&labelColor=14191B&color=0AE194" alt="rating" />
  </a>
</p>

<img src="https://github.com/jasontheiler/kelp-forest-theme-vscode/raw/master/images/preview-main.png" alt="Kelp Forest Theme preview" />

This theme is based on [Subnautica's](https://unknownworlds.com/subnautica/) Kelp Forest Biome and [Jonathan Olaleye's](https://github.com/jolaleye) [Horizon Theme](https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode). It includes a default, italic and bold version of the theme.

## Installation

1. Open the **Extensions** tab in the VS Code sidebar.
2. Search for `Kelp Forest Theme`.
3. Click **Install**.
4. Open the **Command Palette** with `Ctrl+Shift+P` or `⇧⌘P`.
5. Select **Preferences: Color Theme** and choose a Kelp Forest variant.
6. Enjoy! 🌊 Also, check out the personalization options and the recommended fonts and extensions below...

## Personalization

VS Code makes it easy to customize just about every element of it. If you would like to personalize the look of something, open the **Command Palette** with `Ctrl+Shift+P` or `⇧⌘P` and select **Preferences: Open Settings (JSON)**. Here, you can override VS Code's defaults or Kelp Forest's colors. Below here are some common customizations that you can just copy and paste into your `settings.json`.

_For more information on theming, visit the official [Theming Guide](https://code.visualstudio.com/api/extension-capabilities/theming) and [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)._

### Contrast

To add a border between the different sections of VS Code, add the following to your `settings.json`:

```json
"workbench.colorCustomizations": {
  "contrastBorder": "#2F4648"
}
```

### Italics

The normal and bold themes only use italics in a few places. If you would like to remove italics completely, add the following to your `settings.json`:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "No italics",
      "scope": ["comment", "markup.quote", "variable.language", "variable.parameter"],
      "settings": {
        "fontStyle": ""
      }
    }
  ]
}
```

### Tag Brackets `<>`

For gray rather than green brackets around HTML and JSX tags, add the following to your `settings.json`:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "Tag brackets",
      "scope": ["punctuation.definition.tag"],
      "settings": {
        "foreground": "#BBBBBB"
      }
    }
  ]
}
```

## Recommended Fonts

I prefer using fonts that support ligatures, which is why I highly recommend the following fonts:

- <a href="https://github.com/rubjo/victor-mono">Victor Mono (Free)</a>
- <a href="https://github.com/tonsky/FiraCode">Fira Code (Free)</a>

> Note: Ensure you enable font ligatures by adding `"editor.fontLigatures": true` to your `settings.json`.

## Recommended Extensions & Settings

I highly recommend two extensions in particular, which both integrate nicely into Kelp Forest:

- <a href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments">Better Comments</a>
- <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2">Bracket Pair Colorizer 2</a>

Once you have installed either of these extensions, add the appropriate settings to your `settings.json`, so their colors match Kelp Forest's colors.

### Better Comments

<img src="https://github.com/jasontheiler/kelp-forest-theme-vscode/raw/master/images/preview-better-comments.png" alt="Better Comments preview" />

```json
"better-comments.tags": [
  {
    "tag": "//",
    "color": "#BBBBBB4D",
    "strikethrough": true,
  },
  {
    "tag": "*",
    "color": "#C8E8DD80",
    "backgroundColor": "#C8E8DD1A"
  },
  {
    "tag": "!",
    "color": "#E0093C80",
    "backgroundColor": "#E0093C1A"
  },
  {
    "tag": "?",
    "color": "#15C3AC80",
    "backgroundColor": "#15C3AC1A"
  },
  {
    "tag": "todo",
    "color": "#E69C1880",
    "backgroundColor": "#E69C181A"
  }
]
```

### Bracket Pair Colorizer 2

<img src="https://github.com/jasontheiler/kelp-forest-theme-vscode/raw/master/images/preview-bracket-pair-colorizer-2.png" alt="Bracket Pair Colorizer 2 preview" />

```json
"bracket-pair-colorizer-2.colors": ["#15C3AC", "#E8E818", "#E69C18"],
"bracket-pair-colorizer-2.highlightActiveScope": true
```

## License

[MIT](https://github.com/jasontheiler/kelp-forest-theme-vscode/blob/master/LICENSE) © [Jason Theiler](https://github.com/JasonTheiler)
