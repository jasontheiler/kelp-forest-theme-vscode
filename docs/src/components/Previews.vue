<template>
  <div class="previews">
    <div v-swiper:previewsSwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div
          v-for="{ node } of $static.allPreviews.edges"
          :key="node.id"
          class="swiper-slide"
        >
          <g-image
            :src="node.image"
            :alt="node.title"
            :immediate="true"
            class="g-image"
          />
        </div>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<static-query>
query {
  allPreviews(sort: {by: "title", order: ASC}) {
    edges {
      node {
        id
        title
        image
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "Previews",
  computed: {
    swiperOptions() {
      return {
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.previews {
  width: 75%;
}

.swiper-wrapper {
  overflow: hidden;
}

.swiper-button-prev,
.swiper-button-next {
}

.swiper-pagination-bullets {
  bottom: -10px;
}

.g-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
