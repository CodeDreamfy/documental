import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
// import post from '@/pages/post';
// import postList from '@/components/postList';
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
  ],
});

function configRouter() {
  router.beforeEach((to, from, next) => {
    next();
  });
  return router;
}

export default configRouter;
