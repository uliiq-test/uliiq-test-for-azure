<template>
    <transition name="modalThanks" appear>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div id="modal-content">
                <div id="modal-overlay"></div>
                <div class="dialogImg"></div>
                <div class="dialogMessage">
                    <div class="bountyList">
                        <div v-show="imageUrl" class="topBaunty">
                            <img class="dialogMessageImg" :src="imageUrl">
                        </div>
                    </div>
                    <div v-for="message in messages" :key="message">
                        <p v-html="$options.filters.newLine(message)" />
                    </div>
                </div>
                <div>
                    <button id="modal-close" class="rewardButton joinButton" @click="$emit('close')">閉じる</button>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
@Component({})
export default class ModalDialog extends Vue {
    @Prop() messages: string[]
    @Prop() imageUrl: string;
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity .3s ease;
}
.modal-mask .modal-wrapper {
    position: fixed;
    margin-top:8%;
    margin-left:25%;
}
@media (max-width: 767px) {
    #modal-content{
        margin: 0 auto;
        position: relative;
    }
    .modal-mask .modal-wrapper{
        margin-left: 0;
    }
}
</style>