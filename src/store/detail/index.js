import {reqGetDetailInfo} from '@/api'
import { reqAddShoppingCar } from '@/api'
import {getUUID} from '@/untils/uuid_token'
const state={
    detailInfo:[],
    uuid_token:getUUID()
}
const actions ={ 
    async getDetailInfo({commit},skuId){
        let result = await reqGetDetailInfo(skuId)
        if(result.code==200){
            commit('GETDETAILINFO',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'))
        }
    },
    async addShoppingCar({commit},{skuId,skuNum}){
        let result = await reqAddShoppingCar(skuId,skuNum)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'))
        }
        
    }
}
const mutations={
    GETDETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo
    },
}
const getters ={
    categoryView(state){
        return state.detailInfo.categoryView||{}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo||[{}]
    },
    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList||[]
    }
}
export default{
    state,
    actions,
    mutations,
    getters
}