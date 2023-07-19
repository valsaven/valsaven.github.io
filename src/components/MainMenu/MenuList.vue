<template>
  <!-- Menu List  -->
  <ul class="mx-0 my-4 grid grid-cols-1 gap-x-0 gap-y-2 pl-4">
    <router-link
      v-for="(item, i) in menu"
      :key="i"
      v-slot="{ href, navigate, isActive }"
      :to="item.path"
      custom
    >
      <!-- menu item -->
      <li
        :class="[
          `menu-item-${i + 1}`,
          { 'scale-125': isActive },
        ]"
        class="flex items-center justify-start transition-all"
        @click="$emit('sidebar-toggle')"
      >
        <!-- item icon -->
        <div
          :class="{
            'text-black dark:text-vs-main-text-color-dark': isActive
          }"
          class="flex h-10 w-10 items-center justify-center border-0 text-vs-second-text-color-dark"
        >
          <i
            :class="item.icon"
            class="text-3xl"
          />
        </div>
        <!-- item title -->
        <a
          :href="href"
          class="pl-2 text-lg first-letter:font-bold dark:text-vs-main-text-color-dark"
          @click="navigate"
        >
          {{ item.name }}
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { MenuItems } from '../../types';

defineProps({
  menu: {
    type: Object as PropType<MenuItems>,
    required: true,
  },
});
</script>

<style lang="postcss">
/* Flandre Wings */
.menu-item-1 a::first-letter { @apply text-wings-1; }
.menu-item-2 a::first-letter { @apply text-wings-2; }
.menu-item-3 a::first-letter { @apply text-wings-3; }
.menu-item-4 a::first-letter { @apply text-wings-4; }
.menu-item-5 a::first-letter { @apply text-wings-5; }
.menu-item-6 a::first-letter { @apply text-wings-6; }
.menu-item-7 a::first-letter { @apply text-wings-7; }
.menu-item-8 a::first-letter { @apply text-wings-8; }
</style>
