<template>
  <nav class="menu">
    <header>
      <h2>Menu</h2>
    </header>
    <ul class="menu-list">
      <li
        v-for="(item, i) in menu"
        :key="i"
        :class="{ active: isActive(item.name) }"
        class="grow menu-list-item"
        @click="setActive(item.name)"
      >
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      activeItem: this.$route.name,
      menu: [
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/programming',
          name: 'Programming',
        },
        {
          path: '/games',
          name: 'Games',
        },
        {
          path: '/anime',
          name: 'Anime',
        },
        {
          path: '/movies',
          name: 'Movies',
        },
        {
          path: '/books',
          name: 'Books',
        },
        {
          path: '/photography',
          name: 'Photography',
        },
        {
          path: '/contacts',
          name: 'Contacts',
        },
      ],
    };
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
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style lang="scss" scoped>
$main-text-color: #fffffa;
$main-bg-color: #222;
$head-bg-color: #41b883;
$body-bg-color: #525252;
$wings-1-color: #45ccca;
$wings-2-color: #8fd67a;
$wings-3-color: #e5d59a;
$wings-4-color: #e7966a;
$wings-5-color: #ed5589;
$wings-6-color: #b565c6;
$wings-7-color: #3366ff;
$wings-8-color: #7392ec;

.menu {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: $main-bg-color;
}

.menu > header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
}

.menu-list-item::first-letter {
  font-weight: bold;
}

/* Flandre Wings */
.menu-list-item:nth-child(1)::first-letter { color: $wings-1-color; }
.menu-list-item:nth-child(2)::first-letter { color: $wings-2-color; }
.menu-list-item:nth-child(3)::first-letter { color: $wings-3-color; }
.menu-list-item:nth-child(4)::first-letter { color: $wings-4-color; }
.menu-list-item:nth-child(5)::first-letter { color: $wings-5-color; }
.menu-list-item:nth-child(6)::first-letter { color: $wings-6-color; }
.menu-list-item:nth-child(7)::first-letter { color: $wings-7-color; }
.menu-list-item:nth-child(8)::first-letter { color: $wings-8-color; }

/* Hover animation  */
.grow {
  transition: all .2s ease-in-out;
}

.active,
.grow:hover {
  transform: scale(1.2);
}

.menu-list {
  list-style: none;
  margin: 0 0 20px 0;
  padding: 0 20px;
}

.menu-list-item {
  font-size: 48px;
  height: 60px;
}

.menu-list-item > a {
  padding-left: 14px;
  font-size: 24px;
}
</style>
