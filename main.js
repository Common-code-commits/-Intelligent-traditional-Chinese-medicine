import App from './App'
import tabbar from 'pages/tabbar.vue'
// #ifndef VUE3
import Vue from 'vue'
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.component('tabbar',tabbar)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

// 引入全局uview
import uView from 'uview-ui';
Vue.use(uView);

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif