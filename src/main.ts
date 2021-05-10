import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';
import Container from './components/layouts/Container.vue';

library.add(faChevronDown, faFileCode);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('container', Container)
  .use(store)
  .use(router)
  .mount('#app');
