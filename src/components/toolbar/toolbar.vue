<template v-cloak>
  <v-toolbar id="toolbar" fixed light height="65px">
    <!-- LEFT MENU - BUTTON  -->
    <v-btn class="left-menu-btn d-flex d-sm-none" @click.native.stop="leftDrawer = true" fab text small>
      <v-icon @click.native.stop="leftDrawer = true">view_headline</v-icon>
    </v-btn>

    <!-- LOGO  -->
    <v-toolbar-title @click.stop="pageRouter('/')">
      Art Experience
      <!-- <img class="logo" src="@/assets/logo.png" @click.stop="pageRouter('/')" alt="Avatar" /> -->
    </v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-toolbar-items class="toolbar-items hidden-xs-only">
      <v-btn
        text
        small
        class="toolbar-button"
        v-for="(item, index) in filteredConf"
        :key="index"
        :href="item.href"
        @click="pageRouter(item.route)"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <span>{{ $i18n.t(item.name) }}</span>
      </v-btn>
    </v-toolbar-items>

    <div class="right-box">
      <v-btn outlined class="toolbar-button-reservation">RESERVAR</v-btn>
    </div>
  </v-toolbar>
</template>

<script lang="ts">
import Vuetify from "vuetify/lib";
import ToolbarCode from "./toolbarCode";
import "./toolbarStyle.scss";

export default class Toolbar extends ToolbarCode {}
</script>