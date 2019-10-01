<template transition="slide-x-transition">
  <div id="homePage">
    <!-- BANNER  -->
    <div class="banner">
      <p class="title font-title">Art Experience</p>
      <p class="sub-title font-title">gestion de Barbershops</p>

      <v-carousel class="banner-img" :show-arrows="false" hide-delimiter-background hide-delimiters>
        <v-carousel-item v-for="(pic,index) in pictures" :key="index" :src="pic"></v-carousel-item>
      </v-carousel>

      <div class="div-cut"></div>
    </div>

    <div class="about_us-box">
      <h1 class="about_us-title font-title">ACERCA DE NOSOTROS</h1>
      <p class="about_us-text font-text pt-4 pb-4">
        Art Experience es una empresa que se destaca en el mercado por brindar servicios de calidad dedicados
        a gestion de barberias y administracion de reservas para clientes.
      </p>

      <div class="employees-list">
        <div class="employee-item" v-for="(item,index) in employees" :key="index">
          <v-img class="employee-img" :src="item.picture.img" aspect-ratio="1"></v-img>
          <p class="employee-name">{{ item.info.name }}</p>
          <p class="employee-info">{{ item.info.job }}</p>

          <div class="employee-social">
            <a :href="item.info.instagram">
              <v-img class="social-logo" :src="icons.instagram"></v-img>
            </a>
            <a :href="item.info.facebook">
              <v-img class="social-logo" :src="icons.facebook"></v-img>
            </a>
          </div>
        </div>
      </div>
    </div>

    <v-parallax
      class="decorator-paralax"
      src="https://images.unsplash.com/photo-1549271568-e87e07c5406b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    >
      <div class="div-cut-top"></div>
      <div class="div-cut-bottom"></div>
    </v-parallax>

    <!-- <v-carousel lass="banner-img" :show-arrows="false" hide-delimiter-background hide-delimiters>
      <v-carousel-item v-for="(pic,index) in pictures" :key="index" :src="pic"></v-carousel-item>
    </v-carousel>-->

    <div class="services-box">
      <h1 class="services-title font-title">NUESTROS SERVICIOS</h1>
      <p
        class="services-text font-text pt-4 pb-4"
      >Brindamos servicios de calidad que facilitan su trabajo y aumenta su productividad.</p>

      <div class="services-list">
        <div class="service-item" v-for="(item,index) in services" :key="index">
          <v-icon class="service-icon">{{ item.icon }}</v-icon>
          <p class="service-name">{{ item.name }}</p>
          <p class="service-info">{{ item.info }}</p>
          <p class="service-url">Ver mas</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p class="logo">Art Experience</p>
      <p class="footer-email">artexperience@gmail.com</p>
      <div class="footer-social">
        <a href>
          <v-img class="social-logo" :src="icons.instagram"></v-img>
        </a>
        <a href>
          <v-img class="social-logo" :src="icons.facebook"></v-img>
        </a>
      </div>

      <p class="footer-bussiness">© 2019 Art Experience</p>
    </div>
  </div>
</template>

<script lang="ts">
//code
import HomeCode from "./homeCode";
//style
import "./homeStyle.scss";
import "../../styles/fonts.scss";

//components
import { Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends HomeCode {}
</script>
