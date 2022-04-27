import { reqCategoryList,reqGetBannerList,reqGetFloorList } from "@/api"
const state = {
    categoryList:[],
    getBannerList:[],
    floorList:[]
};
const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if(result.code==200){
            commit("CATEGORYLISt",result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList()
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloorList()
        if(result.code==200){
            commit("GETFLOORLIST",result.data)
        }
    }
};
const mutations = {
    CATEGORYLISt(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,getBannerList){
        state.getBannerList = getBannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}; 
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}