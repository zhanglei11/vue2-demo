<template>
  <el-container class="home-global">
    <comHeader activeIndex="1"></comHeader>
    <el-aside width="214px" style="margin-top:56px">    
      <el-menu
        unique-opened
        :collapse="false"
        :collapse-transition="false"
        router
        :default-active="activePath"
        text-color="#9e9fa4"
        active-text-color="#FFF"
      >
        <el-submenu :key="item.id" v-for="item in asideList" :index="item.name">
          <!-- 一级菜单的模板区域 -->
          <template slot="title">
            <span >{{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.name"
            @click="saveNavState(subItem)"
          >
            <!-- 导航开启路由模式：将index值作为导航路由-->
            <!-- 二级菜单的模板区域 -->
            <template slot="title">
              <span>{{ subItem.name }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
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
import menus from '@/menus'
export default {
  name:'HOME',
  components: {
    comHeader,
    tagsView,
  },
  data() {
    return {
      asideList:menus['vueMenus'],
      asideHeight:'',
    }
  },
  created() {
    this.asideHeight = getWindowHeight() - 130;
    this.backTop()
  },
  watch: {
    $route(to, from) {
      this.$refs['appScrollbar'].wrap.scrollTop = 0
    },
  },
  computed: {
    activePath () {
      return this.$route.path
    },
  },
  methods: {
    // 保存连接的激活地址
    saveNavState(subItem) {
      console.log(subItem)
      this.$router.push({
        path:subItem.path,
      })
    },
    backTop() {
      globalBus.$on('backtop', () => {
        this.$refs['appScrollbar'].wrap.scrollTop = 0
      })
    },
  },
}
</script>

<style lang="less">
.home-global{
  height: 100%;
  display: flex;
  .el-aside {
    position: fixed;
    left: 0;
    z-index: 2;
    height: 100%;
    background: #fff;
    width: 214px;
    flex: 0 0 214px;
    .el-menu {
      border: none;
      background-color: #fff;
      font-size: 14px;
      .el-submenu__title{
        font-weight: 500;
        color: #242D33 !important;
        text-align: left;
        &:focus,&:focus>i,&:hover,&:hover>i,&.is-active,&.is-active>i{
          color: #3E6EF6 !important;
          background-color: initial;
          outline: 0;
        }
      }
      .el-menu-item{
        font-weight: 500;
        color: #242D33 !important;
        text-align:left;
        // i{
        //   font-size: 14px;
        //   margin-right: 8px;
        //   margin-left: 12px;
        //   color: #242D33 !important;
        // }
        &:focus,&:focus>i,&:hover,&:hover>i,&.is-active,&.is-active>i{
          color: #3E6EF6 !important;
          background-color: initial;
          outline: 0;
        }
        // &:focus,&:focus>i,&:hover,&:hover>i,&.is-active,&.is-active>i{
        //   color: #3E6EF6 !important;
        //   background-color: #F5F9FF;
        //   outline: 0;
        // }
      }
    }
  }
  .el-main {
    background-color: #F5F6F7;
    min-width: 1100px;
    display: inline-block;
    padding: 0;
    flex: 1;
    margin-top: 80px;
    margin-left: 214px;
    .home-main{
      margin-top: 50px;
      overflow-y: auto;
    }
  }
}

</style>