<template>
  <svg :viewBox="`0 0 ${viewBoxWidth} 16`" class="animated-title">
    <title>{{ text }}</title>

    <text
      v-for="(className, idx) of titleElements"
      :key="idx"
      :class="className"
      x="50%"
      y="90%"
      text-anchor="middle"
      ref="title"
    >
      <tspan
        v-for="(letter, jdx) of text"
        :key="jdx"
        :style="{
          animationDelay: calcDelay(text.length, idx, jdx),
        }"
        class="letter"
      >
        {{ letter === " " ? "&nbsp;" : letter }}
      </tspan>
    </text>
  </svg>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      viewBoxWidth: 125,
    }
  },

  computed: {
    titleElements() {
      return ["title-background", "title-foreground"]
    },
  },

  mounted() {
    const minWidth = 125
    const titleWidth = this.$refs.title[0].getBBox().width

    this.viewBoxWidth =
      (titleWidth <= minWidth ? minWidth : titleWidth) * 1.0125
  },

  methods: {
    calcDelay(length, idx, jdx) {
      return `${-((length - jdx) / length) * 1.5 + 0.5 * idx - 0.5}s`
    },
  },
}
</script>

<style lang="scss" scoped>
.animated-title {
  max-height: 384px;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
}

.title-background,
.title-foreground {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 0.03125em;
  stroke-dasharray: 100%;
  stroke-dashoffset: 0%;
  letter-spacing: -0.1em;
}

.title-background {
  stroke: rgba($background, $opacity-low);
}

.title-foreground {
  stroke: $surface;
}

.letter {
  animation: stroke-fade-in 8s -2s;
}

@keyframes stroke-fade-in {
  0% {
    stroke-dashoffset: 100%;
  }
  25% {
    stroke-dashoffset: 100%;
  }
  100% {
    stroke-dashoffset: 0%;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  73% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
