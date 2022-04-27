import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
import routes from './router';
import store from '@/store'
const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
//路由守卫
router.beforeEach(async(to, from, next) => {
    if (store.state.users.userToken) {
        if (to.path == '/login'||to.path =='register') {
            console.log(1111)
            next()
        } else {
            if(store.state.users.userInfo.name){
                next()
                console.log(2222)
            }else{
                try{
                    await store.dispatch('getUserInfo')
                    console.log(3333)
                    next()
                }catch(error){
                    await store.dispatch('removeUser')
                    next('/login')
                }
            }
        }
    } else {
        next()
    }

})
export default router
