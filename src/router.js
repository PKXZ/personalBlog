import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: () => import('./views/mainView.vue'),
      redirect: '/homeView',
      children:[
        {
          path: '/homeView',
          name: 'homeView',
          component: () => import('./views/homeView.vue')
        },{
          path: '/projectView',
          name: 'projectView',
          component: () => import('./views/projectView.vue')
        },{
          path: '/messageView',
          name: 'messageView',
          component: () => import('./views/messageView.vue')
        }
      ]
    },
  ]
})
