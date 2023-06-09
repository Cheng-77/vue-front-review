import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* 引入 ElementUI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//重置样式 npm 引入 npm install --save normalize.css
import 'normalize.css/normalize.css'
Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
