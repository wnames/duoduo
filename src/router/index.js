import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/Login.vue'
import dong from '../components/Dong.vue'
import me from '../components/Me.vue'
import movie from '../components/Movie.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/dong', component: dong },
  { path: '/me', component: me },
  { path: '/movie', component: movie }
]

const router = new VueRouter({
  routes
})

export default router
