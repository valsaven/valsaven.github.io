<template>
  <nav class="menu">
    <header class="menu-header">
      <h2 class="menu-title">Menu <span class="menu-title__kaomoji">{{ dailyKaomoji }}</span></h2>
    </header>
    <menu-list :menu="menu" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MenuList from './MenuList.vue';
import menuItems from './menu-items';

export default defineComponent({
  name: 'MainMenu',
  components: {
    MenuList,
  },
  data() {
    return {
      activeItem: this.$route.name,
      menu: menuItems,
    };
  },
  computed: {
    dailyKaomoji() {
      const dailyKaomojis = [
        '(´• ω •`)\'', // Sunday
        '(・∀・)',
        '(-д-；)',
        '(╥_╥)',
        '(´ヘ｀;)',
        '|ʘ‿ʘ)╯',
        '(´∀`)',
      ];

      return dailyKaomojis[new Date().getDay()];
    },
  },
  watch: {
    '$route.name': function () {
      this.updateActiveItem();
    },
  },
  methods: {
    updateActiveItem() {
      this.activeItem = this.$route.name;
    },
  },
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
