<template>
  <div
    :class="{ 'dark-theme': isNightTime }"
    class="app"
  >
    <burger
      :is-sidebar-open="isSidebarOpen"
      class="burger"
      @click="sidebarToggle"
    />

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
        <main-menu class="main-menu" />

        <!-- Mobile menu -->
        <sidebar
          v-if="isSidebarOpen"
          @sidebar-toggle="sidebarToggle"
        />

        <!-- Main block -->
        <main-block />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Burger from './components/Menu/Burger.vue';
import MainBlock from './components/MainBlock.vue';
import MainMenu from './components/Menu/Menu.vue';
import Sidebar from './components/Menu/Sidebar.vue';

let isSidebarOpen = ref(false);
let isNightTime = false;

function setNightTime() {
  const hours = new Date().getHours();
  isNightTime = hours < 6 || hours >= 21;
}

function sidebarToggle() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

setNightTime();
</script>

<style>
:root {
  --main-text-color: #fffffa;
  --main-bg-color: #222;
  --head-bg-color: #41b883;
  --body-bg-color: #525252;

  --dashed-border-color: #1da1f2;

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
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
}

.header__name {
  font-family: 'Poiret One', sans-serif;
  margin: 20px 0;
}

.body {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
}

.burger {
  display: none;
  position: absolute;
  right: 20px;
  top: 20px;
}

@media screen and (max-width: 767px) {
  .burger {
    display: block;
  }

  .main-menu {
    display: none !important;
  }

  .body {
    display: flex;
  }
}
</style>
