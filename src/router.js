import {createRouter, createWebHistory} from "vue-router";
import TheHomepage from './components/TheHomepage.vue';
import TheAboutPage from './components/TheAboutPage.vue'
const routes = [
  {path: "/", name: 'home',  component: TheHomepage},
  {path: "/about", name: 'about', component: TheAboutPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;