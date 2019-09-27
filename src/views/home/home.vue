<template transition="slide-x-transition">
  <div id="homePage" :class="$vuetify.breakpoint.name+'-format'">
    <!-- BANNER  -->
    <div class="banner">
      <p class="title font-title">Art Experience</p>
      <p class="sub-title font-title">gestion de Barbershops</p>

      <v-img
        class="banner-img"
        aspect-rato="1"
        src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/02/10093256/barba-la-moda-que-no-se-va-1920-2.jpg"
      ></v-img>
    </div>

    <!-- INFO -->
    <div class="info-content">
      <h1 class="about_us-title font-title">ACERCA DE NOSOTROS</h1>
      <v-divider inset class="pt-4"></v-divider>
      <div class="about_us-box">
        <h3 class="font-text pt-4 pb-4">
          Art Experience es una empresa que se destaca en el mercado por brindar servicios de calidad dedicados
          a gestion de barberias y administracion de reservas para clientes.
        </h3>
      </div>

      <!-- <div class="owners-content">
        <div class="owner-item" v-for="(item,index) in customers" :key="index">
          <div>
            <v-img class="owner-image" :src="item.picture.img" aspect-ratio="1"></v-img>
          </div>
          <p class="owner-name font-text">{{ item.info.name }}</p>
          <p class="owner-name font-text">{{ item.info.job }}</p>
        </div>
      </div>-->

      <!-- <v-img
        class="barber-knife"
        aspect-rato="1"
        src="https://http2.mlstatic.com/navaja-barberia-afeitar-D_NQ_NP_721089-MLA31605916965_072019-F.jpg"
      ></v-img>-->

      <!-- <v-parallax class="barber-knife"
        height="600"
        src="https://wallpapercave.com/wp/wp2541317.jpg"
      ></v-parallax>-->

      <div>
        <h1 class="font-title pt-4">SERVICIOS</h1>
        <v-divider inset class="pt-4"></v-divider>
        <p
          class="font-text pt-4"
        >Art Experience brinda servicios de administracion de barberia, reservas, productos y promociones</p>

        <div class="services-content">
          <div class="service-item" v-for="(item,index) in services" :key="index">
            <div class="service-image">
              <v-icon>{{ item.img }}</v-icon>
            </div>
            <h3 class="service-name font-title">{{ item.name }}</h3>

            <p class="service-info font-text">{{ item.info }}</p>
          </div>
        </div>
      </div>

      <!-- <v-carousel>
        <v-carousel-item v-for="(pic,index) in pictures" :key="index" :src="pic"></v-carousel-item>
      </v-carousel>-->
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
