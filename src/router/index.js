import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectionView from '../views/ConnectionView.vue'
import NouveautesView from '../views/NouveautesView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import CataloguesImageView from '../views/CataloguesImageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: CatalogueView
    },
    {
      path: '/nouveautes',
      name: 'nouveautes',
      component: NouveautesView
    },
    
    {
      path: '/connection',
      name: 'connection',
      component: ConnectionView
    },
    {
      path: '/article',
      name: 'article',
      component: CataloguesImageView
    },
    
  ]
})

export default router
