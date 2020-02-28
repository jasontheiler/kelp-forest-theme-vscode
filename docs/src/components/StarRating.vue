<template>
  <span class="star-rating">
    <font-awesome-icon v-for="(icon, idx) of stars" :key="idx" :icon="icon" />
  </span>
</template>

<script>
import {
  faStar as fasStar,
  faStarHalfAlt as fasStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"

export default {
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },

  computed: {
    stars() {
      const rating = this.rating
      const rest = 5 - rating

      let stars = []

      for (let i = 0; i <= rating - 1; i++) {
        stars.push(fasStar)
      }

      if (rating % 1 !== 0) {
        if (rating % 1 >= 0.75) {
          stars.push(fasStar)
        } else if (rating % 1 >= 0.25) {
          stars.push(fasStarHalfAlt)
        } else {
          stars.push(farStar)
        }
      }

      for (let i = 0; i <= rest - 1; i++) {
        stars.push(farStar)
      }

      return stars
    },
  },
}
</script>
