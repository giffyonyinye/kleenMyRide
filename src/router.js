import {createRouter, createWebHistory} from 'vue-router';
import TheHomepage from './components/TheHomepage.vue';
import TheAboutPage from './components/TheAboutPage.vue';
import TheServicesPage from './components/TheServicesPage.vue';
import BookingPage from './components/BookingPage.vue';
import ThePackagePage from './components/ThePackagePage.vue';
import TheContactPage from './components/TheContactPage.vue';
const routes = [
  {path: "/", name: 'home', component: TheHomepage},
  {path: "/about", name: 'about', component: TheAboutPage},
  {path: "/services", name: 'service', component: TheServicesPage},
  {path: "/booking", name: 'booking', component: BookingPage},
  {path: "/package", name: 'package', component: ThePackagePage},
  {path: "/contact", name: 'contact', component: TheContactPage},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;