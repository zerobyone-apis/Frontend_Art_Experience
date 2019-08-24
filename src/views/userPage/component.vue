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
              <v-layout v-if="true" row wrap>
                <v-flex xs4 xl4 sm4>
                  <!-- best pictures selected -->
                    <v-img class="barbershop-content-pictures" :src="barberShop.pageDesign.presentation.img" />
                </v-flex>
                <v-flex xs8 xl8 sm8>
                  <!-- about the barbershop -->
                  <div class="barbershop-content-info">             
                    <p class="font-info-title">cel:</p>
                    <p class="font-info">{{ barberShop.info.phone }}</p>
                    
                    <p class="font-info-title">email:</p>
                    <p class="font-info">{{ barberShop.info.email }}</p>
                  </div>
                </v-flex>
              </v-layout>
             </div>
            
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
  import CodePage from './code';
  //style
  import './style.scss';
  //components
  import { Component } from "vue-property-decorator";
  import CustomTable from "@/components/CustomTable.vue";
  import AddDialog from "@/components/dialogs/add.vue";
  import SaveDialog from "@/components/dialogs/save.vue";
  import DeleteDialog from "@/components/dialogs/delete.vue";

  @Component({
    components: {
      CustomTable,
      AddDialog,
      SaveDialog,
      DeleteDialog
    }
  })

export default class UserPage extends CodePage {
}
</script>
