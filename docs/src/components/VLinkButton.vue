<template>
  <g-link v-if="to" :to="to" class="link-button">
    <slot />
  </g-link>

  <a v-else :href="href" class="link-button">
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
    to: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.link-button {
  margin: 0.375em;
  padding: 0.5em 1em;
  display: inline-block;
  background-color: rgba($background, $opacity-medium);
  font-size: 0.75em;
  color: $surface;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: rgba($background, $opacity-high);
  }
}
</style>
