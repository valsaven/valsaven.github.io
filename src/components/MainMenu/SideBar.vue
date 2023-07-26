<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="$emit('sidebar-toggle')"
    />
    <transition name="slide">
      <div
        :class="'sidebar-panel'"
        class="dark:bg-vs-main-accent-color-dark"
      >
        <menu-list
          :menu="menu"
          @sidebar-toggle="$emit('sidebar-toggle')"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import MenuList from './MenuList.vue';

import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const menu = computed(() => [
  {
    path: '/',
    name: t('routes.home'),
    icon: 'fas fa-home',
  },
  {
    path: '/favorites',
    name: t('routes.favorites'),
    icon: 'fas fa-star',
  },
  {
    path: '/contacts',
    name: t('routes.contacts'),
    icon: 'far fa-address-card',
  },
]);
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, .5);
  cursor: pointer;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
}

.sidebar-panel {
  background-color: #f8f8f8;
  height: 100vh;
  left: 0;
  overflow-y: auto;
  padding: 2rem 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.sidebar .active {
  transform: none;
}
</style>
