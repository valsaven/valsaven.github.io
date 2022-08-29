<template>
  <div class="sidebar">
    <div
      v-if="isSidebarOpen"
      class="sidebar-backdrop"
      @click="$emit('sidebar-toggle')"
    />
    <transition name="slide">
      <div
        v-if="isSidebarOpen"
        class="sidebar-panel"
      >
        <menu-list :menu="menu" @sidebar-toggle="$emit('sidebar-toggle')"/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MenuList from './MenuList.vue';
import menuItems from './menu-items';

export default defineComponent({
  name: 'Sidebar',
  components: {
    MenuList,
  },
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: menuItems,
  }),
});
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
  padding: 48px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.sidebar .active {
  transform: none;
}
</style>
