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
  flex: 4;
  padding-left: 14px;
}

.block-header {
  align-items: center;
  border: 2px dashed black;
  display: flex;
  height: 68px;
  justify-content: center;
}

.block-content {
  /*padding: 16px 0 0 20px !important;*/
  padding: 1em;
}
</style>
