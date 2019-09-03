<template>
  <transition name="slide-fade">
    <div id="my-events" class="page-content">
      <v-layout row wrap>
        <!-- banner -->
        <v-flex xs12 sm12 md12 xl12>
          <div class="barbershop-banner">
            <img class="barbershop-banner-wallpaper" :src="barberShop.pageDesign.banner.img" />
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
                </div>
              </v-flex>
            </v-layout>                                                                    
            <!-- content presentation -->
            <div class="barbershop-content-presentation">
              <v-layout row wrap>
                <v-flex xs12 sm12 md12 xl12>
                  <custom-table
                    :conf="tableConf"
                    v-model="selectedEvents"
                    :items="false"
                    itemIcon="event"
                    @get="get"
                    @value="updateSelected"
                    @open="open"
                    @edit="showSave"
                    @new="showNew"
                  ></custom-table>
                </v-flex>
              </v-layout>
             </div>
            
            <!-- free for more  -->
          </div>
        </v-flex>
      </v-layout>

      <!--Dialogs-->
      <!-- <add-dialog v-model="dialogs.add" :steps="steps" @event="add" button-text="Crear"></add-dialog>
      <save-dialog v-model="dialogs.save" :steps="steps" :item="event" @event="save"></save-dialog> -->

      <!--delete dialog-->
      <!-- <delete-dialog
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
      </v-snackbar> -->
    </div>
  </transition>
</template>

<script lang="ts">
  //code 
  import MainPageCode from './mainPageCode';
  //style
  import './mainPageStyle.scss';
  //components
  import { Component } from "vue-property-decorator";
  import CustomTable from "@/components/customTable/customTable.vue";
    @Component({
    components: {
      CustomTable
    }
  })

  export default class MainPage extends MainPageCode {
  }
</script>
