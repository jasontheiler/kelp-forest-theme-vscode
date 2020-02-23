<template>
  <section class="previews">
    <PreviewsSwiper
      :previews="$static.allPreviews.edges.map(({ node }) => node)"
    />
  </section>
</template>

<static-query>
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
</static-query>

<style lang="scss" scoped>
.previews {
  width: 100%;
  height: 100%;
  padding: 64px 7.5%;
  box-sizing: border-box;
}
</style>
