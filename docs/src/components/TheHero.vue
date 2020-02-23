<template>
  <header class="hero">
    <img :src="logo" alt="logo" class="logo" />

    <AnimatedTitle :text="$static.metadata.siteName" />

    <p>v{{ version }}</p>

    <p>{{ $static.metadata.siteDescription }}</p>

    <p>
      {{ installs }} installs | <StarRating :rating="rating" /> ({{
        ratingCount
      }})
    </p>

    <VLinkButton :href="`vscode:extension/${$static.metadata.extensionId}`">
      <font-awesome-icon :icon="icons.faDownload" />&nbsp;&nbsp;Install
    </VLinkButton>

    <VLinkButton
      :href="
        `https://marketplace.visualstudio.com/items?itemName=${$static.metadata.extensionId}`
      "
    >
      <font-awesome-icon :icon="icons.faMicrosoft" />&nbsp;&nbsp;Marketplace
    </VLinkButton>

    <VLinkButton
      :href="`https://github.com/${$static.metadata.repositoryPath}`"
    >
      <font-awesome-icon :icon="icons.faGithub" />&nbsp;&nbsp;Repository
    </VLinkButton>

    <p>
      <VSmall>
        <VLink
          href="https://code.visualstudio.com/docs/editor/extension-gallery"
        >
          Trouble installing?&nbsp;&nbsp;<font-awesome-icon
            :icon="icons.faExternalLinkAlt"
          />
        </VLink>
      </VSmall>
    </p>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    extensionId
    repositoryPath
  }
}
</static-query>

<script>
import {
  faDownload,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faMicrosoft, faGithub } from "@fortawesome/free-brands-svg-icons"

import logo from "~/icons/logo.svg"

export default {
  data() {
    return {
      version: "1.0.0",
      installs: 0,
      rating: 0,
      ratingCount: 0,
    }
  },

  computed: {
    icons() {
      return {
        faDownload,
        faExternalLinkAlt,
        faMicrosoft,
        faGithub,
      }
    },

    logo() {
      return logo
    },
  },

  mounted() {
    fetch(
      "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery?api-version=3.0-preview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters: [
            {
              criteria: [
                {
                  filterType: 7,
                  value: `${this.$static.metadata.extensionId}`,
                },
              ],
            },
          ],
          flags: 914,
        }),
      }
    )
      .then(res => res.json())
      .then(({ results }) => {
        const { versions, statistics } = results[0].extensions[0]

        this.version = versions[0].version
        this.installs = statistics.find(
          ({ statisticName }) => statisticName === "install"
        ).value
        this.rating = statistics.find(
          ({ statisticName }) => statisticName === "averagerating"
        ).value
        this.ratingCount = statistics.find(
          ({ statisticName }) => statisticName === "ratingcount"
        ).value
      })
  },
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 100%;
  padding: 64px 7.5%;
  box-sizing: border-box;
  background-color: #00000040;
  text-align: center;
}

.logo {
  width: 50vw;
  max-width: 512px;
  margin-bottom: 32px;
}
</style>
