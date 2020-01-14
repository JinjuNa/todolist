import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import List from '../components/List.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      { path : '/add', component : Header},
      { path: '/link', component : List}
    ]
  })

  export default router