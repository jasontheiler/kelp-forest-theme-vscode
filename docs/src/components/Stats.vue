<template>
  <div class="stats">
    <div class="stat">Version: {{ version }}</div>

    <div class="stat">Installs: {{ installs }}</div>

    <div class="stat">Rating: {{ rating }}/5 ({{ ratingCount }})</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: "1.0.0",
      installs: 0,
      rating: 0,
      ratingCount: 0,
    }
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

<style lang="scss" scoped></style>
