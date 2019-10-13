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
      @click="drawer = false"
      :href="item.href"
      class="list-item"
    >
      <v-list-item-content class="list-item-content">
        <!-- <v-list-item-avatar>
          <v-icon color="#DDDDDD">{{ item.icon }}</v-icon>
        </v-list-item-avatar> -->
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-btn small fab class="settings" v-if="false">
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
