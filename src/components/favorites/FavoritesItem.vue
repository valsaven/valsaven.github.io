<template>
  <p class="dark:text-vs-main-text-color-dark">
    Temporary: {{ route.name }}
  </p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
