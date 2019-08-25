<template v-cloak>
  <v-navigation-drawer id="drawer-left" temporary dark fixed left v-model="drawer">
    <v-list subheader>
      <v-list v-if="filteredConf.length > 0">
        <v-list-tile
          v-for="(item, index) in filteredConf"
          :key="index"
          @click="pageRouter(item.route)"
          class="pb-1 pt-1"
        >
          <v-list-tile-action class="pl-1">
            <v-icon color="#BDBDBD">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title :style="{ 'color' : '#BDBDBD' }">
              <span>{{ $i18n.t(item.name).toLowerCase() }}</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import LeftMenuCode from "./leftMenuCode";
import "./leftMenuStyle.scss";

export default class LeftMenu extends LeftMenuCode {}
</script>
