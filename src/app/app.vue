<template>
  <v-app :dark="theme.dark">
    <Toolbar v-if="$store.state.userInfo"></Toolbar>
    <LeftMenu></LeftMenu>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <!-- <notifications width="100%" :duration="5000" position="bottom" group="foo"/> -->
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
export default class App extends AppCode {}
</script>