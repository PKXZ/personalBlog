import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import antDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(antDesignVue);

import echarts from 'echarts'
import 'echarts/theme/macarons.js'
Vue.prototype.$echarts = echarts;
import axios from './config/axiosConfig'
import baseUrl from './config/api';
Vue.prototype.api = baseUrl;
Vue.use(axios, axios)
Vue.prototype.axios = axios;

import './assets/font/iconfont.css'
import './assets/css/common.css'
//瀑布流
// import waterfall from 'vue-waterfall2'
// Vue.use(waterfall)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
