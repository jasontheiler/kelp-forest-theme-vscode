<template>
  <div :style="{ backgroundColor: color }" class="colorpalette-group-item">
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

      const brightness = 0.299 * r + 0.587 * g + 0.114 * b

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
  transition: scale 0.125s;

  &:hover {
    scale: 1.25;
  }
}

.bright {
  color: $bright;
}

.dark {
  color: $dark;
}
</style>
