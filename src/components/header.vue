<template>
  <div class="header-global">
    <el-menu :default-active="activeIndex" class="el-menu-demo content" mode="horizontal" @select="handleSelect">
      <el-menu-item 
        v-for="(item,index) in topList" 
        :index="item.name"
        :key="item.id">
        {{item.name}}
        </el-menu-item>
    </el-menu>
    <el-col class="name-image">
      <el-col class="detail">项目展览</el-col>
    </el-col>
    <div class="user">
      <div class="fl">
        <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="fl">
        <el-dropdown @command="logOut">
          <span class="el-dropdown-link">
            {{realname}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="1">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
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
      realname:'张磊',
      topList:[
      {
        name: 'vue2',
        id:1,
        path: '/vue_list/list001',
        children:[]
      },
    ]
    }
  },
  methods:{
    handleSelect(key) {
      let path 
      this.topList.filter(item => { 
        if( item.id == key) path = item.path
      })
      this.$router.push(path)
    },

    //退出
    logOut(){
      console.log("logOut")
    },
  },

  created() {},
  computed: {},
  mounted() {},
}
</script>
<style lang="less">
.header-global {
  z-index: 100;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
  position: fixed;
  display: inline-block;
  height: 56px;
  line-height: 56px;
  background: #3E6EF6;
  text-align: center;
  min-width: 1314px;
  width: 100%;
  .el-menu.el-menu--horizontal {
    display: inline-block;
    border-bottom:none;
    height: 56px;
    line-height: 56px;
    background: #3E6EF6;
    font-size: 16px;
    .el-menu-item{
      color: #fff;
      font-weight: bold;
      height: 56px;
      line-height: 56px;
      font-size: 18px;
      &.is-active,&:not(.is-disabled):hover,&:not(.is-disabled):focus{
        color: #fff !important;
        border-bottom:4px solid #fff;
        background-color: inherit;
        border-bottom-color:initial !important;
      }
    }
  }
  .name-image{
    position: absolute;
    left: 0px;
    top: 0px;
    text-align: left;
    height: 56px;
    line-height: 56px;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    margin-left: 32px;
    width: 300px;
  }
  .user {
    position: absolute;
    right: 20px;
    top: 0px;
    font-size: 14px;
    cursor: pointer;
    & > div {
      & > .el-avatar{
        width: 24px;
        height: 24px;
        margin-top: 16px;
        margin-right: 12px;
        margin-left: 12px;
      }
      .el-dropdown{
        height: 50px;
        & > span{
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>