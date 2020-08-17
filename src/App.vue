<template>
  <div
    id="app"
    class="app"
  >
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
      <main-menu />
      <!-- Main block -->
      <main-block />
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import MainBlock from '@/components/MainBlock.vue';

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

html {
  font-size: 16px;
}

body {
  /*background: var(--main-bg-color);*/
  font-family: sans-serif;
}

h1,
h2 {
  text-align: center;
}

a {
  color: #000 !important;
  text-decoration: none;
}

.app {
  background-color: #fffffa;
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
  /*background-color: var(--body-bg-color);*/
  background-color: #fffffa;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
}

.menu > header,
.block > header {
  /*background-color: #41b883;*/
  background-color: #fffffa;
}

@media only screen and (max-device-width: 568px) {
  #app {
    max-width: 100%;
  }
}
</style>
