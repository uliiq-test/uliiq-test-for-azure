<template>
	<div>
    <div v-for="token in tokens" :key="token.tokenId">
        <div v-if="token.tokenTypeCode == targetPointType">
          <p>{{labelName}}<span class="point">{{token.quantity | toLocaleString}}{{unitName}}</span></p>
        </div>
    </div>
	</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Tokens } from "~/types/models/Tokens";

@Component({})
export default class Point extends Vue {
  @Prop() tokens: Tokens[]
  @Prop() targetPointType: string
  @Prop() labelName: string
  @Prop() unitName: string
}
</script>