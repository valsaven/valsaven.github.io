<template>
    <nav class="menu">
        <header>
            <h2>Menu</h2>
        </header>
        <ul class="menu-list">
            <li class="grow menu-list-item"
                :class="{ active: isActive(item.name) }"
                v-for="(item, i) in menu" :key="i"
                @click="setActive(item.name)"
            >
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'main-menu',
    data() {
      return {
          activeItem: 'Home',
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
        methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem
      }
    },
  };
</script>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: var(--main-bg-color);
  }

  .menu-list-item::first-letter {
    font-weight: bold;
  }

  /* Flandre Wings */
  .menu-list-item:nth-child(1)::first-letter { color: var(--wings-1-color); }
  .menu-list-item:nth-child(2)::first-letter { color: var(--wings-2-color); }
  .menu-list-item:nth-child(3)::first-letter { color: var(--wings-3-color); }
  .menu-list-item:nth-child(4)::first-letter { color: var(--wings-4-color); }
  .menu-list-item:nth-child(5)::first-letter { color: var(--wings-5-color); }
  .menu-list-item:nth-child(6)::first-letter { color: var(--wings-6-color); }
  .menu-list-item:nth-child(7)::first-letter { color: var(--wings-7-color); }

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
    margin: 0;
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
