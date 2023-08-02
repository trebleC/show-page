import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/views/Index.vue')
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
