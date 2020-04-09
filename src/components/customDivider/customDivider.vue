<template>
  <div :class="`custom-divider_${align}`">
    <v-parallax class="paralax" :src="img"></v-parallax>
  </div>
</template>

<script lang="ts">
import "./customDivider.scss";
import "../../styles/fonts.scss";
import { Component, Prop } from "vue-property-decorator";
import vue from "vue";

@Component({})
export default class CustomDivider extends vue {
  @Prop({ default: "" }) img!: string;
  @Prop({ default: "left" }) align!: string;
}
</script>