<template>
  <code class="code">
    <slot />
  </code>
</template>

<style lang="scss" scoped>
.code {
  padding: 0.2em 0.4em;
  background-color: rgba($surface, $opacity-lowest);
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 0.85em;
}
</style>
