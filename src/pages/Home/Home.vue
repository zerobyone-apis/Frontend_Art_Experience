<template transition="slide-x-transition">
  <div id="homePage">
    <PresentationBox
      :title="data.homeInfo.name"
      :sub-title="data.homeInfo.slogan"
      :pictures="data.pictures"
    />

    <custom-list
      :title="data.homeInfo.aboutUsTitle"
      :info="data.homeInfo.aboutUs"
      :items="[{ name: 'jorgexd', info: 'Barbero', picture: {url: 'https://static.thenounproject.com/png/17241-200.png', width: 150, height: 150}, urls: { instagram: '' } }]"
    >
      <template v-slot:bottom-box="{ item }">
        <social-bar :urls="item.urls" />
      </template>
    </custom-list>
    <custom-divider align="right" img="https://kontinent.se/wp-content/uploads/Barbershop_7.jpg" />

    <custom-list
      :title="data.homeInfo.servicesTitle"
      :info="data.homeInfo.services"
      :items="data.services"
    />

    <custom-divider
      align="left"
      img="http://pointbarber.com/images/home-slideshow/pointbarber-slideshow2.jpg"
    />

    <custom-list
      :title="data.homeInfo.coursesTitle"
      :info="data.homeInfo.courses"
      :items="data.courses"
    />

    <custom-divider align="right" img="https://kontinent.se/wp-content/uploads/Barbershop_7.jpg" />

    <custom-list
      :title="data.homeInfo.contactUsTitle"
      :info="data.homeInfo.contactUs"
      :items="[ { info: '09990999', picture: { url: 'https://cdn.icon-icons.com/icons2/1463/PNG/512/whatsapp-black_100119.png', width: 50, height: 50 }} ]"
    />

    <custom-footer
      appName="Art Experience"
      email="artexperice@gmail.com"
      bussiness="@Art Experice 2019"
    />
  </div>
</template>

<script lang="ts">
import HomeView from "./Home.view";
import "./Home.scss";
import "../../styles/fonts.scss";
import { Component } from "vue-property-decorator";
import AddDialog from "../../components/dialogs/addDialog/addDialog.vue";
import PresentationBox from "../../components/presentationBox/presentationBox.vue";
import CustomList from "../../components/customList/customList.vue";
import CustomDivider from "../../components/customDivider/customDivider.vue";
import CustomFooter from "../../components/customFooter/customFooter.vue";
import SocialBar from "../../components/socialBar/socialBar.vue";

@Component({
  components: {
    AddDialog,
    PresentationBox,
    CustomList,
    CustomDivider,
    CustomFooter,
    SocialBar
  }
})
export default class Home extends HomeView {}
</script>
