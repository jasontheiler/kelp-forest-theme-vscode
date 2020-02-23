<template>
  <div class="colorpalette-group-item" :style="{ backgroundColor: color }">
    <span :class="valueClass">{{ color }}</span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },

  computed: {
    valueClass() {
      const [r, g, b] = this.color
        .replace("#", "")
        .match(/.{1,2}/g)
        .map(value => this.parseHexValue(value))

      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b

      return {
        bright: brightness < 0.5,
        dark: brightness >= 0.5,
      }
    },
  },

  methods: {
    parseHexValue(value) {
      const parsedValue = parseInt(value, 16)

      if (isNaN(parsedValue)) return -1
      else return parsedValue / 255
    },
  },
}
</script>

<style lang="scss" scoped>
.colorpalette-group-item {
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.bright {
  color: $bright;
}

.dark {
  color: $dark;
}
</style>
