import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
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
