<template>
  <ul class="menu-list">
    <router-link
      v-for="(item, i) in menu"
      :key="i"
      v-slot="{ href, navigate, isActive }"
      :to="item.path"
      custom
    >
      <li
        :class="[
          {
            active: isActive
          },
          `menu-item-${i + 1}`
        ]"
        class="grow menu-item"
      >
        <div
          :class="[`obj-${i}`]"
          class="menu-item-icon"
        >
          <!--          @click="goToRoute(item)"-->
          <i
            :class="item.icon"
            class="menu-item-icon__icon"
          />
        </div>
        <a
          :href="href"
          class="menu-item-title"
          @click="navigate"
        >
          {{ item.name }}
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.menu-list {
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: 8px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  margin: 1em 0;
  padding: 0 0 0 16px;
}

.menu-item {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.menu-item-icon {
  align-items: center;
  color: #e1e1e1 !important;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
}

.menu-item-icon__icon {
  font-size: 30px;
}

.menu-item-title {
  font-size: 18px;
  padding-left: 8px;
}

.menu-item.active .menu-item-icon {
  color: #000 !important;
}

/* Flandre Wings */
.menu-item-1 .menu-item-title::first-letter {
  color: var(--wings-1) !important;
  font-weight: bold;
}

.menu-item-2 .menu-item-title::first-letter {
  color: var(--wings-2) !important;
  font-weight: bold;
}

.menu-item-3 .menu-item-title::first-letter {
  color: var(--wings-3) !important;
  font-weight: bold;
}

.menu-item-4 .menu-item-title::first-letter {
  color: var(--wings-4) !important;
  font-weight: bold;
}

.menu-item-5 .menu-item-title::first-letter {
  color: var(--wings-5) !important;
  font-weight: bold;
}

.menu-item-6 .menu-item-title::first-letter {
  color: var(--wings-6) !important;
  font-weight: bold;
}

.menu-item-7 .menu-item-title::first-letter {
  color: var(--wings-7) !important;
  font-weight: bold;
}

.menu-item-8 .menu-item-title::first-letter {
  color: var(--wings-8) !important;
  font-weight: bold;
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
