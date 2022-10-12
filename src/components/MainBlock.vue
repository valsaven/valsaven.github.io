<template>
  <article class="block">
    <header class="block-header">
      <h2 v-text="`・゜・。. ${currentPage} ・゜・。.`" />
    </header>
    <div class="block-content">
      <router-view />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentPage = computed(() => {
  return String(route.name) || '';
});
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
