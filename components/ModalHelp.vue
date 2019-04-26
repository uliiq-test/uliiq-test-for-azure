<template>
    <transition name="modalThanks" appear>
        <div class="modal-mask" modal-wrapper @click="$emit('closeModalHelp')">
            <div class="modal-wrapper">
                <div id="modal-content-01" class="modal-content">
                    <h3 class="black">{{title}}</h3>
                    <div v-html="description" />
                    <p class="modalClose"><a @click="$emit('closeModalHelp')" id="modal-close" class="button-link"><img src="~assets/img/icon_close.svg"></a></p>
                </div>
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
@Component({})
export default class ModalHelp extends Vue {
    @Prop() title: string
    @Prop() description: string
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