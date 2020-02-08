<template>
  <div>
    <g-image
      v-for="{ node } of $page.allPreviews.edges"
      :key="node.id"
      :src="node.image"
      :alt="node.title"
      class="g-image"
    />

    <Colorpalette />
  </div>
</template>

<page-query>
query {
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
