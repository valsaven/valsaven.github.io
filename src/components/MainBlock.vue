<template>
    <article class="block">
        <header>
            <h2>{{$route.name}}</h2>
        </header>
        <router-view></router-view>
    </article>
</template>


<script>
  export default {
    name: 'main-block',
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped>
  .block {
    display: flex;
    flex-direction: column;
    flex: 4;
  }

  .block > header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
  }
</style>
