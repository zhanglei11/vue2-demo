<template>
  <el-container class="home-global">
    <!-- 侧边栏 -->
    <comHeader activeIndex="1"></comHeader>
    <el-aside width="214px" style="margin-top:80px">    
      <el-menu
        unique-opened
        :collapse="false"
        :collapse-transition="false"
        router
        :default-active="activePath"
        text-color="#9e9fa4"
        active-text-color="#FFF"
      >
        <!-- 一级菜单  -->
        <template v-for="item in asideList">
          <template v-if="item.children.length > 0">
            <el-submenu :index="item.permissionValue" :key="item.id">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <i :class="item.icon"></i>
                <span >{{ item.name }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                v-for="subItem in item.children"
                :key="subItem.id"
                :index="subItem.path"
                :class="subItem.urlName.includes($route.name)?'is-active':''"
                @click="saveNavState(subItem)"
              >
                <!-- 导航开启路由模式：将index值作为导航路由-->
                <!-- 二级菜单的模板区域 -->
                <template slot="title">
                  <span>{{ subItem.name }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item 
              :key="item.id"
              :index="item.path"
              :class="item.urlName.includes($route.name)?'is-active':''"
              @click="saveNavState(item)">
                <i :class="item.icon"></i>
                <span >{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <!-- 内容主体 -->
    <el-main >
      <tagsView></tagsView>
      <div class="home-main" :style="{height:asideHeight+'px'}">
        <transition name="fade-transform" mode="out-in">
          <el-scrollbar style="height:100%" ref="appScrollbar">
            <router-view v-if="!$route.meta.keeplive"></router-view>
            <keep-alive>
              <router-view :key="activePath" v-if="$route.meta.keeplive"/>
            </keep-alive>
          </el-scrollbar>
        </transition>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import comHeader from '@/components/header'
import tagsView from '@/components/tagsView'
import { getWindowHeight } from "@/utils/windowHeight";
import { globalBus } from '@/utils/globalBus'
// import { mapGetters } from 'vuex'
import menus from '@/menus'
export default {
  name:'HOME',
  components: {
    comHeader,
    tagsView,
  },
  data() {
    return {
      asideList:[],
      asideList:menus['vueMenus'],
      // businessType:this.$route.query.businessType,
      // productType:this.$route.query.productType,
      asideHeight:'',
      // normalViews:['taskManagementListInfo','earlyWarningVerifyInfo','carManageInfo']
    }
  },
  created() {
    this.asideHeight = getWindowHeight() - 130;
    this.backTop()
  },
  watch: {
    $route(to, from) {
      if(this.normalViews.includes(to.name)){
        this.$store.dispatch('updateVisitedViews', to)
      }
      this.$refs['appScrollbar'].wrap.scrollTop = 0
    },
  },
  computed: {
    // ...mapGetters(['menuInfo']),
    activePath () {
      return this.$route.path
    },
  },
  methods: {
    // 保存连接的激活地址
    saveNavState(subItem) {
      let self = this
      self.$router.push({
        path:subItem.path,
        query:{
          productType:self.productType,
          businessType:self.businessTyp
        }
      })
    },
    backTop() {
      globalBus.$on('backtop', () => {
        this.$refs['appScrollbar'].wrap.scrollTop = 0
      })
    },
    // //获取侧边栏
    // setAsideInfo(){
    //   this.menuInfo.forEach(element => {
    //     if(element.permissionValue == 'plw:rule'){
    //       this.asideList = element.children
    //       this.getAside()
    //     }
    //   });
    // },
    //对侧边栏进行处理
    // getAside(){
    //   this.asideList.forEach((item,index) => {
    //     this.asideList[index].name = item.name
    //     this.asideList[index].path = this.getUrlInfo(item.permissionValue)
    //     this.asideList[index].icon = ''
    //     this.asideList[index].urlName = this.getUrlName(item.permissionValue)
    //     this.asideList[index].children.forEach((item_2,index_2) => {
    //       this.asideList[index].children[index_2].name = item_2.name
    //       this.asideList[index].children[index_2].path = this.getUrlInfo(item_2.permissionValue)
    //       this.asideList[index].children[index_2].icon = ''
    //       this.asideList[index].children[index_2].urlName = this.getUrlName(item_2.permissionValue)
    //       if(item_2.permissionValue == 'plw:rule:set:submit'){
    //         this.$store.commit('menus/set_rulesButton',item_2.children)
    //       }
    //     })
    //   })
    // },
    //地址
    // getUrlInfo(permissionValue){
    //   let tem 
    //   this.asideListMenus.some((item) => {
    //     if(item.permissionValue == permissionValue) tem = item.path
    //   })
    //   return tem
    // },
    // //对于urlName
    // getUrlName(permissionValue){
    //   let tem 
    //   this.asideListMenus.some((item) => {
    //     if(item.permissionValue == permissionValue) tem = item.urlName
    //   })
    //   return tem
    // },
  },
}
</script>