<template>
  <div class="black" style="position: relative; width: 100%; height: 60px;">
    <v-layout row wrap class="text-xs-center">
      <v-flex xs4 xl4 sm4 class="text-xs-left pt-3 pl-1">
        <v-icon @click="model=false" dark fab>arrow_back</v-icon>
      </v-flex>
      <v-flex xs4 xl4 sm4 class="pt-3">
        <span class="white--text">{{ $i18n.t(step.title) }}</span>
      </v-flex>
      <v-flex xs4 xl4 sm4></v-flex>
    </v-layout>
  </div>
</template>

<script>
export default class Header {
  /**
   * @name MODEL
   * @description emits the input method to the parent for define visibility of the dialog
   */
  get model(): boolean {
    return this.value;
  }

  set model(model: boolean) {
    this.$emit("input", model);
  }
}
</script>