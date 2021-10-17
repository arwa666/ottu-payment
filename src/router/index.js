import Vue from 'vue'
import VueRouter from 'vue-router'
import PaymentRequest from '../components/PaymentRequest.vue'
import Success from '../components/Success.vue'
import Failed from '../components/Failed.vue'
import PaymentRequestOne from '../components/PaymentRequestOne.vue'
import PaymentRequestTwo from '../components/PaymentRequestTwo.vue'
import PaymentRequestThree from '../components/PaymentRequestThree.vue'
import PaymentRequestFour from '../components/PaymentRequestFour.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'payment-request',
    component: PaymentRequest
  },
  {
    path: '/payment-request-one',
    name: 'payment-request-one',
    component: PaymentRequestOne,
  },
  {
    path: '/payment-request-two',
    name: 'payment-request-two',
    component: PaymentRequestTwo,
  },
  {
    path: '/payment-request-three',
    name: 'payment-request-three',
    component: PaymentRequestThree,
  },
  {
    path: '/payment-request-four',
    name: 'payment-request-four',
    component: PaymentRequestFour,
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
