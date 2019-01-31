
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    title: 'Quogue Gallery'
  })

  head.script.push({
    href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js',
    async: true
  })
  head.script.push({
    href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js',
    async: true
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css'
  })
}
