<template transition="slide-x-transition">
  <div id="homePage" :class="$vuetify.breakpoint.name+'-format'">
    <!-- BANNER  -->
    <div class="banner">
      <h2 class="title font-title">Art Experience</h2>
      <p class="sub-title font-title">gestion de Barbershops</p>

      <v-img
        class="banner-img"
        aspect-rato="1"
        src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/02/10093256/barba-la-moda-que-no-se-va-1920-2.jpg"
      ></v-img>
    </div>

    <!-- INFO -->
    <div class="info-content">
      <h2 class="font-title">Quienes somos?</h2>
      <p class="font-text">
        Art Experience es una empresa que se destaca en el mercado por brindar servicios de calidad dedicados
        a gestion de barberias y administracion de reservas para clientes.
      </p>

      
      <div class="services-content">
        <div class="service-item" v-for="(item,index) in customers" :key="index">
          <div>
            <v-img class="service-image" :src="item.picture.img" aspect-ratio="1"></v-img>
            </div>
          <p class="service-name font-text">{{ item.info.name }}</p>
          <p class="service-name font-text">{{ item.info.job }}</p>
        </div>
      </div>

      <!-- <v-parallax height="100"
        src="https://previews.123rf.com/images/natashapankina/natashapankina1609/natashapankina160900101/63622771-modelo-incons%C3%BAtil-de-la-mano-doodle-iconos-peluquer%C3%ADa-establecen.jpg"
      ></v-parallax> -->

      <h2 class="font-title">Servicios</h2>
      <p
        class="font-text"
      >Art Experience brinda servicios de administracion de barberia, reservas, productos y promociones</p>

      <div class="services-content">
        <div class="service-item" v-for="(item,index) in services" :key="index">
          <div class="service-image"><v-icon>{{ item.img }}</v-icon></div>
          <p class="service-name font-text">{{ item.name }}</p>
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
