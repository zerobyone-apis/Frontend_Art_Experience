import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Home/Home.vue')
    },
    {
      path: '/Main',
      name: 'Main',
      component: () => import('./pages/Main/Main.vue')
    },
    {
      path: '/BarberShop',
      name: 'BarberShop',
      component: () => import('./pages/BarberShop/BarberShop.vue')
    },
    {
      path: '/Barber',
      name: 'Barber',
      component: () => import('./pages/Barber/Barber.vue')
    }
  ],
});
