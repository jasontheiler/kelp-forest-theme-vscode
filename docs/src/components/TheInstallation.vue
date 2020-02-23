<template>
  <section class="installation">
    <h1>Installation</h1>

    <div class="text">
      <p>
        <strong>Scroll</strong> up and <strong>click</strong> the install button
        or <strong>visit</strong> the Visual Studio Code Marketplace and
        <strong>install</strong>
        it from there.
      </p>

      <p>
        <strong>&nbsp;&nbsp;&nbsp;&nbsp;OR</strong>
      </p>

      <p>
        <strong>Search</strong> for
        <VCode>{{ $static.metadata.siteName }}</VCode> in the Visual Studio Code
        <strong>Extensions</strong> tab.
      </p>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.installation {
  width: 100%;
  height: 100%;
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
