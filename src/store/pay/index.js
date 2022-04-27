import { reqGetPayInfo } from "@/api"
const state={
    payInfo:[]
}
const actions={
    async getPayInfo({commit},orderId){
        let result = await reqGetPayInfo(orderId)
        console.log(result)
        if (result.code==200){
            commit('GETPAYINFO',result.data)
        }
    }
}
const mutations={
    GETPAYINFO(state,payInfo){
        state.payInfo = payInfo
    }
}
const getters={}
export default{
    state,
    actions,
    mutations,
    getters
}