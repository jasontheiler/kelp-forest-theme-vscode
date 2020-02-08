<template>
  <div class="colorpalette">
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
  </div>
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

<script>
export default {
  name: "Colorpalette",
}
</script>

<style lang="scss" scoped>
.colorpalette {
}
</style>
