import Vue from 'vue'
import VueRouter from 'vue-router'
import PaymentRequest from '../components/PaymentRequest.vue'
import Success from '../components/Success.vue'
import Failed from '../components/Failed.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'payment-request',
    component: PaymentRequest
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  }
  ,
  {
    path: '/failed',
    name:'failed',
    component:Failed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
