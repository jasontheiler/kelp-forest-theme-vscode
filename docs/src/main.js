// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "typeface-poppins"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "~/styles/global.scss"
import AnimatedTitle from "~/components/AnimatedTitle.vue"
import Background from "~/components/Background.vue"
import Colorpalette from "~/components/Colorpalette.vue"
import ColorpaletteGroup from "~/components/ColorpaletteGroup.vue"
import ColorpaletteItem from "~/components/ColorpaletteItem.vue"
import Footer from "~/components/Footer.vue"
import Hero from "~/components/Hero.vue"
import LinkButton from "~/components/LinkButton.vue"
import Previews from "~/components/Previews.vue"
import PreviewsSwiper from "~/components/PreviewsSwiper.vue"
import StarRating from "~/components/StarRating.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome-icon", FontAwesomeIcon)

  Vue.component("AnimatedTitle", AnimatedTitle)
  Vue.component("Background", Background)
  Vue.component("Colorpalette", Colorpalette)
  Vue.component("ColorpaletteGroup", ColorpaletteGroup)
  Vue.component("ColorpaletteItem", ColorpaletteItem)
  Vue.component("Footer", Footer)
  Vue.component("Hero", Hero)
  Vue.component("LinkButton", LinkButton)
  Vue.component("Previews", Previews)
  Vue.component("PreviewsSwiper", PreviewsSwiper)
  Vue.component("StarRating", StarRating)
}
