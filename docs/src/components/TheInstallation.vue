<template>
  <section class="installation">
    <h1>Installation</h1>

    <div class="text">
      <p>
        <strong>Scroll</strong> up and <strong>click</strong> the install button
        or <strong>visit</strong> the
        <VLink
          :href="
            `https://marketplace.visualstudio.com/items?itemName=${$static.metadata.extensionId}`
          "
          >Visual Studio Code Marketplace</VLink
        >
        and
        <strong>install</strong>
        it from there.
      </p>

      <p>
        <strong>&nbsp;&nbsp;&nbsp;&nbsp;OR</strong>
      </p>

      <p>
        <strong>Search</strong> for
        <VCode>{{ $static.metadata.siteName }}</VCode> in the Visual Studio Code
        <strong>Extensions</strong> tab (<VCode>Ctrl+Shift+X</VCode> or
        <VCode>⌘+Shift+X</VCode>).
      </p>

      <p>
        <strong>&nbsp;&nbsp;&nbsp;&nbsp;OR</strong>
      </p>

      <p>
        <strong>Access</strong> the <strong>Quick Open</strong> menu in Visual
        Studio Code (<VCode>Ctrl+P</VCode> or <VCode>⌘+P</VCode>) and
        <strong>execute</strong>
        the following command:
        <VCode>ext install {{ $static.metadata.extensionId }}</VCode
        >.
      </p>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
    extensionId
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
