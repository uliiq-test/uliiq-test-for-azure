<template>
  <div class="wrapper">
    <header class="is-show">
      <h1><nuxt-link to="/"><img class="logo" src="~assets/img/logo.svg" alt="WishHub"></nuxt-link></h1>
      <Navigation/>
    </header>
    <nuxt/>
    <footer>
      <ul>
        <li><nuxt-link to="/rules" target="_blank">ご利用規約</nuxt-link></li>
        <li><a href="https://www.contentsworks.co.jp/privacy/" target="_blank">プライバシーポリシー</a></li>
        <li><a href="https://www.contentsworks.co.jp/" target="_blank">運営会社</a></li>
        <li><a href="https://www.contentsworks.co.jp/wishhub/contact" target="_blank">お問い合わせ</a></li>
      </ul>
      <p class="copy textCenter">©︎2004-2019 Contents Works Inc.</p>
	  </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Navigation from '~/components/Navigation.vue'
import{ CommonConst } from"~/types/CommonConst"

@Component({
    components: {
      Navigation
  }
})
export default class extends Vue {
}
</script>
<style lang="css" scoped>
  .wrapper{
    position: relative;
  }
  header{
    position: relative;
    z-index: 2;
  }
  footer{
    position: relative;
  }
</style>