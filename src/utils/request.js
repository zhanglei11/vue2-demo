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
let blodURL = [

] //导出表格

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
    // console.log(res.code !== 0 && res.code != undefined);
    // console.log("------------");
    // console.log(res.returnCode);
    // console.log(res.returnCode != '200' && res.returnCode != undefined);
    // if ((res.code !== 0 && res.code != undefined) || (res.returnCode != '200' && res.returnCode != undefined) ) {
    if ((res.code !== 0 && res.code != undefined)) {
      console.log('登录失败');
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      removeToken()
      // location.reload()
      Message.closeAll()
      setTimeout(() => {
        router.push({
          name: 'login'
        })    
      }, 1500);
      return Promise.reject(new Error(res.msg || 'Error'))
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
    // if (error.message.indexOf('Request failed with status code 500') > -1) {
    //   error.message = '登录过期，请重新登录'
    //   router.push({
    //     name: 'login'
    //   })
    //   // 为了控制 登录页面只显示一个$message（登录过期，请重新登录）
    //   Message.closeAll()
    // }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
