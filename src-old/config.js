import axios from 'axios'
import { Toast } from 'antd-mobile'

// 栏截请求
axios.interceptors.request.use(function (config) {
    Toast.lodaing('加载中',0)
    return config
})

// 栏截相应
axios.interceptors.response.use(function (config) {
    Toast.hide()
    return config
})