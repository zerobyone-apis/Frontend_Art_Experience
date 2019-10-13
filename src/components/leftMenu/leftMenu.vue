<template v-cloak>
  <v-navigation-drawer
    id="drawer-left"
    dark
    temporary
    fixed
    left
    v-model="drawer"
    color="rgba(0, 0, 0, 0.685)"
  >
    <v-list-item
      v-for="(item, index) in filteredConf"
      :key="index"
      @click="pageRouter(item.route)"
      class="pb-1 pt-1"
    >
      <v-list-item-content>
        <v-list-item-action class="list-item">
          <v-icon color="#DDDDDD">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>



    <v-btn small fab class="settings">
      <v-icon color="#BDBDBD">settings</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vuetify from "vuetify/lib";
import LeftMenuCode from "./leftMenuCode";
import "./leftMenuStyle.scss";

export default class LeftMenu extends LeftMenuCode {}
</script>
