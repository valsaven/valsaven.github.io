<template>
  <v-app
    id="app"
    dark
  >
    <header class="header">
      <h1 class="header__name">
        <a
          href="/"
          title="Val Saven. Software Developer"
          v-text="'Val Saven'"
        />
      </h1>
      <h2 class="header__role">
        Software Developer
      </h2>
    </header>
    <div class="body">
      <!-- Menu -->
      <main-menu />
      <!-- Main block -->
      <main-block />
    </div>
  </v-app>
</template>

<script lang="ts">
// <v-app>
//     <v-app-bar
//       app
//       color="primary"
//       dark
//     >
//       <div class="d-flex align-center">
//         <v-img
//           alt="Vuetify Logo"
//           class="shrink mr-2"
//           contain
//           src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
//           transition="scale-transition"
//           width="40"
//         />

//         <v-img
//           alt="Vuetify Name"
//           class="shrink mt-1 hidden-sm-and-down"
//           contain
//           min-width="100"
//           src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
//           width="100"
//         />
//       </div>

//       <v-spacer />

//       <v-btn
//         href="https://github.com/vuetifyjs/vuetify/releases/latest"
//         target="_blank"
//         text
//       >
//         <span class="mr-2">Latest Release</span>
//         <v-icon>mdi-open-in-new</v-icon>
//       </v-btn>
//     </v-app-bar>

//     <v-content>
//       <router-view />
//     </v-content>
//   </v-app>
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';
import MainBlock from '@/components/MainBlock.vue';

@Component({
  components: {
    MainMenu,
    MainBlock,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import './assets/_vars.scss';

html {
  font-size: 16px;
}

body {
  background: $main-bg-color;
  font-family: sans-serif;
}

h1,
h2 {
  text-align: center;
}

a {
  color: #fffffa !important;
  text-decoration: none;
}

#app {
  color: #fffffa;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto;
  background-color: $main-bg-color;
}

.header__name {
  font-family: 'Poiret One', sans-serif;
  font-size: 48px;
  margin: 20px 0;
}

.body {
  display: flex;
  background-color: $body-bg-color;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
}

.menu > header,
.block > header {
  background-color: #41b883;
}

@media only screen and (max-device-width: 568px) {
  #app {
    max-width: 100%;
  }
}
</style>
