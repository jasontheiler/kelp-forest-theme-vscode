<template>
  <div class="previews-swiper">
    <div
      v-swiper:swiperMain="swiperOptionsMain"
      ref="swiperMain"
      class="swiper-main"
    >
      <div class="swiper-wrapper">
        <div
          v-for="{ id, title, image } of previews"
          :key="id"
          class="swiper-slide"
        >
          <div class="swiper-zoom-container">
            <g-image :src="image" :alt="title" immediate="true" />
          </div>
        </div>
      </div>

      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>

      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </div>

    <div
      v-swiper:swiperThumbs="swiperOptionsThumbs"
      ref="swiperThumbs"
      class="swiper-thumbs"
    >
      <div class="swiper-wrapper">
        <div
          v-for="{ id, title, image } of previews"
          :key="id"
          class="swiper-slide"
        >
          <g-image :src="image" :alt="title" immediate="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css"

export default {
  directives: !process.browser
    ? {}
    : {
        swiper: require("vue-awesome-swiper").directive,
      },

  props: {
    previews: {
      type: Array,
      required: true,
    },
  },

  computed: {
    swiperOptionsShared() {
      return {
        loop: true,
        loopedSlides: this.previews.length,
      }
    },

    swiperOptionsMain() {
      return {
        ...this.swiperOptionsShared,
        grabCursor: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        autoplay: {
          delay: 5000,
        },
        zoom: true,
      }
    },

    swiperOptionsThumbs() {
      return {
        ...this.swiperOptionsShared,
        slidesPerView: 5,
        centeredSlides: true,
        allowTouchMove: false,
        slideToClickedSlide: true,
      }
    },
  },

  mounted() {
    const swiperMain = this.$refs.swiperMain.swiper
    const swiperThumbs = this.$refs.swiperThumbs.swiper

    swiperMain.controller.control = swiperThumbs
    swiperThumbs.controller.control = swiperMain
  },
}
</script>

<style lang="scss">
.swiper-thumbs {
  .swiper-slide {
    opacity: 0.75;
    cursor: pointer;
  }

  .swiper-slide-active {
    opacity: 1;
    cursor: unset;
  }
}

.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
</style>

<style lang="scss" scoped>
.g-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
