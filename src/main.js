import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import '@/mock/mockServer'
import "swiper/css/swiper.css"
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
import { MessageBox } from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus=this

  }
}).$mount('#app')
