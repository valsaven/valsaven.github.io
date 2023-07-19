<template>
  <nav class="flex w-44 flex-col">
    <!-- main menu header -->
    <header
      class="flex h-16 items-center justify-center
        border-2 border-dashed border-vs-dashed-border-color
        dark:rounded-lg
        dark:border-2 dark:border-dashed dark:border-vs-main-border-color-dark
        dark:bg-vs-main-accent-color-dark"
    >
      <!-- menu-title -->
      <h2 class="flex items-center justify-center text-center text-2xl dark:text-vs-main-text-color-dark">
        Menu
        <span
          class="ml-2.5 cursor-pointer text-xs"
          @click="toggleTheme"
          v-text="dailyKaomoji"
        />
      </h2>
    </header>

    <!-- menu-list -->
    <menu-list :menu="menu" />
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import MenuList from './MenuList.vue';
import menuItems from './menu-items';

const menu = menuItems;

const dailyKaomoji = computed(() => {
  const kaomojis = [
    '(´• ω •`)\'', // Sunday
    '(・∀・)',
    '(-д-；)',
    '(╥_╥)',
    '(´ヘ｀;)',
    '|ʘ‿ʘ)╯',
    '(´∀`)',
  ];

  return kaomojis[new Date().getDay()];
});

function toggleTheme() {
  localStorage.theme = localStorage?.theme === 'light'
    ? 'dark'
    : 'light';
}
</script>
