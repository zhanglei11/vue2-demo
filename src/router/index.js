import Vue from 'vue'
import VueRouter from 'vue-router'
import vueRouter from './vueRouter'
const Routers = [
  ...vueRouter
]
// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: Routers
}

const createRouter = () => new VueRouter(RouterConfig)

Vue.use(VueRouter)
  //Uncaught (in promise) NavigationDuplicated
  //vue-router的更新日志显示 v3.1.0 版本的路由跳转改用了 promise 的方式，针对于路由跳转相同的地址，如果没有捕获到错误，控制台始终会出现上面的错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  // if (originalPush.call(this, location))
    return originalPush.call(this, location).catch(err => err)
}

const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }
export default router