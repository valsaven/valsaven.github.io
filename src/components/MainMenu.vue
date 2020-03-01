<template>
  <nav class="menu">
    <header class="menu-header">
      <h2 v-text="'<!-- Menu -->'" />
    </header>
    <ul class="menu-list">
      <li
        v-for="(item, i) in menu"
        :key="i"
        :class="[
          {
            active: isActive(item.name)
          },
          `menu-item-${i + 1}`
        ]"
        class="grow menu-item"
      >
        <v-btn
          class="ma-2 menu-item-icon"
          tile
          icon
          :class="[`obj-${i}`]"
          @click="goToRoute(item)"
        >
          <v-icon>fas fa-square-full</v-icon>
        </v-btn>

        <router-link
          :to="item.path"
          class="menu-item-title"
        >
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
    goToRoute(item) {
      this.activeItem = item.name;
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_vars.scss';

.menu {
  display: flex;
  flex-direction: column;
  flex: 1;

  &-header {
    align-items: center;
    display: flex;
    height: 68px;
    justify-content: center;
  }

  &-list {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }

  &-item {
    align-items: center;
    display: flex;
    justify-content: center;

    &-icon {
      border: 1px solid #000;
      color: #e1e1e1 !important;
    }

    &-title {
      font-size: 18px;
      padding-left: 8px;
    }

    &.active {
      .menu-item-icon {
        color: #000 !important;
      }
    }
  }
}

/* Flandre Wings */
$colors:
  $wings-1-color,
  $wings-2-color,
  $wings-3-color,
  $wings-4-color,
  $wings-5-color,
  $wings-6-color,
  $wings-7-color,
  $wings-8-color;

@for $i from 1 through length($colors) {
  .menu-item-#{$i} .menu-item-title::first-letter {
    color: rgba(nth($colors, $i), 1) !important;
    font-weight: bold;
  }
}

/* Hover animation  */
.grow {
  transition: all 0.2s ease-in-out;
}

.active,
.grow:hover {
  transform: scale(1.2);
}
</style>
