import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import home from './home'
import search from './search';
import detail from './detail';
import shopcartlist from './shopcartlist';
import users from './users';
import trade from './trade'
import pay from './pay'
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcartlist,
        users,
        trade,
        pay,
    }
})
