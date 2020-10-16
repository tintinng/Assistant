import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/homeIndex'
import Todo from '../views/todo/todoIndex'
import Sites from '../views/sites/sitesIndex'
import About from '../views/about/aboutIndex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/sites',
    name: 'Sites',
    component: Sites
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
