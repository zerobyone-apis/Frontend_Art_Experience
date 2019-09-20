<template transition="slide-x-transition">
  <div id="homePage">
    <v-img class="img-back" :src="require('../../assets/home/1.jpg')">
      <!-- login -->
      <div class="login-box">
        <div class="fields-box mx-auto">
          <p>Accede si ya tienes tu cuenta</p>
          <v-text-field
            dark
            v-for="(field,index) in fields.login"
            :key="index"
            :label="field.text"
            :prepend-icon="field.icon"
            v-model="field.value"
          ></v-text-field>
          <v-btn flat small dark>acceder</v-btn>
        </div>
      </div>

       <!-- <p
        class="text-presentation"
      >Encuentre sus barberias favoritas y administre sus reservas de forma unica</p> -->

    </v-img>

    <!-- <div class="info-box">    
    </div> -->
  </div>
</template>

<script lang="ts">
//code
import HomeCode from "./homeCode";
//style
import "./homeStyle.scss";
//components
import { Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends HomeCode {}
</script>
