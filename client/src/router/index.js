import { createRouter, createWebHistory } from 'vue-router'
// import {HomeView, AccountView, BlogView, EventView, GearView, MissionView, ResourcesView, SponsorsView, TeamView} from '../views/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    
    },
    {
      path: '/account',
      name: 'account',
      component: () => import("../views/AccountView.vue")
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import("../views/BlogView.vue")
    },
    {
      path: '/events',
      name: 'events',
      component: () => import("../views/EventView.vue")
    },
    {
      path: '/gear',
      name: 'gear',
      component: () => import("../views/GearView.vue")
    },
    {
      path: '/add-new-gear',
      name: 'addNewGear',
      component: () => import("../components/adminPages/gear/AddNewGear.vue")
    },
    {
      path: '/mission',
      name: 'mission',
      component: () => import("../views/MissionView.vue")
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import("../views/ResourcesView.vue")
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import("../views/SponsorsView.vue")
    },
    {
      path: '/team',
      name: 'team',
      component: () => import("../views/TeamView.vue")
    }
  ]
})

export default router
