import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken,removeToken} from '@/utils/auth'
import router from '@/router'
// 创建一个axios实例
const service = axios.create({
  baseURL: '/plw', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})
let blodURL = [] //导出表格

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['token'] = getToken()
    if(blodURL.includes(config.url)){
      config.responseType = 'blob'
    }
    return config
  },
  error => {
    // 请求错误时做些事
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use( response => {
    const res = response.data
    if ((res.code !== 0 && res.code != undefined)) {
      console.log('登录失败');
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      removeToken()
      router.push({name: 'login'}) 
      Message.closeAll()
      if (res.msg.indexOf('会话已过期，请刷新浏览器重新进行登录') > -1) {
        Message({
          message: res.msg,
          type: 'error',
          duration: 3 * 1000
        })
        return res
      }else{
        return Promise.reject(new Error(res.msg || 'Error'))
      }
    } else {
      return res
    }
  },
  error => {
    if (error.message.indexOf('Request failed with status code 401') > -1) {
      error.message = '登录过期，请重新登录'
      router.push({
        name: 'login'
      })
      // 为了控制 登录页面只显示一个$message（登录过期，请重新登录）
      Message.closeAll()
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
