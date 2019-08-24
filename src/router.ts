import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/home/component.vue')
    },
    {
      path: "/MainPage",
      name: "MainPage",
      component: () => import('./views/mainPage/component.vue')
    },
    {
      path: "/BarberPage",
      name: "BarberPage",
      component: () => import('./views/barberPage/component.vue')
    },
    {
      path: "/UserPage",
      name: "UserPage",
      component: () => import('./views/userPage/component.vue')
    }
  ],
});
