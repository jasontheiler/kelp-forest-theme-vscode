<template>
  <g-link v-if="to" :to="to" class="link">
    <slot />
  </g-link>

  <a v-else :href="href" class="link">
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
.link {
  border-bottom: 1px solid rgba($surface, $opacity-medium);
  transition: border-bottom 0.125s;
  color: $surface;
  text-decoration: none;
  pointer-events: all;

  &:hover,
  &:focus {
    border-bottom: 1px solid $surface;
  }
}
</style>
