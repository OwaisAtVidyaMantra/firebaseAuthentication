import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/HelloWorld.vue'
import SignUp from '@/components/SignUp.vue'
import GoogleAuth from '@/components/GoogleAuth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: Login
  },
  {
    path: '/google',
    name: 'Gogle',
    component: GoogleAuth
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  }
]

const router = new VueRouter({
  routes
})

export default router
