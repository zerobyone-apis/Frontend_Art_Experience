<template v-cloak>
  <v-toolbar id="toolbar" fixed light height="65px">
    <!-- LEFT MENU - BUTTON  -->
    <!-- <v-toolbar-side-icon
      :style="{'color' : theme.colors.navIcons}"
      @click.native.stop="leftDrawer = true"
    ></v-toolbar-side-icon>-->

    <!-- LOGO  -->
    <v-toolbar-title @click.stop="pageRouter('/')">
      Art Experience
      <!-- <img class="logo" src="@/assets/logo.png" @click.stop="pageRouter('/')" alt="Avatar" /> -->
    </v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-toolbar-items class="toolbar-items">
      <!-- <a href="/#anchor">Link to anchor</a> -->

      <v-btn
        flat
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
      <v-btn outline class="toolbar-button">RESERVAR</v-btn>
    </div>
  </v-toolbar>
</template>

<script lang="ts">
import Vuetify from "vuetify/lib";
import ToolbarCode from "./toolbarCode";
import "./toolbarStyle.scss";

export default class Toolbar extends ToolbarCode {}
</script>