<template>
  <div
    :class="'app'"
    class="h-screen dark:bg-vs-second-bg-color-dark"
  >
    <burger-button
      :is-sidebar-open="isSidebarOpen"
      class="absolute right-5 top-5 block md:hidden"
      @click="sidebarToggle"
    />

    <div class="mx-auto my-0 flex h-full max-w-5xl flex-col text-vs-main-bg-color-light">
      <header>
        <h1 class="my-5 text-center font-poiret dark:text-vs-main-text-color-dark">
          <a
            class="text-4xl dark:text-vs-main-text-color-dark"
            href="/"
            title="Val Saven. Software Developer"
            v-text="'valsaven.com'"
          />
        </h1>
      </header>

      <div
        class="flex gap-x-4 font-sans sm:grid"
        :class="'body'"
      >
        <!-- Main Menu -->
        <main-menu class="hidden sm:flex" />

        <!-- Mobile menu -->
        <side-bar
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

import BurgerButton from './components/MainMenu/BurgerButton.vue';
import MainBlock from './components/MainBlock.vue';
import MainMenu from './components/MainMenu/MainMenu.vue';
import SideBar from './components/MainMenu/SideBar.vue';

const isSidebarOpen = ref(false);

function sidebarToggle() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style>
.body {
  grid-template-columns: 1fr 4fr;
}
</style>
