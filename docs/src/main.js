// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueAwesomeSwiper from "vue-awesome-swiper/dist/ssr"
import "swiper/dist/css/swiper.css"

import "~/styles/global.scss"
import Colorpalette from "~/components/Colorpalette.vue"
import ColorpaletteGroup from "~/components/ColorpaletteGroup.vue"
import ColorpaletteItem from "~/components/ColorpaletteItem.vue"
import Previews from "~/components/Previews.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueAwesomeSwiper)

  Vue.component("Colorpalette", Colorpalette)
  Vue.component("ColorpaletteGroup", ColorpaletteGroup)
  Vue.component("ColorpaletteItem", ColorpaletteItem)
  Vue.component("Previews", Previews)
}
