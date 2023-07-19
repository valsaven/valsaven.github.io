<template>
  <div class="flex flex-col">
    <div class="flex w-full justify-between">
      <router-link
        v-for="(item, i) in menuItems"
        :key="i"
        class="flex h-8 w-24 cursor-pointer items-center justify-center rounded-lg
        border border-dashed border-vs-dashed-border-color text-center
        dark:border-transparent
        dark:bg-vs-main-accent-color-dark
        dark:text-vs-main-text-color-dark"
        :to="`/favorites/${item}`"
      >
        {{ item }}
      </router-link>
    </div>

    <div class="flex justify-center p-4">
      <router-view />
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
