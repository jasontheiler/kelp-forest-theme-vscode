<template>
  <Layout>
    <main class="_404">
      <div class="text">
        <h1>Page not found</h1>

        <p>It appears this page doesn't exist...</p>

        <p>
          <VLink to="/">Go back </VLink>
        </p>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Page not found",
  },
}
</script>

<style lang="scss" scoped>
._404 {
  width: 100vw;
  height: 100vh;
  padding: 64px 7.5%;
  box-sizing: border-box;
  background-color: #00000040;
  text-align: center;
}

.text {
  display: inline-block;
  text-align: start;
}
</style>
