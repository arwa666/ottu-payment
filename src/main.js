// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

/******************ORIGINAL********************** */
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
export default {
 
  components: {
  }
}