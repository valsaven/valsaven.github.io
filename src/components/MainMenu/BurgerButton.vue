<template>
  <div id="burger">
    <button
      class="pointer-events-auto
        relative z-10 block h-8 w-8
        cursor-pointer space-y-2
        rounded-none border-0
        bg-transparent transition-transform
        duration-300"
      :class="{ '-rotate-90': isSidebarOpen }"
      title="Menu"
      type="button"
    >
      <div class="h-0.5 w-8 bg-gray-600" />
      <div class="h-0.5 w-8 bg-gray-600" />
      <div class="h-0.5 w-8 bg-gray-600" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
