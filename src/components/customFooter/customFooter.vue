<template>
  <div class="footer">
    <p class="logo">{{ appName }}</p>
    <p class="footer-email">{{ email }}</p>
    <div class="footer-social">
      <a href>
        <v-img
          class="social-logo footer-social-logo"
          :src="require('../../assets/icons/instagram.png')"
        ></v-img>
      </a>
      <a href>
        <v-img
          class="social-logo footer-social-logo"
          :src="require('../../assets/icons/facebook.png')"
        ></v-img>
      </a>
    </div>
    <p class="footer-bussiness">{{ bussiness }}</p>
  </div>
</template>

<script lang="ts">
import "./customFooter.scss";
import "../../styles/fonts.scss";
import { Component, Prop } from "vue-property-decorator";
import vue from "vue";

@Component({})
export default class CustomFooter extends vue {
  @Prop({ default: "app name" }) appName!: string;
  @Prop({ default: "email" }) email!: string;
  @Prop({ default: "bussiness" }) bussiness!: string;
}
</script>