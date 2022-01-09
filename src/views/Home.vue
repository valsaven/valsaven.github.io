<template>
  <div class="block-body home">
    <div class="home-item">
      <p class="home-item__text">
        Hi! My name is Val Saven. This is my working alias.
      </p>
      <p class="home-item__text">
        Welcome to my homepage (´• ω •`).
      </p>
      <p class="home-item__text">
        If you want to contact me, please use the ones listed in the contacts menu.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style scoped>
.home-title {
  text-align: center;
}

.home-item__text {
  font-family: 'Lato', sans-serif;
  line-height: 2em;
}
</style>
