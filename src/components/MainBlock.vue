<template>
  <article class="block">
    <header>
      <h2>{{ $route.name }}</h2>
    </header>
    <router-view />
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
