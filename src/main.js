import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

//导入mint-ui
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css'
// //将MintUI安装到vue项目中去
// Vue.use(MintUI)
//按需导入mint-ui组件
import { Button} from 'mint-ui'
//使用Vue.component注册按钮组件
 Vue.component('mybtn',Button)

// 导入 app 组件
import app from './App.vue'

// 导入 自定义路由模块
import router from './router.js'

import './lib/mui/css'

var vm = new Vue({
  el: '#app',
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  router // 4. 将路由对象挂载到 vm 上
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；