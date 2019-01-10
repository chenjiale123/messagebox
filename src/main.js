// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


// router.beforeEach((to, from, next) => {
//   let token = $cookies.get('username');
//   console.log(token)
//   //如果有token的话说明你已经登录,让你正常登录
//   if (token) {
//     next();
//   } else {
//     //如果没有登录你访问的不是login就让你强制跳转到login页面
//     if (to.path !== "/login") {
//       next({ path: "/login" }||{ path: "/register" });
//     } else {
//       next();
//     }
//   }
// });

Vue.use(ElementUI);
import axios from 'axios'
Vue.prototype.axios= axios
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
