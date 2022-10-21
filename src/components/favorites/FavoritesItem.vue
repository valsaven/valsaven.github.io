<template>
  <p>Temporary: {{ route.name }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
