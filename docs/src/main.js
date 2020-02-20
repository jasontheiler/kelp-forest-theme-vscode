// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "typeface-titillium-web"

import "~/styles/global.scss"
import Colorpalette from "~/components/Colorpalette.vue"
import ColorpaletteGroup from "~/components/ColorpaletteGroup.vue"
import ColorpaletteItem from "~/components/ColorpaletteItem.vue"
import Previews from "~/components/Previews.vue"
import PreviewsSwiper from "~/components/PreviewsSwiper.vue"
import Stats from "~/components/Stats.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.component("Colorpalette", Colorpalette)
  Vue.component("ColorpaletteGroup", ColorpaletteGroup)
  Vue.component("ColorpaletteItem", ColorpaletteItem)
  Vue.component("Previews", Previews)
  Vue.component("PreviewsSwiper", PreviewsSwiper)
  Vue.component("Stats", Stats)
}
