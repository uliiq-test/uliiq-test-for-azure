<template>
    <transition name="modalThanks" appear>
        <!-- TODO emitを動的にするか、親にパラメータを渡して冗長なコードを無くす --->
        <div v-if="canOuterClose" class="modal-mask" modal-wrapper @click="$emit('closeModalDialogFreeFormatNo')">
            <div class="modal-wrapper">
                <div id="modal-content-02" class="modal-content">
                    <div v-html="description" />
                        <div class="submitButtonArea">
                            <a v-show="yesButtionName" id="modal-close"  class="rewardButton ChangeButton"  @click="$emit('closeModalDialogFreeFormatYes')">{{yesButtionName}}</a>
                            <a v-show="noButtionName" id="modal-close"  class="rewardButton"  @click="$emit('closeModalDialogFreeFormatNo')">{{noButtionName}}</a>
                        </div>
                </div>
            </div>
        </div>
        <div v-else class="modal-mask" modal-wrapper>
            <div class="modal-wrapper">
                <div id="modal-content-02" class="modal-content">
                    <div v-html="description" />
                        <div class="submitButtonArea">
                            <a v-show="yesButtionName" id="modal-close"  class="rewardButton ChangeButton"  @click="$emit('closeModalDialogFreeFormatYes')">{{yesButtionName}}</a>
                            <a v-show="noButtionName" id="modal-close"  class="rewardButton"  @click="$emit('closeModalDialogFreeFormatNo')">{{noButtionName}}</a>
                        </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
@Component({})
export default class ModalDialogFreeFormat extends Vue {
    @Prop() description: string
    @Prop() yesButtionName?: string
    @Prop() noButtionName?: string
    @Prop() canOuterClose?: boolean

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
}
@media (max-width: 767px) {
    #modal-content-01{
        margin: 0 auto;
        position: relative;
    }
    .modal-mask .modal-wrapper{
        margin-left: 0;
    }
}
</style>