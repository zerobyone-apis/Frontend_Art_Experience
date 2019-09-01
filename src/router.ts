import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/home/home.vue')
    },
    {
      path: "/MainPage",
      name: "MainPage",
      component: () => import('./views/mainPage/mainPage.vue')
    },
    {
      path: "/BarberShop",
      name: "BarberShop",
      component: () => import('./views/barberShop/barberShopPage.vue')
    },
    {
      path: "/Barber",
      name: "Barber",
      component: () => import('./views/barber/barberPage.vue')
    }
  ],
});
