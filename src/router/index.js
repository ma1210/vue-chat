import Vue from 'vue'
import VueRouter from 'vue-router'
import UserListView from '../views/UserListView.vue'
import ChartBoardView from '../views/ChartBoardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'user-list',
    component: UserListView
  },
  {
    path: '/chat',
    name: 'chat-board',
    component: ChartBoardView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
