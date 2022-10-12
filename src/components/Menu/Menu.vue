<template>
  <nav class="menu">
    <header class="menu-header">
      <h2 class="menu-title">Menu <span class="menu-title__kaomoji">{{ dailyKaomoji }}</span></h2>
    </header>
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
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  width: 180px;
}

.menu-header {
  align-items: center;
  border: 2px dashed var(--dashed-border-color);
  display: flex;
  height: 68px;
  justify-content: center;
}

.menu-title {
  align-items: center;
  display: flex;
  justify-content: center;
}

.menu-title__kaomoji {
  font-size: 12px;
  margin-left: 10px;
}
</style>
