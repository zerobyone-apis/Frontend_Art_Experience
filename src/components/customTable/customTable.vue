<template>
  <v-card class="cards-main">
    <div class="custom-table__header">
      <div>
        <v-text-field
          v-if="(conf.search || {}).show || false"
          v-model="search"
          solo
          :loading="loading"
          @keyup.13="pSearch"
          :placeholder="$i18n.t(conf.search.text) || 'Que esta buscando?'"
          class="custom-table__search"
          append-icon="search"
        ></v-text-field>

        <v-btn
          v-if="pagination"
          dark
          :loading="loading"
          @click="pSearch"
          class="custom-table__search-button"
        >
          <v-icon>search</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-menu open-on-hover bottom left offset-y>
        <v-btn
          :dark="$store.state.theme.colors.nav != '#fff'"
          outline
          slot="activator"
          v-show="showMultiple"
          class="flechita"
        >
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile v-for="(item, index) in multiple" @click="$emit(item.event)" :key="index">
            <v-list-tile-title class="px-3 pr-5">
              <v-icon style="padding-right:20px" color="#444d61">{{item.icon}}</v-icon>
              {{ item.name }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>

    <div class="cards-content custom-table__overflow">
      <div
        class="custom-table__table-header"
        :style="{'background-color' : theme.colors.nav, 'border-top' : '1px solid ' + theme.colors.borders}"
      >
        <div
          :style="{ 'width' : headersWidth + '%' }"
          v-for="(header,index) in conf.headers"
          :key="index"
        >
          {{ $i18n.t(header.name) }}
          <v-icon
            v-show="!filters[header.value]"
            class="custom-table__header_arrows"
            @click="filterAtoZ(header.value)"
          >keyboard_arrow_down</v-icon>
          <v-icon
            v-show="filters[header.value]"
            class="custom-table__header_arrows"
            @click="filterZtoA(header.value)"
          >keyboard_arrow_up</v-icon>
        </div>
      </div>

      <div
        v-for="( item , index ) in filtered"
        @click="open(item)"
        :key="index"
        class="custom-table__item"
      >
        <div
          class="custom-table__item-pic"
          :style="{'background-color' : theme.colors.items, 'border-right' : $store.state.theme.colors.items}"
        >
          <v-icon>{{itemIcon}}</v-icon>
        </div>

        <div class="custom-table__content">
          <v-layout row wrap>
            <v-flex xs12 xl12 sm12>
              <span>{{ item["name"] }}</span>
            </v-flex>
            <v-flex xs12 xl12 sm12>
              <span>{{ item["location"] }}</span>
            </v-flex>
            <v-flex xs12 xl12 sm12>
              <span>{{ "inicio : " + formatDate(item["startDate"]) + " - " + item["startHour"].substring(0,5) }}</span>
            </v-flex>
          </v-layout>

          <div v-on:click.stop class="custom-table__checkbox">
            <v-btn
              color="orange darken-2"
              fab
              style="left:30px; top:10px"
              small
              dark
              @click="edit(item)"
            >
              <v-icon dark small class="pl-3" left>edit</v-icon>
            </v-btn>

            <v-checkbox
              v-model="selectedItems"
              prepend-icon="delete_forever"
              :value="item"
              color="x-theme__color"
            ></v-checkbox>
          </div>
        </div>
      </div>

      <v-alert
        v-show="!filtered.length && search"
        :value="true"
        outline
        color="red"
        icon="home"
      >no se encontraron resultados</v-alert>
      <v-alert
        v-show="!filtered.length && !search"
        :value="true"
        outline
        color="green"
        icon="info"
      >ingrese el nombre o la direccion de la barberia</v-alert>
    </div>

    <v-card
      v-show="pagination"
      flat
      class="custom-table__footer"
      :style="{'background-color' : theme.colors.nav, 'color' : theme.colors.navIcons}"
    >
      <v-card-actions v-if="pagination" class="justify-end custom-table__pagination">
        <span class="pr-3">{{ $i18n.t('UCONTACTX_TABLE.rowsPage') }}</span>
        <v-select
          :dark="theme.colors.nav != '#fff'"
          class="custom-table__select pr-3"
          v-model="pagination.limit"
          :items="rowsPerPage"
        ></v-select>
        <span class="px-3">{{ pFirstItem + "-" + pLastItem + "/" + this.pagination.total }}</span>
        <v-btn
          :disabled="pFirstItem <= 1"
          small
          fab
          flat
          @click.native="previousPage"
          :style="{'color' : theme.colors.nav, 'color' : theme.colors.navIcons}"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn
          :disabled="pLastItem >= this.pagination.total"
          small
          fab
          flat
          @click.native="pNextPage"
          :style="{'color' : theme.colors.nav, 'color' : theme.colors.navIcons}"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import CustomTableCode from "./customTableCode";
import "./customTableStyle.scss";

export default class CustomTable extends CustomTableCode {}
</script>
