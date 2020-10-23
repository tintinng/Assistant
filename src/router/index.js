import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/homeIndex'
import Todo from '@/views/todo/todoIndex'
import Sites from '@/views/sites/sitesIndex'
import About from '@/views/about/aboutIndex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    redirect: '/todo/todoList',
    name: 'Todo',
    component: Todo,
    children: [
      {
        path: 'todoList',
        name: 'TodoList',
        component: () => import('../views/todo/todoList/todoList'),
        meta: { activeMenu: '/todo' }
      },
      {
        path: 'learningSchedule',
        name: 'LearningSchedule',
        component: () => import('../views/todo/learningSchedule/learningSchedule'),
        meta: { activeMenu: '/todo' }
      }
    ]
  },
  {
    path: '/sites',
    name: 'Sites',
    redirect: '/sites/resourceAndDocs',
    component: Sites,
    children: [
      {
        path: 'resourceAndDocs',
        name: 'ResourceAndDocs',
        component: () => import('../views/sites/resourceAndDocs/index'),
        meta: { activeMenu: '/sites' }
      },
      {
        path: 'devCommunity',
        name: 'DevCommunity',
        component: () => import('../views/sites/devCommunity/index'),
        meta: { activeMenu: '/sites' }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // 其他页面全部重定向到404
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  routes
})

export default router
