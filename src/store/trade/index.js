import { reqGetOrderInfo,reqGetUserAddressList } from "@/api"
const state={
    userAddressList:[],
    orderInfo:[],
}
const actions={
    async getUserAddressList({commit}){
        let result = await reqGetUserAddressList()
        if(result.code==200){
            commit('GETUSERADDRESSLIST',result.data)
        }
    },
    async getOrderInfo({commit}){
        let result = await reqGetOrderInfo()
        if(result.code==200){
            commit('GETORDERINFO',result.data)
        }
    }
}
const mutations={
    GETUSERADDRESSLIST(state,userAddressList){
        state.userAddressList=userAddressList
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const getters={}
export default{
    state,
    actions,
    mutations,
    getters,
}