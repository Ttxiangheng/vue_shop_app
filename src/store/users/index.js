import { reqGetCode,reqGetRegisterCode,reqGetUsers,reqGetUserInfo,reqRemoveUser, } from "@/api"
import {setToken} from'@/untils/token'
const state={
    codes:[],
    userToken:localStorage.getItem('TOKEN'),
    userInfo:[],
    
}
const actions={
    async getCode({commit},phone){
        let result = await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
        }
    },
    async getRegisterCode({commit},data={}){
        let result = await reqGetRegisterCode(data)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async getUsers({commit},userNum={}){
        let result = await reqGetUsers(userNum)
        if(result.code==200){
            commit('GETUSERS',result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async getUserInfo({commit}){
        let result = await reqGetUserInfo()
        if(result.code==200){
            commit('GETUSERINFO',result.data)
        }
    },
    async removeUser({commit}){
        let result = await reqRemoveUser()
        if(result.code==200){
            localStorage.removeItem('TOKEN')
            commit('REMOVEUSER',result.data)
        }
    },
    

}
const mutations={
    GETCODE(state,codes){
        state.codes = codes
    },
    GETUSERS(state,userToken){
        state.userToken = userToken
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    REMOVEUSER(state){
        state.userInfo={},state.userToken={}
    },
    

}
const getters={}
export default{
    state,
    actions,
    mutations,
    getters,
}