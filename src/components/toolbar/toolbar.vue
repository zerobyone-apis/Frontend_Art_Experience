<template v-cloak>
  <v-toolbar fixed flat dark height="60px">
    <img class="logo" src="@/assets/logo.png" @click.stop="pageRouter('/')" alt="Avatar" />

    <v-toolbar-side-icon
      :style="{'color' : theme.colors.navIcons}"
      @click.native.stop="leftDrawer = true"
    ></v-toolbar-side-icon>

    <v-spacer></v-spacer>

    <!--NOTIFICATIONS-->
    <v-menu avatar nudge-top="-53px" right>
      <v-btn icon slot="activator" light>
        <v-icon :color="theme.colors.navIcons">notifications</v-icon>
      </v-btn>

      <v-list class="custom-list">
        <v-list-tile @click v-for="item in notifications" :key="item.name">
          <v-list-tile-action class="pl-3">
            <v-list-tile-title>
              <span>{{ item.name }}</span>
            </v-list-tile-title>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-avatar v-if="false" size="40px" style="cursor: pointer">
      <img src="@/assets/user.jpg" alt="Avatar" />
    </v-avatar>
  </v-toolbar>
</template>

<script lang="ts">
import ToolbarCode from "./toolbarCode";
import "./toolbarStyle.scss";

export default class Toolbar extends ToolbarCode {}
</script>