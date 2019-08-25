<template>
  <transition name="slide-fade">
    <div id="my-events" class="page-content">
      <v-layout row wrap>
        <!-- banner -->
        <v-flex xs12 sm12 md12 xl12>
          <div class="barbershop-banner">
            <img class="barbershop-banner-wallpaper" :src="barberShop.pageDesign.banner.img" />
            <img class="barbershop-banner-logo" :src="barberShop.pageDesign.logo.img" />
            <p class="barbershop-banner-name">{{ barberShop.info.name }}</p>
            <v-icon dark class="barbershop-banner-white-stars" small>star star star star star</v-icon>
            <v-icon class="barbershop-banner-stars" small>{{ getStars() }}</v-icon>
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
                  <v-btn small class="btn-reservation">consultar</v-btn>
                  <v-btn small class="btn-reservation">reservar</v-btn>
                </div>
              </v-flex>
            </v-layout>
            <!-- content presentation -->
            <div class="barbershop-content-presentation">
              <v-layout v-if="true" row wrap>
                <v-flex xs4 xl4 sm4>
                  <!-- best pictures selected -->
                  <v-img
                    class="barbershop-content-pictures"
                    :src="barberShop.pageDesign.presentation.img"
                  />
                </v-flex>
                <v-flex xs8 xl8 sm8>
                  <!-- about the barbershop -->
                  <div class="barbershop-content-info">
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
                </v-flex>
              </v-layout>
            </div>
            <!-- barbers  -->
            <v-layout row wrap v-if="true">
              <v-flex xs12 xl12 sm12>
                <div class="barbershop-content-barbers">
                  <div class="barbershop-content-barbers-profiles">
                    <p class="font-info">Barberos</p>
                    <div
                      class="barbershop-content-barbers-profile"
                      v-for="(barber,index) in barberShop.barbers"
                      :key="index"
                    >
                      <p class="font-info-small">{{ barberShop.barbers[index].name }}</p>
                      <img
                        class="barber-profile-picture"
                        :src="barberShop.barbers[index].picture.img"
                      />
                      <p class="font-info-small">{{ barberShop.barbers[index].job }}</p>
                    </div>
                  </div>
                </div>
              </v-flex>
            </v-layout>

            <!-- free for more  -->
          </div>
        </v-flex>
      </v-layout>

      <!--Dialogs-->
      <add-dialog v-model="dialogs.add" :steps="steps" @event="add" button-text="Crear"></add-dialog>
      <save-dialog v-model="dialogs.save" :steps="steps" :item="event" @event="save"></save-dialog>

      <!--delete dialog-->
      <delete-dialog
        v-model="dialogs.delete"
        message="EVENTS.deleteEvemts"
        @close="dialogs.delete = false"
      ></delete-dialog>
      <v-snackbar
        class="delete-snackbar"
        v-model="snackbar.state"
        :timeout="snackbar.timeout"
        color="red"
      >
        <v-btn @click.native="dialogs.delete = true" class="delete-snackbar-button" dark flat block>
          <v-icon>delete_forever</v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </transition>
</template>

<script lang="ts">
//code
import BarberPageCode from './barberPageCode';
//style
import "./barberPageStyle.scss";
//components
import { Component } from "vue-property-decorator";
import AddDialog from "@/components/dialogs/add.vue";
import SaveDialog from "@/components/dialogs/save.vue";
import DeleteDialog from "@/components/dialogs/delete.vue";

@Component({
  components: {
    AddDialog,
    SaveDialog,
    DeleteDialog
  }
})

export default class BarberPage extends BarberPageCode {
}
</script>