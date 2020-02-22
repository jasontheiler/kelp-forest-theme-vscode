<template>
  <a :href="href" class="link-button">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.link-button {
  margin: 12px 0 0 8px;
  padding: 0.5em 1em;
  display: inline-block;
  background-color: $background;
  font-size: 0.75em;
  color: $surface;
  text-decoration: none;
}
</style>
