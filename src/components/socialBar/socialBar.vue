<template>
  <div class="item-social">
    <a :href="urls.instagram" v-if="urls.instagram">
      <v-img
        class="item-social-logo social-logo"
        :src="require('../../assets/icons/instagram.png')"
      ></v-img>
    </a>
    <a :href="urls.facebook">
      <v-img class="item-social-logo social-logo" :src="require('../../assets/icons/facebook.png')"></v-img>
    </a>
    <a :href="urls.whatsapp">
      <v-img class="item-social-logo social-logo" :src="require('../../assets/icons/whatsapp.png')"></v-img>
    </a>
  </div>
</template>

<script lang="ts">
import "./socialBar.scss";
import "../../styles/fonts.scss";
import { Component, Prop } from "vue-property-decorator";
import vue from "vue";

@Component({})
export default class SocialBar extends vue {
  @Prop({ default: undefined }) urls!: any;
}
</script>