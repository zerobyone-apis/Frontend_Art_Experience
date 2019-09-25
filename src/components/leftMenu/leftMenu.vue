<template v-cloak>
  <v-navigation-drawer id="drawer-left" dark temporary fixed left v-model="drawer" color="rgba(0, 0, 0, 0.685)">
    <v-list subheader>
      <v-list v-if="filteredConf.length > 0">
        <v-list-tile
          v-for="(item, index) in filteredConf"
          :key="index"
          @click="pageRouter(item.route)"
          class="pb-1 pt-1"
        >
          <v-list-tile-action class="list-item">
            <v-icon color="#DDDDDD">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title :style="{ 'color' : '#DDDDDD' }">
              <span>{{ $i18n.t(item.name) }}</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-list>

    <v-btn small fab class="settings">
      <v-icon color="#BDBDBD">settings</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vuetify from 'vuetify/lib'
import LeftMenuCode from "./leftMenuCode";
import "./leftMenuStyle.scss";

export default class LeftMenu extends LeftMenuCode {}
</script>
