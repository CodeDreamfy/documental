import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import postItem from '@/components/postItem';
// import music from '@/pages/musiclist';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // base: '/documental/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/post',
      name: 'postItem',
      component: postItem,
    },
    {
      path: '/background',
      component: () => import(/* webpackChunkName: "admin" */'@/pages/admin'),
      children: [
        {
          path: '',
          name: 'back_post',
          component: () => import(/* webpackChunkName: "admin" */'@/pages/back_postlist'),
        },
        {
          path: 'edit',
          name: 'back_edit',
          component: () => import(/* webpackChunkName: "admin" */'@/pages/back_edit'),
        },
      ],
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
