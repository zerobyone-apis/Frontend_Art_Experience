import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: "/MyEvents",
      name: "MyEvents",
      component: () => import('./views/MyEvents.vue'),
    },
    {
      path: "/MySurveys",
      name: "MySurveys",
      component: () => import('./views/MySurveys.vue'),
    },
    {
      path: "/BarberPage",
      name: "BarberPage",
      component: () => import('./views/BarberPage.vue'),
    }
  ],
});
