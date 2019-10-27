<template>
  <v-app id="app">
    <Toolbar class="toolbar-app-fixed"></Toolbar>
   <back-to-top>
     <v-btn fab text small class="green">
       <v-icon>keyboard_arrow_up</v-icon>
     </v-btn>
   </back-to-top>
    <LeftMenu class="left_menu-app-fixed"></LeftMenu>
    <v-content class="content">
      <v-container fluid class="container">
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toolbar from "@/components/toolbar/toolbar.vue";
import LeftMenu from "@/components/leftMenu/leftMenu.vue";
import AppCode from "./appCode";
import "./appStyle.scss";

@Component({
  components: {
    Toolbar,
    LeftMenu
  }
})
export default class App extends AppCode {
}
</script>