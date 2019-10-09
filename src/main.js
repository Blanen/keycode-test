import Vue from 'vue'
import App from './App.vue'
import shortkey from 'vue-shortkey'

Vue.config.productionTip = false

Vue.use(shortkey)

new Vue({
  render: h => h(App),
}).$mount('#app')
