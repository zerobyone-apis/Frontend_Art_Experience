<template>
  <div id="barberShopPage">
    <!-- BANNER  -->
    <div class="banner">
      <v-img
        :src="barberShop.pageDesign.banner.img"
        aspect-ratio="1"
        class="barbershop-banner-wallpaper grey lighten-2"
      >
        <template v-slot:placeholder>
          <!-- <v-row class="progress fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>-->
        </template>
      </v-img>

      <v-img
        :src="barberShop.pageDesign.logo.img"
        aspect-ratio="1"
        class="barbershop-banner-logo grey lighten-2"
      >
        <template v-slot:placeholder>
          <!-- <v-row class="progress fill-height">
            <v-progress-circular indeterminate color="grey lighten-0"></v-progress-circular>
          </v-row>-->
        </template>
      </v-img>

      <div class="darkBox">
        <p class="barbershop-banner-name">{{ barberShop.info.name }}</p>
        <v-icon dark class="barbershop-banner-white-stars" small>star star star star star</v-icon>
        <v-icon class="barbershop-banner-stars" small>{{ getStars() }}</v-icon>
      </div>
    </div>

    <!-- INFO -->
    <div class="info-content">
      <v-stepper v-model="wizard" vertical>
        <v-stepper-header>
          <v-stepper-step step="1" @click="wizard=1">informacion</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" @click="wizard=2">productos</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" @click="wizard=3">promociones</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <div class="info-content-box">
              <!-- about the barbershop -->
              <div class="barbershop-content-info">
                <div class="info-box">
                  <p class="font-info-title">direccion:</p>
                  <p class="font-info">{{ barberShop.info.direction }}</p>

                  <p class="font-info-title">cel:</p>
                  <p class="font-info">{{ barberShop.info.phone }}</p>

                  <p class="font-info-title">email:</p>
                  <p class="font-info">{{ barberShop.info.email }}</p>

                  <p class="font-info-title">abierto:</p>
                  <p class="font-info">{{ barberShop.info.time.days }}</p>

                  <p class="font-info-title">horario:</p>
                  <p
                    class="font-info"
                  >{{ barberShop.info.time.start + "hrs a " + barberShop.info.time.end + "hrs" }}</p>
                </div>

                <div class="map-box">
                  <v-img
                    width="100%"
                    height="100%"
                    src="https://icdn7.digitaltrends.com/image/digitaltrends/google_maps_share_location_1-500x300-c.jpg"
                  ></v-img>
                </div>
              </div>
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            <div class="info-content-box black">
              <!-- <v-btn color="primary" @click.native="step = 2">Continue</v-btn> -->
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>

    <!-- BARBER -->
    <div class="barbershop-content">
      <div class="barbershop-content-barbers">
        <div class="barbershop-content-barbers-profiles">
          <p class="font-info">Barberos</p>
          <div
            class="barbershop-content-barbers-profile"
            v-for="(barber,index) in barberShop.barbers"
            :key="index"
            @click="showBarberProfile(barberShop.barbers[index])"
          >
            <p class="font-info-small">{{ barberShop.barbers[index].name }}</p>

            <v-img
              :src="barberShop.barbers[index].picture.img"
              class="barber-profile-picture grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="progress fill-height" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <p class="font-info-small">{{ barberShop.barbers[index].job }}</p>
          </div>
        </div>
      </div>
    </div>

    <!--Dialogs-->
    <barber-dialog v-model="barberDialog" :barber="selectedBarber"></barber-dialog>
  </div>
</template>

<script lang="ts">
//code
import BarberShopCode from "./barberShop";
//style
import "./barberShop.scss";
//components
import { Component } from "vue-property-decorator";
import BarberDialog from "../../views/barber/barberPage.vue";
// import AddDialog from "../../components/dialogs/addDialog/addDialog.vue";
// import SaveDialog from "@/components/dialogs/save.vue";
// import DeleteDialog from "@/components/dialogs/delete.vue";

@Component({
  components: {
    BarberDialog
    //AddDialog
    // SaveDialog,
    // DeleteDialog
  }
})
export default class BarberShop extends BarberShopCode {}
</script>