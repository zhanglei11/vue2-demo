<template>
  <el-container class="home-global-big">
    <comHeader activeIndex="002"></comHeader>
    <el-main>
      <router-view :key="activePath" v-if="$route.meta.keeplive"/>
    </el-main>
  </el-container>
</template>
<script>
import comHeader from '@/components/header'
import { getWindowHeight } from "@/utils/windowHeight";
import { globalBus } from '@/utils/globalBus'
import menus from '@/menus'
export default {
  name:'HOME',
  components: {
    comHeader,
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
      // console.log(subItem)
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
.home-global-big{
  height: 100%;
  display: flex;
  .el-main {
    background-color: #F5F6F7;
    min-width: 1100px;
    display: inline-block;
    padding: 0;
    flex: 1;
    margin-top: 56px;
    .home-main{
      margin-top: 56px;
      overflow-y: auto;
    }
  }
}

</style>