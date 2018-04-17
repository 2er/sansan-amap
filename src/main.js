// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAMap from 'vue-amap'
import { Header, Popup } from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAMap)
Vue.component(Header.name, Header)
Vue.component(Popup.name, Popup)

VueAMap.initAMapApiLoader({
  key: '651325583e67b376e78cba39f1d85f36',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
