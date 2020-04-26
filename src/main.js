// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AMap from 'vue-amap';
Vue.use(AMap);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
  // 初始化vue-amap
  AMap.initAMapApiLoader({
    // 高德key
    key: 'b08394d35959d530741a19883ef34ca7',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Geolocation']
  });