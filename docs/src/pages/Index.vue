<template>
  <div>
    <header class="header">
      <h1>KELP FOREST</h1>

      <h2>THEME</h2>

      <p>A cool and cozy dark theme for Visual Studio Code</p>

      <Stats />
    </header>

    <section class="section">
      <Previews />
    </section>

    <section class="section">
      <Colorpalette />
    </section>

    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
}
</script>

<style lang="scss" scoped>
.header,
.section,
.footer {
  padding: 0 7.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
