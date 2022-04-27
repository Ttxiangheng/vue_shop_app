import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
export default[
    {
        path:"/Home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/login",
        component:Login,
        meta:{show:false},
        name:'login'
    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}
    },
    {
        path: "/search/:keyword?",
        component:Search,
        meta:{show:true},
        name:'search'
        
    },
    {
        path:"/detail/:skuid",
        component:Detail,
        name:'detail',
        meta:{show:false}
    },
    {
        path:"/addcartsuccess",
        component:AddCartSuccess,
    },
    {
        path:"/shopcart",
        component:ShopCart,
        name:'shopcart'
    },
    {
        path:"/trade",
        component:Trade,
        name:'trade'
    },
    {
        path:"/pay",
        component:Pay,
        name:'pay'
    },
    {
        path:"/*",
        redirect:"/Home"
    }
]