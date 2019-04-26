<template>
	<div v-if="replyComment" class="indent1">
		<p>
			<nuxt-link :to="'/artists/' + replyComment.account.accountName">{{replyComment.account.displayName}}</nuxt-link><br>
			<div v-html="$options.filters.newLine(replyComment.comment)" v-linkified />
			<ReplyComment
				:replyComment="replyComment.replyComment"
			/>
		</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { BountyComment } from "~/types/models/BountyComment"
import linkify from 'vue-linkify'
Vue.directive('linkified', linkify)

@Component({
	name:'ReplyComment',
	components: {
		ReplyComment
	}
})
export default class ReplyComment extends Vue {
	@Prop() replyComment?: BountyComment
}
</script>