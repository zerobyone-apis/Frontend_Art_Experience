<template>
  <div>
    <v-flex xs12 sm12 lg12 class="pr-3">
      <v-btn
        v-if="steps.length == index+1"
        color="x-theme__color"
        flat
        outline
        style="float: right;"
        @click.native="event"
      >{{ buttonText }}</v-btn>
      <v-btn
        v-if="wizard != steps.length"
        style="float: right;"
        flat
        color="x-theme__color"
        @click.native="wizard += 1"
      >{{ $i18n.t('GENERAL.next') }}</v-btn>
      <v-btn
        v-if="wizard > 1"
        color="grey"
        style="float: right;"
        flat
        @click.native="wizard -= 1"
      >{{ $i18n.t('GENERAL.prev') }}</v-btn>
    </v-flex>
  </div>
</template>

<script>
export default class Footer {
    
}
</script>