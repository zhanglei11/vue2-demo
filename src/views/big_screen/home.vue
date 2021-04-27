<template>
  <el-container class="home-global-big">
    <ComHeader activeIndex="002"></ComHeader>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
import ComHeader from '@/components/header'
export default {
  name:'HOMEBIG',
  components: {
    ComHeader,
  },
  data() {
    return {}
  },
  created() {},
  watch: {},
  computed: {},
  methods: {},
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
  }
}

</style>