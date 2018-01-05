import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import post from '@/pages/post';
import music from '@/pages/musiclist';

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
    {
      path: '/post',
      name: 'post',
      component: post,
    },
    {
      path: '/music',
      name: 'music',
      component: music,
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
