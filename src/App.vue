<template>
  <v-app
    id="app"
    dark
  >
    <header>
      <h1>
        <a
          href="/"
          title="Val Saven. Software Developer"
        >
          Val Saven
        </a>
      </h1>
      <h2>Software Developer</h2>
    </header>
    <div class="wrapper">
      <!-- Menu -->
      <main-menu/>
      <!-- Main block -->
      <main-block/>
    </div>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import MainBlock from './components/MainBlock.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    MainBlock,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '../node_modules/vuetify/dist/vuetify.min.css';

$main-text-color: #fffffa;
$main-bg-color: #222;
$head-bg-color: #41b883;
$body-bg-color: #525252;
$wings-1-color: #45ccca;
$wings-2-color: #8fd67a;
$wings-3-color: #e5d59a;
$wings-4-color: #e7966a;
$wings-5-color: #ed5589;
$wings-6-color: #b565c6;
$wings-7-color: #3366ff;
$wings-8-color: #7392ec;

html {
  font-size: 16px;
}

body {
  background: $main-bg-color;
  font-family: sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1,
  h2,
  a {
    color: $main-text-color;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1,
h2 {
  text-align: center;
}

a {
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto;
  background-color: $main-bg-color;
}

#app > div > header > h1 {
  font-family: 'Poiret One', sans-serif;
  font-size: 48px;
  margin: 20px 0;
}

.wrapper {
  display: flex;
  background-color: $body-bg-color;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
}

.menu > header,
.block > header {
  background-color: #41b883;
}

/* TODO: Remove */
.wrapper > article > div {
  background-color: #fff;
}

@media only screen and (max-device-width : 568px) {
  #app {
    max-width: 100%;
  }
}
</style>
