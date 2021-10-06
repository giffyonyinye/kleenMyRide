import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App)
library.add(faBars, faEnvelope, faMapMarker, faPhone)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')

