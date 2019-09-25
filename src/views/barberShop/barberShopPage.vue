<template>
  <div id="barberShopPage" :class="$vuetify.breakpoint.name+'-format'">
    <!-- BANNER  -->
    <div class="banner">
      <v-img
        :src="barberShop.pageDesign.banner.img"
        aspect-ratio="1"
        class="banner-wallpaper grey lighten-2"
      ></v-img>

      <v-img
        :src="barberShop.pageDesign.logo.img"
        aspect-ratio="1"
        class="banner-logo grey lighten-2"
      ></v-img>

      <div class="actions-box">
        <v-img class="action-logo" :src="icons.facebook"></v-img>
        <v-img class="action-logo" :src="icons.instagram"></v-img>
        <v-btn small class="btn-reservation">consultar</v-btn>

        <div class="darkbox">
          <p class="darkbox-name">{{ barberShop.info.name }}</p>
          <v-icon dark class="darkbox-white-stars" small>star star star star star</v-icon>
          <v-icon class="darkbox-stars" small>{{ getStars() }}</v-icon>
        </div>

        <!-- <v-btn small class="btn-reservation" @click="dialogs.add = true">reservar</v-btn> -->
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
            <v-card>
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
                    <!-- <v-img
                    width="100%"
                    height="100%"
                    src="https://icdn7.digitaltrends.com/image/digitaltrends/google_maps_share_location_1-500x300-c.jpg"
                    ></v-img>-->
                  </div>
                </div>
              </div>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card>
              <v-btn>free for more</v-btn>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card>
              <v-btn>free for more</v-btn>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>

    <!-- BARBER -->
    <div class="barbershop-content">
      <div class="barbershop-content-barbers">
        <!-- containter  -->
        <div class="barbershop-content-barbers-profiles">
          <p class="font-info">Barberos</p>
          <div
            transition="scroll-x-transition"
            class="profile-box"
            v-for="(barber,index) in barberShop.barbers"
            :key="index"
            @click="showBarberProfile(barberShop.barbers[index])"
          >
            <div class="picture-background">
              <v-img
                :src="barberShop.barbers[index].banner.img"
                aspect-ratio="1"
                class="banner-wallpaper grey lighten-2"
              ></v-img>
            </div>
            <div class="info-box">
              <v-img
                :src="barberShop.barbers[index].picture.img"
                class="barber-profile-picture grey lighten-2"
              ></v-img>
              <p class="font-info-small">{{ barberShop.barbers[index].info.name }}</p>
              <p class="font-info-small">{{ barberShop.barbers[index].info.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Dialogs-->
    <barber-dialog v-model="barberDialog" :barber-data="selectedBarber"></barber-dialog>
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