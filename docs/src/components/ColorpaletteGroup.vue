<template>
  <div class="colorpalette-group">
    <h2>{{ title }}</h2>

    <div class="colors">
      <ColorpaletteItem
        v-for="{ name, value } of colors"
        :key="name"
        :color="value"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    colors: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.colorpalette-group {
  text-align: center;
}

.colors {
  max-width: 768px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
