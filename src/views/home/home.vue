<template>
  <div id="homePage">
    
    <!-- login -->
    
    <div class="login-box ml-3 mt-3">
      <div class="fields-box mx-auto">
        <p>Login here if you have a account</p>
        <v-text-field
          v-for="(field,index) in fields.login"
          :key="index"
          :label="field.text"
          :prepend-icon="field.icon"
          v-model="field.value"
        ></v-text-field>
        <v-btn flat small>login</v-btn>
      </div>
    </div>





    <div class="info-box"></div>
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
