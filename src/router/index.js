import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // base: '/documental/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
  ],
});

function configRouter() {
  router.beforeEach((to, from, next) => {
    next();
  });
  return router;
}

export default configRouter;
