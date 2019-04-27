import Vue from 'vue'
import Meta from 'vue-meta'
import { createRouter } from './router.js'
import NoSSR from './components/no-ssr.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtLink from './components/nuxt-link.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_swplugin_6e135d6c from 'nuxt_plugin_swplugin_6e135d6c' // Source: ./sw.plugin.js (ssr: false)
import nuxt_plugin_googleanalytics_20ef1956 from 'nuxt_plugin_googleanalytics_20ef1956' // Source: ./google-analytics.js (ssr: false)
import nuxt_plugin_axios_ddffe79e from 'nuxt_plugin_axios_ddffe79e' // Source: ./axios.js
import nuxt_plugin_cookiestorage_d91145b6 from 'nuxt_plugin_cookiestorage_d91145b6' // Source: ..\\plugins\\cookie-storage.ts
import nuxt_plugin_veevalidate_6e5ad03a from 'nuxt_plugin_veevalidate_6e5ad03a' // Source: ..\\plugins\\vee-validate (ssr: false)
import nuxt_plugin_axios_5659cf26 from 'nuxt_plugin_axios_5659cf26' // Source: ..\\plugins\\axios.ts
import nuxt_plugin_filters_2dd71148 from 'nuxt_plugin_filters_2dd71148' // Source: ..\\plugins\\filters.ts
import nuxt_plugin_vueawesomeswiper_8efa2a66 from 'nuxt_plugin_vueawesomeswiper_8efa2a66' // Source: ..\\plugins\\vue-awesome-swiper.ts (ssr: false)
import nuxt_plugin_msalWishHub_01945c74 from 'nuxt_plugin_msalWishHub_01945c74' // Source: ..\\plugins\\msalWishHub.ts (ssr: false)
import nuxt_plugin_infiniteloading_68d2fb1c from 'nuxt_plugin_infiniteloading_68d2fb1c' // Source: ..\\plugins\\infiniteloading (ssr: false)

// Component: <no-ssr>
Vue.component(NoSSR.name, NoSSR)

// Component: <nuxt-child>
Vue.component(NuxtChild.name, NuxtChild)

// Component: <nuxt-link>
Vue.component(NuxtLink.name, NuxtLink)

// Component: <nuxt>`
Vue.component(Nuxt.name, Nuxt)

// vue-meta configuration
Vue.use(Meta, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    router,
    store,
    nuxt: {
      defaultTransition,
      transitions: [ defaultTransition ],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [ transitions ]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null
        app.context._errored = !!err
        err = err ? normalizeError(err) : null
        const nuxt = this.nuxt || this.$options.nuxt
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) ssrContext.nuxt.error = err
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    store,
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
  })

  const inject = function (key, value) {
    if (!key) throw new Error('inject(key, value) has no key provided')
    if (typeof value === 'undefined') throw new Error('inject(key, value) has no value provided')
    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) return
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Vue.prototype.hasOwnProperty(key)) {
        Object.defineProperty(Vue.prototype, key, {
          get() {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (typeof nuxt_plugin_axios_ddffe79e === 'function') await nuxt_plugin_axios_ddffe79e(app.context, inject)
  if (typeof nuxt_plugin_cookiestorage_d91145b6 === 'function') await nuxt_plugin_cookiestorage_d91145b6(app.context, inject)
  if (typeof nuxt_plugin_axios_5659cf26 === 'function') await nuxt_plugin_axios_5659cf26(app.context, inject)
  if (typeof nuxt_plugin_filters_2dd71148 === 'function') await nuxt_plugin_filters_2dd71148(app.context, inject)

  if (process.client) {
    if (typeof nuxt_plugin_swplugin_6e135d6c === 'function') await nuxt_plugin_swplugin_6e135d6c(app.context, inject)
    if (typeof nuxt_plugin_googleanalytics_20ef1956 === 'function') await nuxt_plugin_googleanalytics_20ef1956(app.context, inject)
    if (typeof nuxt_plugin_veevalidate_6e5ad03a === 'function') await nuxt_plugin_veevalidate_6e5ad03a(app.context, inject)
    if (typeof nuxt_plugin_vueawesomeswiper_8efa2a66 === 'function') await nuxt_plugin_vueawesomeswiper_8efa2a66(app.context, inject)
    if (typeof nuxt_plugin_msalWishHub_01945c74 === 'function') await nuxt_plugin_msalWishHub_01945c74(app.context, inject)
    if (typeof nuxt_plugin_infiniteloading_68d2fb1c === 'function') await nuxt_plugin_infiniteloading_68d2fb1c(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    store,
    router
  }
}

export { createApp, NuxtError }
