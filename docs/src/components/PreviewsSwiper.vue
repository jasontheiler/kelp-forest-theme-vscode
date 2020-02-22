<template>
  <div class="previews-swiper">
    <ClientOnly>
      <swiper :options="swiperOptionsMain" ref="swiperMain" class="swiper-main">
        <swiper-slide v-for="{ id, title, image } of previews" :key="id">
          <g-image :src="image" :alt="title" :immediate="true" />
        </swiper-slide>

        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>

        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
      </swiper>

      <swiper
        :options="swiperOptionsThumbs"
        ref="swiperThumbs"
        class="swiper-thumbs"
      >
        <swiper-slide
          v-for="{ id, title, image } of previews"
          :key="id"
          class="swiper-slide"
        >
          <g-image
            :src="image"
            :alt="title"
            :immediate="true"
            class="g-image"
          />
        </swiper-slide>
      </swiper>
    </ClientOnly>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css"

export default {
  props: {
    previews: {
      type: Array,
      required: true,
    },
  },

  components: {
    swiper: () =>
      import("vue-awesome-swiper")
        .then(({ swiper }) => swiper)
        .catch(),

    swiperSlide: () =>
      import("vue-awesome-swiper")
        .then(({ swiperSlide }) => swiperSlide)
        .catch(),
  },

  computed: {
    swiperOptionsShared() {
      return {
        grabCursor: true,
        loop: true,
        loopedSlides: this.previews.length,
      }
    },

    swiperOptionsMain() {
      return {
        ...this.swiperOptionsShared,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        autoplay: {
          delay: 5000,
        },
      }
    },

    swiperOptionsThumbs() {
      return {
        ...this.swiperOptionsShared,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      }
    },
  },

  updated() {
    if (this.$refs.swiperMain && this.$refs.swiperThumbs) {
      const swiperMain = this.$refs.swiperMain.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper

      swiperMain.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperMain
    }
  },
}
</script>

<style lang="scss">
.swiper-thumbs {
  .swiper-slide {
    opacity: 0.75;
  }

  .swiper-slide-active {
    opacity: 1;
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
