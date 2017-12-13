<template>
  <div id="app">
    <header>
      <h1><a href="/" class="transparent-link" title="Val Saven. Full-Stack Developer">Val Saven</a></h1>
      <h2>Software Developer</h2>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="css">
  @import './assets/style/App.css';
</style>
