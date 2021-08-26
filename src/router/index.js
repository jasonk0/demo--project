import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Catogory = () => import('../views/catogory/Catogory.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Details = () => import('../views/details/Details.vue')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/catogory',
    component: Catogory
  },
  {
    path: '/details/:id',
    component: Details
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
