<template>
  <article class="post">
    <div class="cover">
      <!-- <img src="" alt=""> -->
    </div>
    <div class="inner">
      <h1 class="post-tit">测试标题</h1>
      <h3 class="post-info">
        <span>author: <em>CodeDreamfy</em></span>
        <span>create-time: <em>2018.1.25</em></span>
        <span>last-modify-time: <em>2018.1.25</em></span>
      </h3>
      <div class="post-content markdown-body" id="content">
        markdown转换html，希望可以转换顺利
      </div>
    </div>
  </article>
</template>
<script>
const marked = require('marked');

export default {
  name: 'post-item',
  data() {
    return {

    };
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    document.getElementById('content').innerHTML = marked('# Marked in browser');
  },
};
</script>

