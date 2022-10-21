<template>
  <div class="favorites">
    <div class="favorites__menu">
      <router-link
        v-for="(item, i) in menuItems"
        :key="i"
        class="favorites__menu-item"
        :to="`/favorites/${item}`"
      >
        {{ item }}
      </router-link>
    </div>

    <div class="favorites__body">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FavoritesItemType } from '../types';

const menuItems: FavoritesItemType[] = [
  'anime',
  'books',
  'games',
  'movies',
  'music',
  'photo',
];
</script>

<style>
.favorites {
  display: flex;
  flex-direction: column;
}

.favorites__menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.favorites__menu-item {
  align-items: center;
  border-radius: 8px;
  border: 1px dashed var(--dashed-border-color);
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  text-align: center;
  width: 16%;
}

.favorites__body {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

/* Dark Theme */
.dark-theme .favorites__menu-item {
  background-color: var(--dark-main-accent-color);
  border: none;
  color: var(--dark-main-text-color);
}
</style>
