import { createRouter, createWebHistory } from 'vue-router'
import theGearFullItem from '../components/gear/theGearFullItem.vue'
// import {HomeView, AccountView, BlogView, EventView, GearView, MissionView, ResourcesView, SponsorsView, TeamView} from '../views/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  gearItem: {
    template:'<theGearFullItem></theGearFullItem>',
    props:['id']
  },
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
      path: '/add-new-gear',
      name: 'addNewGear',
      component: () => import("../components/adminPages/gear/AddNewGear.vue")
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
      path: '/gear-accessories',
      name: 'gearAccessories',
      component: () => import("../components/gear/gearAccessories.vue")
    },
    {

      path: '/gear/:id',
      name: 'gearFullItem',
      props: true,
      component: () => import("../components/gear/theGearFullItem.vue")

    },
    {
      path: '/gear-men',
      name: 'gearMen',
      component: () => import("../components/gear/gearMen.vue")
    },
    {
      path: '/gear-women',
      name: 'gearWomen',
      component: () => import("../components/gear/gearWomen.vue")
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
    },

  ]
})

export default router
