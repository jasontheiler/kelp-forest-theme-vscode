<template>
  <div class="colorpalette-group">
    <h2>{{ title }}</h2>

    <div class="colors">
      <ColorpaletteItem
        v-for="color of colors"
        :key="color.name"
        :color="color.value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorpaletteGroup",
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.colors {
  max-width: 768px;
  display: flex;
  flex-wrap: wrap;
}
</style>
