import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: 'var(--main-text-color)',
    table: 'var(--body-bg-color)',
  },
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
