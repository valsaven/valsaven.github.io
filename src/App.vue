<template>
  <div
    :class="{ 'dark-theme': isNightTime }"
    class="app"
  >
    <div class="app__wrapper">
      <header class="header">
        <h1 class="header__name">
          <a
            href="/"
            title="Val Saven. Software Developer"
            v-text="'valsaven.com'"
          />
        </h1>
      </header>
      <div class="body">
        <!-- Menu -->
        <main-menu/>
        <!-- Main block -->
        <main-block/>
      </div>

    </div>

  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import MainBlock from '@/components/MainBlock.vue';

import './assets/reset.css';
import './assets/dark-theme.css';

export default {
  name: 'Home',
  components: {
    MainMenu,
    MainBlock,
  },
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    isNightTime() {
      const hours = new Date().getHours();
      return hours > 18;
    }
  }
};
</script>

<style>
:root {
  --main-text-color: #fffffa;
  --main-bg-color: #222;
  --head-bg-color: #41b883;
  --body-bg-color: #525252;

  --wings-1: #45ccca;
  --wings-2: #8fd67a;
  --wings-3: #e5d59a;
  --wings-4: #e7966a;
  --wings-5: #ed5589;
  --wings-6: #b565c6;
  --wings-7: #3366ff;
  --wings-8: #7392ec;
}

body {
  font-family: sans-serif;
}

h1,
h2 {
  text-align: center;
}

a {
  color: #000;
  text-decoration: none;
}

.app {
  height: 100vh;
}

.app__wrapper {
  color: var(--main-bg-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
  grid-column-gap: 0;
  grid-row-gap: 20px;
  max-width: 60%;
  margin: 0 auto;
}

.header__name {
  font-family: 'Poiret One', sans-serif;
  /*font-size: 48px;*/
  margin: 20px 0;
}

.body {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
}


@media only screen and (max-device-width: 568px) {
  #app {
    max-width: 100%;
  }
}
</style>
