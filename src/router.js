import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'mainView',
      component: () => import('./views/mainView.vue'),
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
=======
      name: 'homeView',
      component: () => import('./views/homeView.vue')
    }
>>>>>>> 71306c5be7c6f18e5057760e21b9ee1ecf016b9d
  ]
})
