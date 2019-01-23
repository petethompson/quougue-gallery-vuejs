import './../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import './../node_modules/uikit/dist/css/uikit.min.css'
import './../node_modules/uikit/dist/js/uikit.min.js'
import './../node_modules/uikit/dist/js/uikit-icons.js'
import './../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import './../node_modules/bulma/css/bulma.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
