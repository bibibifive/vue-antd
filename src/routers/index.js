import { createRouter, createWebHashHistory } from 'vue-router'
import pageVue from '@/views/page.vue'
import todolistVue from '@/views/todolist.vue'
import homeVue from '@/views/home.vue'

// 存放固定的路由
const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/index.vue'),
  // },
  {
    path: '/',
    component: homeVue,
    redirect: '/page',
  },
  {
    path: '/page',
    component: pageVue,
  },
  {
    path: '/todolist',
    component: todolistVue,
  },
  {
    path: '/:w*',
    component: () => import('@/views/noFound.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
