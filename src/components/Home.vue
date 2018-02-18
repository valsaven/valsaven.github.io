<template>
  <div class="block-body home">
    <div class="home-item">
      <h1>Site overview</h1>
      <p>This website is a homepage of Val Saven.</p>
      <p>If you want to contact me, please use the ones listed in the contacts menu.</p>
    </div>
    <div class="home-item">
      <h1>Simple self-introduction</h1>
      <p>My name is Val Saven. This is my working alias. My real name is Valery Savchenko.</p>
      <p>I'm a software developer.</p>
      <p>My favorite language is JavaScript, I develop on Windows or Linux.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .home p {
    color: var(--main-text-color);
    margin: 10px 20px;
  }

.home-item {
  margin: 20px;
  padding: 10px;
  background-color: #353535;
}
</style>
