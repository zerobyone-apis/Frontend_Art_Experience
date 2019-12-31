<template>
  <div id="my-events"></div>
</template>

<script lang="ts">
import MainView from "./Main.view";
import "./Main.scss";
import { Component } from "vue-property-decorator";
import CustomTable from "@/components/customTable/customTable.vue";
@Component({
  components: {
    CustomTable
  }
})
export default class Main extends MainView {}
</script>
