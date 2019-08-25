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
      path: "/BarberPage",
      name: "BarberPage",
      component: () => import('./views/barberPage/barberPage.vue')
    },
    {
      path: "/UserPage",
      name: "UserPage",
      component: () => import('./views/userPage/userPage.vue')
    }
  ],
});
