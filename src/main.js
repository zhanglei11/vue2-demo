import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* 申请的百度密钥，可以在百度地图官网申请 */
  ak: '7SHFipbocak8PFgUeGAKColkU7QqucjG'
})
import {BmlMarkerClusterer} from 'vue-baidu-map'
Vue.component('bml-marker-clusterer', BmlMarkerClusterer)

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
//引入中国地图
import 'echarts/map/js/china.js'


// 适配flex
// import '@/utils/flexible.js';
import '@/utils/china.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
