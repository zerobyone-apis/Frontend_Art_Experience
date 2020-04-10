<template>
  <div class="custom_list-box">
    <slot name="header-box" :title="title" :info="info">
      <h1 class="custom_list-title font-title">{{ title }}</h1>
      <p class="custom_list-text font-text pt-4 pb-4">{{ info }}</p>
    </slot>

    <div class="items-list">
      <div class="item" v-for="(item,index) in items" :key="index">
        <slot name="item-box" :item="item">
          <v-img
            v-if="item.picture"
            :width="item.picture.width"
            :height="item.picture.height"
            class="item-img"
            :src="item.picture.url"
            aspect-ratio="1"
          ></v-img>
          <v-icon
            :color="item.icon.color"
            :size="item.icon.size"
            v-if="item.icon"
            class="item-icon"
          >{{ item.icon.value }}</v-icon>

          <p class="item-name">{{ item.name }}</p>
          <p class="item-info">{{ item.info }}</p>

          <slot name="bottom-box" :item="item"></slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./customList.scss";
import "../../styles/fonts.scss";
import { Component, Prop } from "vue-property-decorator";
import vue from "vue";

export interface ICustomItem {
  name: string;
  charge: string;
  picture: {
    url: string;
    width: number;
    height: number;
  };
  urls: {
    facebook: string;
    instagram: string;
  };
}

@Component({})
export default class CustomList extends vue {
  @Prop({
    default: undefined
  })
  items!: ICustomItem[];
  @Prop({ default: "Title" }) title!: string;
  @Prop({ default: "Info" }) info!: string;
}
</script>