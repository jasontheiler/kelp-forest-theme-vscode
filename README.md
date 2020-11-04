<div align="center">

<a href="https://jasontheiler.github.io/kelp-forest-theme-vscode">
  <img src="/images/logo.png" alt="Kelp Forest Theme" height="128px" />
</a>

# Kelp Forest Theme

**A cool and cozy dark theme for Visual Studio Code.**

[![version](https://img.shields.io/vscode-marketplace/v/jasontheiler.kelp-forest-theme-vscode.svg?style=flat-square&logo=visual-studio-code&labelColor=141B19&color=0AE194)](https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode)
[![downloads](https://img.shields.io/visual-studio-marketplace/i/jasontheiler.kelp-forest-theme-vscode.svg?style=flat-square&logo=docusign&logoColor=FFFFFF&labelColor=141B19&color=0AE194)](https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode)
[![rating](https://img.shields.io/visual-studio-marketplace/r/jasontheiler.kelp-forest-theme-vscode.svg?style=flat-square&logo=reverbnation&logoColor=FFFFFF&labelColor=141B19&color=0AE194)](https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode&ssr=false#review-details)

![Kelp Forest Theme preview](/images/preview.png)

</div>

This theme is based on [Subnautica's](https://unknownworlds.com/subnautica/) kelp forest biome and [Jonathan Olaleye's](https://github.com/jolaleye) [Horizon Theme](https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode). It includes a regular, italic and bold variant of the theme.

### _More previews and the complete colorpalette can be found [here](https://jasontheiler.github.io/kelp-forest-theme-vscode)._

## Installation

**Visit** the [homepage](https://jasontheiler.github.io/kelp-forest-theme-vscode) or the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode) and **install** it from there.

&nbsp;&nbsp;&nbsp;&nbsp;**OR**

**Search** for `Kelp Forest Theme` in the Visual Studio Code **Extensions** tab (`Ctrl+Shift+X` or `⌘+Shift+X`).

&nbsp;&nbsp;&nbsp;&nbsp;**OR**

**Access** the **Quick Open** menu in Visual Studio Code (`Ctrl+P` or `⌘+P`) and **execute** the following command: `ext install jasontheiler.kelp-forest-theme-vscode`.

## Personalization

Visual Studio Code makes it easy to customize just about every element of it. If you would like to personalize the look of something, access the **Command Palette** menu in Visual Studio Code (`Ctrl+Shift+P` or `⌘+Shift+P`) and select **Preferences: Open Settings (JSON)**. In this file, you can override the settings and colors of Visual Studio Code and any installed color theme. Below are some common customizations to the Kelp Forest Theme, that you can paste into your `settings.json`.

> For more information on theming, visit the official [Theming Guide](https://code.visualstudio.com/api/extension-capabilities/theming) and [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color).

### Contrast

To add a border between the different sections of your Visual Studio Code, add the following to your `settings.json`:

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

- [Victor Mono](https://rubjo.github.io/victor-mono)
- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Fira Code](https://github.com/tonsky/FiraCode)

> Ensure you enable font ligatures by adding `"editor.fontLigatures": true` to your `settings.json`.

## Recommended Extensions & Settings

I highly recommend two extensions in particular, which both integrate nicely into any color theme:

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

Once you have installed either of these extensions, add the appropriate settings to your `settings.json`, so their colors match the Kelp Forest Theme.

### Better Comments

![Better Comments preview](/images/preview-better-comments.png)

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

![Bracket Pair Colorizer 2 preview](/images/preview-bracket-pair-colorizer-2.png)

```json
"bracket-pair-colorizer-2.colors": ["#15C3AC", "#FFE030", "#FF9018"],
"bracket-pair-colorizer-2.highlightActiveScope": true
```

## License

[MIT License](/LICENSE)

Copyright © 2020 [Jason Theiler](https://github.com/JasonTheiler)
