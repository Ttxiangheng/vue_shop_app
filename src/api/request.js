import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,
})
//请求拦截器，在发请求前加东西
requests.interceptors.request.use((config) => {
    //把uuid加到请求头上，
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //把token加到请求头上
    if(store.state.users.userToken){
        config.headers.token = store.state.users.userToken
    }
    nprogress.start()
    return config;
})
//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data;
}), (error) => {
    return Promise.reject(new Error('faile'))
}

export default requests