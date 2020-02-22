<template>
  <header class="hero">
    <AnimatedTitle title="Kelp Forest Theme" />

    <p>v{{ version }}</p>

    <p>A cool and cozy dark theme for Visual Studio Code</p>

    <p>
      {{ installs }} installs | <StarRating :rating="rating" /> ({{
        ratingCount
      }})
    </p>

    <LinkButton href="vscode:extension/jasontheiler.kelp-forest-theme-vscode">
      <font-awesome-icon :icon="icons.faDownload" />&nbsp;&nbsp;Install
    </LinkButton>

    <LinkButton
      href="https://marketplace.visualstudio.com/items?itemName=jasontheiler.kelp-forest-theme-vscode"
    >
      <font-awesome-icon :icon="icons.faMicrosoft" />&nbsp;&nbsp;Marketplace
    </LinkButton>

    <LinkButton href="https://github.com/jasontheiler/kelp-forest-theme-vscode">
      <font-awesome-icon :icon="icons.faGithub" />&nbsp;&nbsp;Repository
    </LinkButton>
  </header>
</template>

<script>
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { faMicrosoft, faGithub } from "@fortawesome/free-brands-svg-icons"

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
        faMicrosoft,
        faGithub,
      }
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
                  value: "jasontheiler.kelp-forest-theme-vscode",
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
</style>
