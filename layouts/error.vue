<template>
<div>
	<div class="container">
		<p class="errorText">{{error.statusCode}} eror</p>
		<div class="errorMessage">
			エラーが発生しました。ご迷惑をおかけして申し訳ありません。
		</div>
	</div>
	<a href="/"><input class="submitButton" type="button" value=" TOPに戻る"></a>
</div>
</template>
<script>
export default {
  props: ['error'],

  mounted (){
      this.$store.dispatch('logout');
  }
}
</script>
