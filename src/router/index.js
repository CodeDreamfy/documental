import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import post from '@/pages/Post';
import music from '@/pages/MusicShare';
import collection from '@/pages/Collection';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
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
    {
      path: '/collection',
      name: 'collection',
      component: collection,
    },
    {
      path: '',
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
