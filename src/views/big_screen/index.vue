
<template>
  <div class="zhanglei-task-index">
    <div class="task-content">
      <el-row class="task-content-info">
        <el-col>
          <el-row class="task-list" :span="24">
            <el-col :span="6" class="list-image list-image-car" >
              <span class="list-image-name" @click="checkedRetail(1)">大屏1</span>
            </el-col>
            <el-col :span="6" class="list-image list-image-car" >
              <span class="list-image-name" @click="checkedRetail(2)">大屏2</span>
            </el-col>
            <!-- <el-col :span="6" class="list-image list-image-house" >
              <span class="list-image-name">锡房贷</span>
            </el-col>
            <el-col :span="6" class="list-image list-image-machine">
              <span class="list-image-name">锡机贷</span>
            </el-col>
            <el-col :span="6" class="list-image list-image-cardealer">
              <span class="list-image-name">车商贷</span>
            </el-col> -->
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name:'taskIndex',
  data() {
    return {}
  },
  methods: {
    checkedRetail(index){
      switch (index) {
        case 1:
          this.$router.push({
            path:'/big_screen/xs/index',
          })
          break;
        case 2:
          this.$router.push({
            path:'/big_screen/xs2/index',
          })
          break;
      }
    }
  },
  created () {},
  computed: {}
}
</script>
<style scope lang='less'>
.zhanglei-task-index{
  position: absolute;
  min-width: 1440px;
  width: 100%;
  overflow-y: auto;
  .task-content{
    background: #fff;
    margin: 20px auto 0;
    padding: 20px 74px 46px;
    width: 1200px;
    border-radius: 4px;
    .task-content-info + .task-content-info{
      margin-top: 32px;
    }
    .task-list{
      margin-top: 20px;
      .list-image{
        width: 248px;
        height: 120px;
        border-radius: 12px;
        padding: 25px 24px;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
        text-align: left;
        font-size:32px;
        .list-image-name{
          font-size:32px;
          color: #fff;
        }
        &.list-image-car{
          background-image: url('../../assets/task/xicar.png');
        }
        &.list-image-house{
          background-image: url('../../assets/task/xihouse.png');
        }
        &.list-image-machine{
          background-image: url('../../assets/task/ximachine.png');
        }
        &.list-image-cardealer{
          background-image: url('../../assets/task/cardealer.png');
        }
        &.list-image-supply{
          background-image: url('../../assets/task/supply.png');
          & > .list-image-name{
            color: #515F69;
          }
        }
      }
      .list-image + .list-image {
        margin-left: 20px;
      }
    }
  }
}
</style>