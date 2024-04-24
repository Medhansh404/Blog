import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/Blogs/BlogView.vue'
import BlogDetails from '../views/Blogs/BlogDetails.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {    
    path: '/blogs/:page',
    name: 'blogs',
    component: BlogView,
    props: true
    },
    {
      path: '/blogs/:id',
      name: 'blogDetails',
      component: BlogDetails,
      props: true
    },
    {
      path: '/searchResult/:id',
      name: 'search',
      component: SearchView,
      props: true
    }
  ]
})

export default router
