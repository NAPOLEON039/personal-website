import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(VueTypedJs);

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
