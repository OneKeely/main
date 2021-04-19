import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../Home.vue')
  },
  {
    path:'/new-list',
    name:'new-list',
    component:() => import ('../components/home/new-list.vue')
  },
  {
    path:'/new-list-details/:newsid',
    name:'new-list-details',
    component:() =>import ('../components/details/news-details.vue')
  },
  {
    path:'/photo-list',
    name:'photo-list',
    component:() => import ('../components/home/photo-list.vue')
  },
  {
    path:'/goods-list',
    name:'goods-list',
    component:() => import ('../components/home/goods-list.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
