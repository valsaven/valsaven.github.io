<template>
  <div id="app">
    <header>
      <h1>
        <a href="/" title="Val Saven. Software Developer">Val Saven</a>
      </h1>
      <h2>Software Developer</h2>
    </header>
      <div class="wrapper">
        <!-- Menu -->
        <nav>
          <header>
            <h2>Menu</h2>
          </header>
          <ul>
            <li class="grow" v-for="(item, i) in menu" :key=i>
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
        </nav>
        <!-- Main block -->
        <article>
          <header>
            <h2>{{$route.name}}</h2>
          </header>
          <router-view></router-view>
        </article>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
     return {
        menu: [
          {
            path: '/',
            name: 'Home',
          },
          {
            path: '/programming',
            name: 'Programming',
          },
          {
            path: '/anime',
            name: 'Anime',
          },
          {
            path: '/movies',
            name: 'Movies',
          },
          {
            path: '/books',
            name: 'Books',
          },
          {
            path: '/photography',
            name: 'Photography',
          },
          {
            path: '/contacts',
            name: 'Contacts',
          },
        ],
     }
    },
  };
</script>

<style lang="css">
  @import './assets/style/App.css';
</style>
