import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSuitcase,
  faGlobeAmericas,
  faClock,
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'flexboxgrid';

library.add(faSuitcase, faGlobeAmericas, faClock, faLongArrowAltLeft);

createApp(App).use(router, FontAwesomeIcon).mount('#app');
