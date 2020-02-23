<template>
  <footer class="footer">
    <p>
      Website built with&nbsp;&nbsp;<font-awesome-icon :icon="icons.faHeart" />
    </p>

    <img :src="logo" alt="logo" class="logo" />

    <p>© {{ currentYear }} {{ $static.metadata.author }}</p>
  </footer>
</template>

<static-query>
query {
  metadata {
    author
  }
}
</static-query>

<script>
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import logo from "~/icons/logo.svg"

export default {
  computed: {
    icons() {
      return {
        faHeart,
      }
    },

    logo() {
      return logo
    },

    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100%;
  padding: 64px 7.5%;
  box-sizing: border-box;
  background-color: #00000040;
  text-align: center;
}

.logo {
  width: 128px;
}
</style>
