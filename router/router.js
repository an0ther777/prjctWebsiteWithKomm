import Main from '@/Main.vue';
import About from '@/About.vue';
import Projects from '@/Projects.vue';
import Store from '@/Store.vue';
import {createRouter, createWebHistory} from 'vue-router';


const routes = [
  {
      path: '/',
      component: Main,
  },
  {
      path: '/about',
      component: About,
  },
  {
      path: '/projects',
      component: Projects,
  },
  {
      path: '/store',
      component: Store,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router