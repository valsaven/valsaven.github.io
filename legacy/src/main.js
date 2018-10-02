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

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
