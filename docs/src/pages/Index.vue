<template>
  <div>
    <ColorSquare
      v-for="{ node } of $page.allSyntaxColors.edges"
      :key="node.id"
      :color="node.color"
    />

    <ColorSquare
      v-for="{ node } of $page.allUiColors.edges"
      :key="node.id"
      :color="node.color"
    />

    <ColorSquare
      v-for="{ node } of $page.allNormalTerminalColors.edges"
      :key="node.id"
      :color="node.color"
    />

    <ColorSquare
      v-for="{ node } of $page.allBrightTerminalColors.edges"
      :key="node.id"
      :color="node.color"
    />

    <g-image
      v-for="{ node } of $page.allPreviews.edges"
      :key="node.id"
      :src="node.image"
      :alt="node.title"
      class="g-image"
    />
  </div>
</template>

<page-query>
query {
  allSyntaxColors(order: ASC) {
    edges {
      node {
        id
        color
      }
    }
  }

  allUiColors(order: ASC) {
    edges {
      node {
        id
        color
      }
    }
  }

  allNormalTerminalColors(order: ASC) {
    edges {
      node {
        id
        color
      }
    }
  }

  allBrightTerminalColors(order: ASC) {
    edges {
      node {
        id
        color
      }
    }
  }

  allPreviews(sort: {by: "title", order: ASC}) {
    edges {
      node {
        id
        title
        image
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
}
</script>

<style lang="scss" scoped>
.g-image {
  width: 1024px;
}
</style>
