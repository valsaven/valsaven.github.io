<template>
  <nav class="menu">
    <header class="menu-header">
      <h2 v-text="`Menu ${dailyKaomoji} `" />
    </header>
    <menu-list :menu="menu" />
  </nav>
</template>

<script>
import MenuItems from './MenuItems';
import MenuList from './MenuList.vue';

export default {
  name: 'MainMenu',
  components: {
    MenuList,
  },
  data() {
    return {
      activeItem: this.$route.name,
      menu: MenuItems,
      dailyKaomojis: [
        '(´• ω •`)\'', // Sunday
        '(・∀・)',
        '(-д-；)',
        '(╥_╥)',
        '(´ヘ｀;)',
        '|ʘ‿ʘ)╯',
        '(´∀`)',
      ],
    };
  },
  computed: {
    dailyKaomoji() {
      return this.dailyKaomojis[new Date().getDay()];
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
    goToRoute(item) {
      this.activeItem = item.name;
      this.$router.push(item.path);
    },
  },
};
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
</style>
