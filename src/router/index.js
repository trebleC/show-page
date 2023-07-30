import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('@/views/Home.vue')
  },
  {
    path: '/Poster',
    name: 'poster',
    component: ()=> import('@/views/Poster/PosterList.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
