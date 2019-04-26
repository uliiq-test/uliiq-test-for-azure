<template>
   <!-- TODO べた書きではなく、APIのバウンティタイプを利用して、動的に割り当てられるようにする。※スタイルとの紐づけが課題 -->
   <p v-if="bountyType=='Shere'" class="projectTagDiffusion">拡散プロジェクト</p>
   <p v-else-if="bountyType=='Vote'" class="projectTagVote">投票プロジェクト</p>
   <p v-else-if="bountyType=='Posted'" class="projectTagApply">投稿プロジェクト</p>
   <p v-else-if="bountyType=='Participation'" class="projectTagEntry">参加プロジェクト</p>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class BountyType extends Vue {
  @Prop() bountyType: number
}
</script>