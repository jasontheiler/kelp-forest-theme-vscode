// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "typeface-poppins"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "~/styles/global.scss"
import Layout from "~/layouts/Default.vue"
import AnimatedTitle from "~/components/AnimatedTitle.vue"
import ColorpaletteGroup from "~/components/ColorpaletteGroup.vue"
import ColorpaletteGroupItem from "~/components/ColorpaletteGroupItem.vue"
import PreviewsSwiper from "~/components/PreviewsSwiper.vue"
import StarRating from "~/components/StarRating.vue"
import TheBackground from "~/components/TheBackground.vue"
import TheColorpalette from "~/components/TheColorpalette.vue"
import TheFooter from "~/components/TheFooter.vue"
import TheHero from "~/components/TheHero.vue"
import TheInstallation from "~/components/TheInstallation.vue"
import ThePreviews from "~/components/ThePreviews.vue"
import VCode from "~/components/VCode.vue"
import VLink from "~/components/VLink.vue"
import VLinkButton from "~/components/VLinkButton.vue"
import VSmall from "~/components/VSmall.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome-icon", FontAwesomeIcon)

  Vue.component("Layout", Layout)
  Vue.component("AnimatedTitle", AnimatedTitle)
  Vue.component("ColorpaletteGroup", ColorpaletteGroup)
  Vue.component("ColorpaletteGroupItem", ColorpaletteGroupItem)
  Vue.component("PreviewsSwiper", PreviewsSwiper)
  Vue.component("StarRating", StarRating)
  Vue.component("TheBackground", TheBackground)
  Vue.component("TheColorpalette", TheColorpalette)
  Vue.component("TheFooter", TheFooter)
  Vue.component("TheHero", TheHero)
  Vue.component("TheInstallation", TheInstallation)
  Vue.component("ThePreviews", ThePreviews)
  Vue.component("VCode", VCode)
  Vue.component("VLink", VLink)
  Vue.component("VLinkButton", VLinkButton)
  Vue.component("VSmall", VSmall)
}
