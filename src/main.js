import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from '../src/router/router'
import store from './vuex/store'
import firebase from 'firebase'


Vue.config.productionTip = false

new Vue({
  router : router,
  firebase,
  store,
  render: h => h(App),
}).$mount('#app')
