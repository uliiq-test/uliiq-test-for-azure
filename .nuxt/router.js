import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2134dd76 = () => interopDefault(import('..\\pages\\artists\\index.vue' /* webpackChunkName: "pages_artists_index" */))
const _1d83348c = () => interopDefault(import('..\\pages\\bounties\\index.vue' /* webpackChunkName: "pages_bounties_index" */))
const _1f7d35a6 = () => interopDefault(import('..\\pages\\rewards\\index.vue' /* webpackChunkName: "pages_rewards_index" */))
const _8ad9a18c = () => interopDefault(import('..\\pages\\rules\\index.vue' /* webpackChunkName: "pages_rules_index" */))
const _5e6f8765 = () => interopDefault(import('..\\pages\\tradelaw\\index.vue' /* webpackChunkName: "pages_tradelaw_index" */))
const _34e598d8 = () => interopDefault(import('..\\pages\\account\\my\\index.vue' /* webpackChunkName: "pages_account_my_index" */))
const _ba4a0628 = () => interopDefault(import('..\\pages\\account\\signup\\index.vue' /* webpackChunkName: "pages_account_signup_index" */))
const _de046bb6 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages_admin_account_index" */))
const _628044d9 = () => interopDefault(import('..\\pages\\admin\\token\\index.vue' /* webpackChunkName: "pages_admin_token_index" */))
const _12d0c1af = () => interopDefault(import('..\\pages\\account\\my\\bounties\\index.vue' /* webpackChunkName: "pages_account_my_bounties_index" */))
const _d116221a = () => interopDefault(import('..\\pages\\account\\my\\profile\\index.vue' /* webpackChunkName: "pages_account_my_profile_index" */))
const _3ba93698 = () => interopDefault(import('..\\pages\\account\\my\\rewards\\index.vue' /* webpackChunkName: "pages_account_my_rewards_index" */))
const _2b891ece = () => interopDefault(import('..\\pages\\account\\signup\\reidirect.vue' /* webpackChunkName: "pages_account_signup_reidirect" */))
const _25048a9a = () => interopDefault(import('..\\pages\\account\\my\\bounties\\create\\index.vue' /* webpackChunkName: "pages_account_my_bounties_create_index" */))
const _9a2992c8 = () => interopDefault(import('..\\pages\\account\\my\\rewards\\create\\index.vue' /* webpackChunkName: "pages_account_my_rewards_create_index" */))
const _e97dbe26 = () => interopDefault(import('..\\pages\\artists\\_id.vue' /* webpackChunkName: "pages_artists__id" */))
const _76be8ea2 = () => interopDefault(import('..\\pages\\bounties\\_id.vue' /* webpackChunkName: "pages_bounties__id" */))
const _910fc7e6 = () => interopDefault(import('..\\pages\\rewards\\_id\\index.vue' /* webpackChunkName: "pages_rewards__id_index" */))
const _0ae130f1 = () => interopDefault(import('..\\pages\\rewards\\_id\\comments\\_name.vue' /* webpackChunkName: "pages_rewards__id_comments__name" */))
const _49a3bea3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      path: "/artists",
      component: _2134dd76,
      name: "artists"
    }, {
      path: "/bounties",
      component: _1d83348c,
      name: "bounties"
    }, {
      path: "/rewards",
      component: _1f7d35a6,
      name: "rewards"
    }, {
      path: "/rules",
      component: _8ad9a18c,
      name: "rules"
    }, {
      path: "/tradelaw",
      component: _5e6f8765,
      name: "tradelaw"
    }, {
      path: "/account/my",
      component: _34e598d8,
      name: "account-my"
    }, {
      path: "/account/signup",
      component: _ba4a0628,
      name: "account-signup"
    }, {
      path: "/admin/account",
      component: _de046bb6,
      name: "admin-account"
    }, {
      path: "/admin/token",
      component: _628044d9,
      name: "admin-token"
    }, {
      path: "/account/my/bounties",
      component: _12d0c1af,
      name: "account-my-bounties"
    }, {
      path: "/account/my/profile",
      component: _d116221a,
      name: "account-my-profile"
    }, {
      path: "/account/my/rewards",
      component: _3ba93698,
      name: "account-my-rewards"
    }, {
      path: "/account/signup/reidirect",
      component: _2b891ece,
      name: "account-signup-reidirect"
    }, {
      path: "/account/my/bounties/create",
      component: _25048a9a,
      name: "account-my-bounties-create"
    }, {
      path: "/account/my/rewards/create",
      component: _9a2992c8,
      name: "account-my-rewards-create"
    }, {
      path: "/artists/:id",
      component: _e97dbe26,
      name: "artists-id"
    }, {
      path: "/bounties/:id",
      component: _76be8ea2,
      name: "bounties-id"
    }, {
      path: "/rewards/:id",
      component: _910fc7e6,
      name: "rewards-id"
    }, {
      path: "/rewards/:id/comments/:name?",
      component: _0ae130f1,
      name: "rewards-id-comments-name"
    }, {
      path: "/",
      component: _49a3bea3,
      name: "index"
    }],

    fallback: false
  })
}
