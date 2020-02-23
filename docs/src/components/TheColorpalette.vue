<template>
  <section class="colorpalette">
    <ColorpaletteGroup
      title="Syntax Colors"
      :colors="$static.allSyntaxColors.edges.map(({ node }) => node)"
    />

    <ColorpaletteGroup
      title="UI Colors"
      :colors="$static.allUiColors.edges.map(({ node }) => node)"
    />

    <ColorpaletteGroup
      title="Normal Terminal Colors"
      :colors="$static.allNormalTerminalColors.edges.map(({ node }) => node)"
    />

    <ColorpaletteGroup
      title="Bright Terminal Colors"
      :colors="$static.allBrightTerminalColors.edges.map(({ node }) => node)"
    />
  </section>
</template>

<static-query>
query {
  allSyntaxColors(order: ASC) {
    edges {
      node {
        name
        value
      }
    }
  }

  allUiColors(order: ASC) {
    edges {
      node {
        name
        value
      }
    }
  }

  allNormalTerminalColors(order: ASC) {
    edges {
      node {
        name
        value
      }
    }
  }

  allBrightTerminalColors(order: ASC) {
    edges {
      node {
        name
        value
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.colorpalette {
  width: 100%;
  height: 100%;
  padding: 64px 7.5%;
  box-sizing: border-box;
  text-align: center;
}
</style>
