<template>
  <div class="sidebar">
    <div
      v-if="isSidebarOpen"
      class="sidebar-backdrop"
      @click="this.$emit('sidebar-toggle')"
    />
    <transition name="slide">
      <div
        v-if="isSidebarOpen"
        class="sidebar-panel"
      >
        <menu-list :menu="menu" />
      </div>
    </transition>
  </div>
</template>

<script>
import MenuItems from './MenuItems';
import MenuList from './MenuList.vue';

export default {
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
    menu: MenuItems,
  }),
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
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
  padding: 3rem 20px 2rem 20px;
  position: fixed;
  top: 0;
  width: 300px;
  z-index: 999;
}
</style>
