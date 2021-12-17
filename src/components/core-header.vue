<template>
  <div class="mod-wrap nav">
    <nav class="grid">
      <a class="logo" href="javascript:;">
        <img src="../assets/logo.png" alt="">
      </a>
      <div class="navlist">
        <router-link to="/">首页</router-link>
        <router-link to="post">文章归档</router-link>
        <router-link to="post">案例实践</router-link>
        <router-link to="collection">导航推荐</router-link>
        <router-link to="music">音乐分享</router-link>
        <router-link to="the-film">电影推荐</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigator',
};
</script>
