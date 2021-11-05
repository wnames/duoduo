import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import './plugins/element.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
