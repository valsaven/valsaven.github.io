import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify, {
  theme: {
    primary: '#fffffa',
    table: '#525252',
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
