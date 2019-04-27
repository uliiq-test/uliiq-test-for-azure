import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _36507b00 = () => interopDefault(import('..\\pages\\rules\\index.vue' /* webpackChunkName: "pages_rules_index" */))
const _209de65f = () => interopDefault(import('..\\pages\\tradelaw\\index.vue' /* webpackChunkName: "pages_tradelaw_index" */))
const _47241f9e = () => interopDefault(import('..\\pages\\account\\my\\index.vue' /* webpackChunkName: "pages_account_my_index" */))
const _5d669e9c = () => interopDefault(import('..\\pages\\account\\signup\\index.vue' /* webpackChunkName: "pages_account_signup_index" */))
const _a978f4c2 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages_admin_account_index" */))
const _cfdad25a = () => interopDefault(import('..\\pages\\admin\\token\\index.vue' /* webpackChunkName: "pages_admin_token_index" */))
const _63fbee16 = () => interopDefault(import('..\\pages\\account\\my\\bounties\\index.vue' /* webpackChunkName: "pages_account_my_bounties_index" */))
const _e60ab226 = () => interopDefault(import('..\\pages\\account\\my\\profile\\index.vue' /* webpackChunkName: "pages_account_my_profile_index" */))
const _312eee92 = () => interopDefault(import('..\\pages\\account\\my\\rewards\\index.vue' /* webpackChunkName: "pages_account_my_rewards_index" */))
const _6d2e5bf9 = () => interopDefault(import('..\\pages\\account\\my\\bounties\\create\\index.vue' /* webpackChunkName: "pages_account_my_bounties_create_index" */))
const _099e5496 = () => interopDefault(import('..\\pages\\account\\my\\rewards\\create\\index.vue' /* webpackChunkName: "pages_account_my_rewards_create_index" */))
const _94f4979a = () => interopDefault(import('..\\pages\\artists\\_id.vue' /* webpackChunkName: "pages_artists__id" */))
const _d5e737c8 = () => interopDefault(import('..\\pages\\bounties\\_id.vue' /* webpackChunkName: "pages_bounties__id" */))
const _08d53bca = () => interopDefault(import('..\\pages\\rewards\\_id.vue' /* webpackChunkName: "pages_rewards__id" */))
const _5ab3ae1d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/rules",
      component: _36507b00,
      name: "rules"
    }, {
      path: "/tradelaw",
      component: _209de65f,
      name: "tradelaw"
    }, {
      path: "/account/my",
      component: _47241f9e,
      name: "account-my"
    }, {
      path: "/account/signup",
      component: _5d669e9c,
      name: "account-signup"
    }, {
      path: "/admin/account",
      component: _a978f4c2,
      name: "admin-account"
    }, {
      path: "/admin/token",
      component: _cfdad25a,
      name: "admin-token"
    }, {
      path: "/account/my/bounties",
      component: _63fbee16,
      name: "account-my-bounties"
    }, {
      path: "/account/my/profile",
      component: _e60ab226,
      name: "account-my-profile"
    }, {
      path: "/account/my/rewards",
      component: _312eee92,
      name: "account-my-rewards"
    }, {
      path: "/account/my/bounties/create",
      component: _6d2e5bf9,
      name: "account-my-bounties-create"
    }, {
      path: "/account/my/rewards/create",
      component: _099e5496,
      name: "account-my-rewards-create"
    }, {
      path: "/artists/:id?",
      component: _94f4979a,
      name: "artists-id"
    }, {
      path: "/bounties/:id?",
      component: _d5e737c8,
      name: "bounties-id"
    }, {
      path: "/rewards/:id?",
      component: _08d53bca,
      name: "rewards-id"
    }, {
      path: "/",
      component: _5ab3ae1d,
      name: "index"
    }],

    fallback: false
  })
}
