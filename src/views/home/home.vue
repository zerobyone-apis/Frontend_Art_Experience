<template transition="slide-x-transition">
  <div id="homePage">
    <!-- banner  -->
    <div class="banner">
      <p class="title font-title">Art Experience</p>
      <p class="sub-title font-title">gestion de Barbershops</p>

      <v-carousel
        height="730"
        class="banner-img"
        :show-arrows="false"
        hide-delimiter-background
        hide-delimiters
      >
        <v-carousel-item v-for="(pic,index) in pictures" :key="index" :src="pic"></v-carousel-item>
      </v-carousel>
    </div>
    <!-- about us -->
    <div class="about_us-box">
      <div class="anchor" id="about_us"></div>
      <h1
        class="about_us-title font-title"
        data-aos="fade-up"
        data-aos-duration="600"
      >ACERCA DE NOSOTROS</h1>
      <p class="about_us-text font-text pt-4 pb-4" data-aos="fade-up" data-aos-duration="600">
        Art Experience brinda servicios de calidad dedicados
        a gestion de barberias y administracion de reservas para clientes.
      </p>
      <!-- list employees  -->
      <div class="employees-list">
        <div
          class="employee-item"
          v-for="(item,index) in employees"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <v-img class="employee-img" :src="item.picture.img" aspect-ratio="1"></v-img>
          <p class="employee-name">{{ item.info.name }}</p>
          <p class="employee-info">{{ item.info.job }}</p>

          <div class="employee-social">
            <a :href="item.info.instagram">
              <v-img
                class="employee-social-logo social-logo"
                :src="require('../../assets/icons/instagram.png')"
              ></v-img>
            </a>
            <a :href="item.info.facebook">
              <v-img
                class="employee-social-logo social-logo"
                :src="require('../../assets/icons/facebook.png')"
              ></v-img>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- center decorator -->
    <div class="decoration-box_rigth">
      <v-parallax class="paralax" src="https://kontinent.se/wp-content/uploads/Barbershop_7.jpg"></v-parallax>
    </div>
    <!-- services -->
    <div class="services-box">
      <div class="anchor" id="services"></div>
      <h1
        class="services-title font-title"
        data-aos="fade-up"
        data-aos-duration="600"
      >NUESTROS SERVICIOS</h1>
      <p
        class="services-text font-text pt-4 pb-4"
        data-aos="fade-up"
        data-aos-duration="600"
      >Brindamos servicios de calidad que facilitan su trabajo y aumenta su productividad.</p>
      <div class="services-list">
        <div
          class="service-item"
          v-for="(item,index) in services"
          :key="index"
          data-aos="fade-right"
          data-aos-offset="50"
        >
          <v-icon class="service-icon">{{ item.icon }}</v-icon>
          <p class="service-name">{{ item.name }}</p>
          <p class="service-info">{{ item.info }}</p>
          <!-- <a href>
            <p class="service-url">Ver mas</p>
          </a> -->
        </div>
      </div>
    </div>
    <!-- center decorator -->
    <div class="decoration-box_left">
      <v-parallax
        class="paralax"
        src="http://pointbarber.com/images/home-slideshow/pointbarber-slideshow2.jpg"
      ></v-parallax>
    </div>
    <!-- courses  -->
    <div class="courses-box">
      <div class="anchor" id="cources"></div>
      <h1
        class="courses-title font-title"
        data-aos="fade-up"
        data-aos-duration="600"
      >NUESTROS CURSOS</h1>
      <p
        class="courses-text font-text pt-4 pb-4"
        data-aos="fade-up"
        data-aos-duration="600"
      >Ofrecemos cursos para aumentaran su experiencia</p>
      <div class="courses-list">
        <div
          class="course-item"
          v-for="(item,index) in courses"
          :key="index"
          data-aos="fade-right"
          data-aos-offset="50"
        >
          <p class="course-name">{{ item.name }}</p>
          <v-img class="course-img" aspect-ratio="1" :src="item.img"></v-img>
          <p class="course-duration">duracion: {{ item.duration }}</p>
          <p class="course-info">{{ item.info }}</p>
          <!-- <a href>
            <p class="course-url">Ver mas</p>
          </a> -->
        </div>
      </div>
    </div>

    <!-- center decorator -->
    <div class="decoration-box_rigth">
      <v-parallax class="paralax" src="https://kontinent.se/wp-content/uploads/Barbershop_7.jpg"></v-parallax>
    </div>

    <!-- contact_us  -->
    <div class="contact_us-box">
      <div class="anchor" id="contact"></div>
      <h1 class="contact_us-title font-title" data-aos="fade-up" data-aos-duration="600">CONTACTENOS</h1>
      <p
        class="contact_us-text font-text pt-4 pb-4"
        data-aos="fade-up"
        data-aos-duration="600"
      >Comuniquese con nosotros para mas informacion</p>
      <v-img class="social-logo contact_us-wpp" :src="require('../../assets/icons/whatsapp.png')"></v-img>
      <p class="contact_us-number font-text pt-4 pb-4">{{ homeInfo.number }}</p>
    </div>

    <!-- footer -->
    <div class="footer">
      <p class="logo" data-aos="fade-up" data-aos-duration="600">Art Experience</p>
      <p class="footer-email">{{ homeInfo.email }}</p>
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
