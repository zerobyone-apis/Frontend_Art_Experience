<template>
  <div id="home">
    <v-img
      transition="slide-y-transition"
      height="100%"
      :aspect-ratio="16/9"
      src="http://www.integra-aes.com/site/wp-content/uploads/2012/11/Grey-website-background-1024x640.jpg"
    >
      <div style="padding-top:calc(100% - 70%);">
        <v-layout row wrap>
          <v-flex xs12 xl12 sm12>
            <v-layout row wrap class="text-xs-center">
              <v-flex xs12 xl12 sm12>
                <span class="wellcome">Bienvenido a ArtExperience</span>
                <v-divider class="pt-3"></v-divider>
                <span style="color:white">Crea y gestione tus reservas y actividades comodamente</span>
              </v-flex>

              <v-layout row wrap class="pt-4">
                <v-flex xs6 xl6 sm6 class="text-xs-right pr-4">
                  <v-btn class="button-access" dark outline @click="dialogs.login = true">Acceder</v-btn>
                </v-flex>
                <v-flex xs6 xl6 sm6 class="text-xs-left pl-4">
                  <v-btn
                    class="button-access"
                    dark
                    outline
                    @click="dialogs.register = true"
                  >Registrarse</v-btn>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-img>

    <add-dialog v-model="dialogs.login" :steps="stepsLogin" @event="login" button-text="Acceder"></add-dialog>
    <add-dialog
      v-model="dialogs.register"
      :steps="stepsRegistration"
      @event="register"
      button-text="Registrarse"
    ></add-dialog>
  </div>
</template>

<script lang="ts">
//code
import CodePage from "./code";
//style
import "./style.scss";
//components
import { Component } from "vue-property-decorator";
import AddDialog from "@/components/dialogs/add.vue";

@Component({
  components: {
    AddDialog
  }
})
export default class Home extends CodePage {}
</script>
