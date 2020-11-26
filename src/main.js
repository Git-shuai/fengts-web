import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图
import Animated from 'animate.css'
// import style
import 'swiper/swiper-bundle.css'
//引入icon图标库
import "./assets/icon/iconfont.css";
//路由守卫
import "./router/premit";
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios);
Vue.use(Animated);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
