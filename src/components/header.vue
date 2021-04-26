<template>
  <div class="header-global">
    <el-menu :default-active="activeIndex" class="el-menu-demo content" mode="horizontal" @select="handleSelect">
      <template v-for="(item,index) in topList">
        <template v-if="item.children.length == 0">
          <el-menu-item :index="item.id" :key="item.id">{{item.name}}</el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="item.id" :key="item.id">
            <template slot="title">{{item.name}}</template>
            <template v-for="(item_1,index_1) in item.children">
              <el-menu-item :index="item_1.id" :key="item_1.id">{{item_1.name}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
    <!-- <el-col class="name-image">
      <img data-v-0ae72425="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA1RjM4NjkyOTMyOTExRUFCMDZBRjAzREU1RDg1N0U3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA1RjM4NjkzOTMyOTExRUFCMDZBRjAzREU1RDg1N0U3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDVGMzg2OTA5MzI5MTFFQUIwNkFGMDNERTVEODU3RTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDVGMzg2OTE5MzI5MTFFQUIwNkFGMDNERTVEODU3RTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eiGW1AAAJVUlEQVR42uxdXWxU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" style="width:44px;height:44px">
      <el-col class="detail">锡商银行贷后预警平台</el-col>
    </el-col> -->
    <div class="user">
      <div class="fl">
        <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="fl">
        <!-- <el-dropdown @command="logOut">
          <span class="el-dropdown-link">
            {{realname}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="1">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      </div>
    </div>
  </div>
</template>
<script>
// import settings from '@/settings'
// import {
//   logout,
//   getSSOUser,
//   sso_menu_list
// } from "@/api/user";
// import { removeToken } from '@/utils/auth'
// import { mapGetters } from 'vuex'
import menus from '@/menus'
export default {
  name:'HEADER',
  props:{
    activeIndex:{
      type:String,
      default:'1'
    }
  },
  data() {
    return {
      title:'项目1',//标题
      // menuTopList:menus['menuTopList'],
      menuInfo:[],

      topList:[
      {
        name: 'vue1',
        id:1,
        path: '',
        children:[]
      },
      {
        name: 'react',
        id:2,
        path: '',
        children:[]
      },
    ]
    }
  },
  methods:{
    handleSelect(key) {
      let self = this
      // if(this.activeIndex == key && key != "plw:rule" ) return
      // this.$store.dispatch('delAllViews', [])
      switch (String(key)) {
        case 'plw:da':
          // self.$router.push('/bigScreen/index')
          break;
        case 'plw:ren':
          //  self.$router.push('/task/index')
          break;
        case 'plw:ls:m':
          //  self.$router.push({
          //   path:'/retail/monitor/preview',
          //   query:{
          //     isShowRetail:2,
          //     productType:2,
          //   }
          // })
          break;
        case 'plw:ls:c':
          // this.$store.dispatch('delAllViews', [])
          // self.$router.push({
          //   path:'/retail/monitor/preview',
          //   query:{
          //     isShowRetail:2,
          //     productType:3,
          //   }
          // })
          break;
        case 'plw:ls:h':
          // this.$store.dispatch('delAllViews', [])
          // self.$router.push({
          //   path:'/house/house_overview',
          //   query:{
          //     isShowRetail:2,
          //   }
          // })
          break;
        case 'plw:ls:cb':
          this.$message({
            message: '暂时未做',
            type: 'success',
            duration:1000
          });
          break;
        case 'plw:sc:dj':
          // self.$router.push({
          //   path:'/supplyChain/dajing/djoverview',
          //   query:{
          //     isShowRetail:2,
          //   }
          // })
          break;
        case 'plw:dg':
          // self.$router.push('/corporateCredit/index')
          break;
        case 'plw:rule':
          // self.$router.push('/warning_rules/index')
          break;
      }
    },

    // //退出
    // logOut(){
    //   let self = this
    //   logout().then((res) => {
    //     if (res.code == 0) {
    //       removeToken()
    //       self.$store.commit('user/SET_TOKEN','')
    //       self.$message({
    //         message: '退出成功',
    //         type: 'success',
    //         duration:1000
    //       });
    //       self.$router.push('/login')
    //       self.$store.dispatch('delAllViews', [])
    //     } else {
    //       self.$message({
    //         message: !!!res.userMessage?'服务异常':res.userMessage,
    //         type: 'error',
    //         duration:1000
    //       });
    //     }
    //   }).catch(() =>{
    //   });
    // },
  
    //获取用户相关信息
    // async getUserInfo(){
    //   let self = this
    //   getSSOUser().then((res) => {
    //     if (res.code === 0) {
    //       self.$store.commit('user/SET_REALNAME',res.data.realname)
    //       self.$store.commit('user/SET_USERNAME',res.data.username)
    //       self.$store.commit('user/SET_SEX',res.data.sex)
    //       self.$store.commit('user/SET_USERID',res.data.userId)
    //     }
    //   });
    // },

    // //获取导航菜单信息
    // async getMenuInfo(){
    //   let self = this
    //   sso_menu_list().then(res => {
    //     if (res.code == 0) {
    //       this.setPowerButton(res.result)
    //       let list = [
    //         {
    //           name: '大屏展示',
    //           permissionValue:'plw:da',
    //           path: '/bigScreen/index',
    //           children:[]
    //         },
    //         {
    //           name: '任务管理',
    //           permissionValue:'plw:ren',
    //           path: '/task/index',
    //           children:[]
    //         },
    //       ]
    //       self.menuInfo.forEach(ele => {
    //         if(ele.name == '预警规则'){ //预警规则 特殊处理
    //           let objArr = self.getInfo(ele.permissionValue)
    //           let obj = {
    //             name: ele.name,
    //             permissionValue:ele.permissionValue,
    //             path: objArr,
    //             children:[]
    //           }
    //           list.push(obj)
    //         }else{
    //           let objArr = self.getInfo(ele.permissionValue)
    //           let obj = {
    //             name: ele.name,
    //             permissionValue:ele.permissionValue,
    //             path: objArr,
    //             children:[]
    //           }
    //           if(!(ele.children == null || ele.children.length == 0)){
    //             ele.children.forEach(ele_1 => {
    //               let objArr_2 = self.getInfo(ele_1.permissionValue)
    //               let obj_2 =   {
    //                 name: ele_1.name,
    //                 permissionValue:ele_1.permissionValue,
    //                 path: objArr_2,
    //                 children:[]
    //               }
    //               obj.children.push(obj_2)
    //             })
    //           }
    //           list.push(obj)
    //         }
    //       })
    //       // console.log(self.activeIndex)
    //       self.$store.commit('menus/set_topList',list)
    //       self.$emit('setAsideInfo')
    //     }
    //   });
    // },

    // //设置权限按钮
    // setPowerButton(result){
    //   let self = this
    //   result.forEach(ele => {
    //     if(ele.name == '贷后预警平台'){
    //       self.menuInfo = ele.children
    //       self.$store.commit('menus/set_menuInfo',self.menuInfo)
    //     }
    //   })
    // },

    // getInfo(permissionValue){
    //   let self = this
    //   let tem 
    //   self.menuTopList.forEach(ele => {
    //     if(ele.permissionValue == permissionValue){
    //       tem = ele.path
    //     }
    //   })
    //   return tem
    // },
  },

  created() {
    // this.getMenuInfo()
    // this.getUserInfo()
  },
  computed: {
    // ...mapGetters(['realname','topList'])
  },
  mounted() {

  },
}
</script>