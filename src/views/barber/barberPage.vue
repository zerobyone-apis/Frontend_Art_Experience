<template>
  <!-- <transition name="slide-y-reverse-transition"> -->
  <v-dialog v-model="model" fullscreen scrollable transition="slide-y-reverse-transition">
    <div id="barberProfile" class="page-content white">
      <div class="black" style="position: relative; width: 100%; height: 60px;">
        <v-layout row wrap class="text-xs-center">
          <v-flex xs4 xl4 sm4 class="text-xs-left pt-3 pl-1">
            <v-icon @click="model=false" dark fab>arrow_back</v-icon>
          </v-flex>
          <v-flex xs4 xl4 sm4 class="pt-3">
            <span class="white--text">{{ $i18n.t("Perfil del barbero") }}</span>
          </v-flex>
          <v-flex xs4 xl4 sm4></v-flex>
        </v-layout>
      </div>

      <v-layout row wrap>
        <!-- banner -->
        <v-flex xs12 sm12 md12 xl12>
          <div class="barbershop-banner">
            <v-img
              :src="barber['banner']['img']"
              aspect-ratio="1"
              class="barbershop-banner-wallpaper grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="progress fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <!-- barber.banner.img -->
            <v-img
              :src="barber['picture']['img']"
              aspect-ratio="1"
              class="barbershop-banner-logo grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="progress fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <!-- barber.picture.img -->
            <p class="barbershop-banner-name">{{ barber.name }}</p>
          </div>
        </v-flex>
        <!-- main container -->
        <v-flex xs12 sm12 md12 xl12>
          <div class="barbershop-content">
            <!-- actions bar -->
            <v-layout row wrap>
              <v-flex v-if="true" xs12 sm12 md12 xl12>
                <div class="barbershop-actions">
                  <v-img class="action-logo" :src="icons.facebook"></v-img>
                  <v-img class="action-logo" :src="icons.instagram"></v-img>
                  <v-btn small class="btn-reservation" v-if="false">consultar</v-btn>
                  <v-btn small class="btn-reservation" @click="dialogs.add = true">reservar</v-btn>
                </div>
              </v-flex>
            </v-layout>
            <!-- content presentation -->
            <div class="barbershop-content-presentation">
              <v-layout v-if="true" row wrap>
                <!-- <v-flex xs4 xl4 sm4>
                  
                  <v-img class="barbershop-content-something" src />
                </v-flex> -->
                <v-flex xs8 xl8 sm8>
                  <!-- about the barbershop -->
                  <div class="barbershop-content-info">
                    <p class="font-info-title">cel:</p>
                    <p class="font-info">{{ barber.job }}</p>
                    <p class="font-info-title">{{ barber.email }}</p>
                    <p class="font-info">{{ barber.info }}</p>
                  </div>
                </v-flex>
              </v-layout>
            </div>

            <!-- free for more  -->
          </div>
        </v-flex>

        <!-- pictures and other  -->
        <v-flex xs12 sm12 md12 xl12>
          <div class="barbershop-pictures">

          </div>
        </v-flex>
      </v-layout>

      <!--Dialogs-->
      <add-dialog v-model="dialogs.add" :steps="steps" @event="add" button-text="Crear"></add-dialog>
    </div>
  </v-dialog>
  <!-- </transition> -->
</template>

<script lang="ts">
//code
import BarberCode from "./barber";
//style
import "./barber.scss";
//components
import { Component, Prop } from "vue-property-decorator";
import AddDialog from "@/components/dialogs/addDialog/addDialog.vue";
import SaveDialog from "@/components/dialogs/save.vue";
import DeleteDialog from "@/components/dialogs/delete.vue";

@Component({
  components: {
    AddDialog
    // SaveDialog,
    // DeleteDialog
  }
})
export default class Barber extends BarberCode {
  @Prop({ default: false }) value!: boolean;
  @Prop({
    default: {
      name: "ZeroByOne",
      job: "barber",
      email: "zerobyone@gmail.com",
      info: "se especializa en algo",
      picture: {
        img: "https://avatars2.githubusercontent.com/u/37275050?s=460&v=4",
        scala: 100,
        x: 0,
        y: 0
      },
      banner: {
        img:
          "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/barbershop-clippers-in-black-and-white-paul-ward.jpg",
        scala: 100,
        x: 0,
        y: 0
      }
    }
  })
  barber!: any;
}
</script>
