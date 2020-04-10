<template>
  <div class="presentation-box">
    <p class="title font-title">{{ title }}</p>
    <p class="sub-title font-title">{{ subTitle }}</p>

    <v-carousel
      :height="height"
      class="image-box"
      :show-arrows="showArrows"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="(pic,index) in pictures" :key="index" :src="pic"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import "./presentationBox.scss";
import "../../styles/fonts.scss";
import { Component, Prop } from "vue-property-decorator";
import vue from "vue";
@Component({})
export default class PresentationBox extends vue {
  @Prop({ default: undefined }) pictures!: string[];
  @Prop({ default: false }) showArrows!: boolean;
  @Prop({ default: 730 }) height!: number;
  @Prop({ default: "Title" }) title!: string;
  @Prop({ default: "SubTitle" }) subTitle!: string;
}
</script>