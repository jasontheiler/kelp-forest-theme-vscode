<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://raw.githubusercontent.com/jasontheiler/kelp-forest-theme-vscode/master/images/logo.png" alt="Kelp Forest Theme" height="256px" />
  </a>
</p>

<h1 align="center">Kelp Forest Theme</h1>

<h3 align="center">A cool and cozy dark theme for Visual Studio Code</h3>

<br />

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://img.shields.io/vscode-marketplace/v/jasontheiler.kelp-forest-theme-vscode.svg?style=for-the-badge&logo=visual-studio-code&labelColor=141B19&color=0AE194" alt="version" />
  </a>

  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://img.shields.io/visual-studio-marketplace/i/jasontheiler.kelp-forest-theme-vscode.svg?style=for-the-badge&logo=docusign&logoColor=FFFFFF&labelColor=141B19&color=0AE194" alt="downloads" />
  </a>

  <a href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode">
    <img src="https://img.shields.io/visual-studio-marketplace/r/jasontheiler.kelp-forest-theme-vscode.svg?style=for-the-badge&logo=reverbnation&logoColor=FFFFFF&labelColor=141B19&color=0AE194" alt="rating" />
  </a>
</p>

<img src="https://raw.githubusercontent.com/jasontheiler/kelp-forest-theme-vscode/master/images/preview.png" alt="Kelp Forest Theme preview" />

This theme is based on [Subnautica's](https://unknownworlds.com/subnautica/) kelp forest biome and [Jonathan Olaleye's](https://github.com/jolaleye) [Horizon Theme](https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode). It includes a regular, italic and bold variant of the theme.

## Installation

1. Open the **Extensions** tab in the VS Code sidebar.
2. Search for `Kelp Forest Theme` and locate the extension.
3. Hit **Install**.
4. Open the **Command Palette** with `Ctrl+Shift+P` or `⇧⌘P`.
5. Select **Preferences: Color Theme** and choose a Kelp Forest variant.
6. Enjoy! 🌊 Also, check out the personalization options and the recommended fonts and extensions below...

## Personalization

VS Code makes it easy to customize just about every element of it. If you would like to personalize the look of something, open the **Command Palette** with `Ctrl+Shift+P` or `⇧⌘P` and select **Preferences: Open Settings (JSON)**. In this file, you can override the settings and colors of VS Code and any color theme. Below are some common customizations to the Kelp Forest Theme, that you can copy and paste into your `settings.json`.

_For more information on theming, visit the official [Theming Guide](https://code.visualstudio.com/api/extension-capabilities/theming) and [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)._

### Contrast

To add a border between the different sections of your VS Code, add the following to your `settings.json`:

```json
"workbench.colorCustomizations": {
  "contrastBorder": "#2F4846"
}
```

### Italics

The normal and bold variants only use italics in a few places. If you would like to remove italics completely, add the following to your `settings.json`:

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

I prefer using fonts that support ligatures, which is why I recommend the following fonts:

- [Victor Mono](https://rubjo.github.io/victor-mono) (Free)
- [Dank Mono](https://dank.sh) (£40)
- [Fira Code](https://github.com/tonsky/FiraCode) (Free)
- [Cascadia Code](https://github.com/microsoft/cascadia-code) (Free)

> Note: Ensure you enable font ligatures by adding `"editor.fontLigatures": true` to your `settings.json`.

## Recommended Extensions & Settings

I highly recommend two extensions in particular, which both integrate nicely into any color theme:

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

Once you have installed either of these extensions, add the appropriate settings to your `settings.json`, so their colors match the Kelp Forest Theme.

### Better Comments

<img src="https://raw.githubusercontent.com/jasontheiler/kelp-forest-theme-vscode/master/images/preview-better-comments.png" alt="Better Comments preview" />

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
    "color": "#FF901880",
    "backgroundColor": "#FF90181A"
  }
]
```

### Bracket Pair Colorizer 2

<img src="https://raw.githubusercontent.com/jasontheiler/kelp-forest-theme-vscode/master/images/preview-bracket-pair-colorizer-2.png" alt="Bracket Pair Colorizer 2 preview" />

```json
"bracket-pair-colorizer-2.colors": ["#15C3AC", "#FFE030", "#FF9018"],
"bracket-pair-colorizer-2.highlightActiveScope": true
```

## License

[MIT](https://github.com/jasontheiler/kelp-forest-theme-vscode/blob/master/LICENSE) © [Jason Theiler](https://github.com/JasonTheiler)
