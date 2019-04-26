import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\vendor\\nucleo\\css\\nucleo.css'

import '..\\assets\\vendor\\font-awesome\\css\\font-awesome.min.css'

import '..\\node_modules\\swiper\\dist\\css\\swiper.css'

import '..\\assets\\dest\\style.css'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"WishHub（ウィッシュハブ）｜小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス","meta":[{"name":"robots","content":"noindex"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"name":"google-site-verification","content":"AqZAAjgcZdaYEcRJ4NmfxlUcJRFzYWydrt5ojpZZDIg"},{"name":"author","content":"Contents Works Inc."},{"hid":"description","name":"description","content":"WishHub（ウィッシュハブ）は、誰でも「小さな行動」で、誰かの『夢』を応援できる行動支援（アクションファンディング）サービスです。"},{"hid":"og:title","property":"og:title","content":"①WishHub（ウィッシュハブ）｜小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス"},{"hid":"og:type","property":"og:type","content":"article"},{"hid":"og:site_name","property":"og:site_name","content":"WishHub"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fwishhub.fan"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fwishhub.fan\u002Fimg\u002Freward_common.jpg"},{"hid":"og:description","property":"og:description","content":"②WishHub（ウィッシュハブ）は、誰でも「小さな行動」で、誰かの『夢』を応援できる行動支援（アクションファンディング）サービスです。"},{"hid":"twitter:site","name":"twitter:site","content":"@WishHub_fan"},{"hid":"twitter:title","name":"twitter:title","content":"③WishHub（ウィッシュハブ）｜小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス"},{"hid":"twitter:description","name":"twitter:description","content":"④WishHub（ウィッシュハブ）は、誰でも「小さな行動」で、誰かの『夢』を応援できる行動支援（アクションファンディング）サービスです。"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fwishhub.fan\u002Fimg\u002Freward_common.jpg"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"WishHub"},{"hid":"theme-color","name":"theme-color","content":"#3B8070"}],"script":[{"src":"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F2.1.4\u002Fjquery.min.js","type":"text\u002Fjavascript","body":true}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.6.3\u002Fcss\u002Fall.css","integrity":"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s\u002F","crossorigin":"anonymous"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=M+PLUS+Rounded+1c"},{"rel":"stylesheet","src":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=M+PLUS+1p"},{"rel":"shortcut icon","href":"\u002Ffavicon.ico?v=2","type":"image\u002Fvnd.microsoft.icon"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.46c68579.json"}],"style":[],"htmlAttrs":{"lang":"ja"}},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
