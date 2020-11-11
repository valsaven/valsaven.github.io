<template>
  <article class="block">
    <header class="block-header">
      <h2 v-text="`・゜・。. ${$route.name} ・゜・。.`" />
    </header>
    <div class="block-content">
      <router-view />
    </div>
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
}

.block-header {
  align-items: center;
  border: 2px dashed var(--dashed-border-color);
  display: flex;
  height: 68px;
  justify-content: center;
}

.block-content {
  padding: 1em;
}

@media screen and (max-width: 767px) {
  .block {
    width: 100%;
  }
}
</style>
