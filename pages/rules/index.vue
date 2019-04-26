<template>
	<div class="container bgWhite">
		<Rule/>
	</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import Rule from "~/components/Rule.vue"

@Component({
  components: {
    Rule
  }
})
export default class extends Vue {
}
</script>