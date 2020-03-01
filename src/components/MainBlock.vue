<template>
  <article class="block">
    <header>
      <h2 v-text="`/* ${$route.name} */`" />
    </header>
    <v-content>
      <router-view />
    </v-content>
  </article>
</template>

<script>
export default {
  name: 'MainBlock',
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  flex: 4;
}

.block > header {
  align-items: center;
  display: flex;
  height: 68px;
  justify-content: center;
}

.block-body {
  background-color: var(--body-bg-color);
}
</style>
