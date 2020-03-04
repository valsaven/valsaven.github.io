<template>
  <article class="block">
    <header class="block-header">
      <h2 v-text="`・゜・。. ${$route.name} ・゜・。.`" />
    </header>
    <v-content class="block-content">
      <router-view />
    </v-content>
  </article>
</template>

<script>
export default {
  name: 'MainBlock',
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  flex: 4;
  padding-left: 14px;

  &-header {
    align-items: center;
    border: 2px dashed black;
    display: flex;
    height: 68px;
    justify-content: center;
  }

  &-content {
    padding: 16px 0 0 20px !important;
  }
}
</style>
