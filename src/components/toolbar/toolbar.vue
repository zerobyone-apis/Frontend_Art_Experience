<template v-cloak>
  <v-toolbar id="toolbar" fixed light height="65px" v-if="!leftDrawer">
    <!-- LEFT MENU - BUTTON  -->
    <v-btn
      class="left-menu-btn d-flex d-sm-none"
      @click.native.stop="leftDrawer = true"
      fab
      text
      small
    >
      <v-icon @click.native.stop="leftDrawer = true">menu</v-icon>
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
        v-if="item.toolbar"
        @click="pageRouter(item.route)"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <span>{{ $i18n.t(item.name) }}</span>
      </v-btn>
    </v-toolbar-items>

    <div class="right-box hidden-xs-only">
      <v-btn
        outlined
        @click.native.stop="reservation.dialog = true"
        class="toolbar-button-reservation"
      >RESERVAR</v-btn>
    </div>

    <!-- dialogs -->
    <reservation-dialog v-model="reservation.dialog" :steps="reservation.steps">
    </reservation-dialog>

  </v-toolbar>
</template>

<script lang="ts">
import Vuetify from "vuetify/lib";
import ToolbarCode from "./toolbarCode";
import "./toolbarStyle.scss";
import { Watch, Component } from "vue-property-decorator";
import AddDialog from "../../components/dialogs/addDialog/addDialog.vue";
import ReservationDialog from "../dialogs/ReservationDialog/ReservationDialog.vue";

@Component({
  components: {
    AddDialog,
    ReservationDialog
  }
})
export default class Toolbar extends ToolbarCode {}
</script>