// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/styles/global.scss"
import ColorSquare from "~/components/ColorSquare.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.component("ColorSquare", ColorSquare)
}
