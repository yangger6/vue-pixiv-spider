import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import spider from '@/components/spider'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spider',
      component: spider
    }
  ]
})
