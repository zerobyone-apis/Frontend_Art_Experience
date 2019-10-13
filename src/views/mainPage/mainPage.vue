<template>
  <div id="my-events">

  </div>
</template>

<script lang="ts">
//code
import MainPageCode from "./mainPageCode";
//style
import "./mainPageStyle.scss";
//components
import { Component } from "vue-property-decorator";
import CustomTable from "@/components/customTable/customTable.vue";
@Component({
  components: {
    CustomTable
  }
})
export default class MainPage extends MainPageCode {}
</script>
