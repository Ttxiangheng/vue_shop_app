import { reqShopCartList } from "@/api"
import { reqDeleteShopCarList } from "@/api"
import { reqCheckedShopCar } from "@/api"
const state ={
    shopCarList:[],
}
const actions={
    async getShopCarList({commit}){
        let result = await reqShopCartList()
        if(result.code==200){
            commit('GETSHOPCARLIST',result.data)
        }
    },
    async deleteShopCar({commit},skuId){
        let result = await reqDeleteShopCarList(skuId)
    },
    async checkedShopCar({commit},{skuId,isChecked}){
        let result = await reqCheckedShopCar(skuId,isChecked)
    }
}
const mutations={
    GETSHOPCARLIST(state,shopCarList){
        state.shopCarList=shopCarList
    },
}
const getters ={
    cartInfoList(state){
        return state.shopCarList[0].cartInfoList
    }
}
export default{
    state,
    actions,
    mutations,
    getters,
}