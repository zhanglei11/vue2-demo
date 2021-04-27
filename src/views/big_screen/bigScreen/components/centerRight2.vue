<template>
  <dv-border-box-12 id="centerRight2">
    <el-row class="title">
      <el-col class="rol-title">
        <span class="toAD" v-for="(item, index) in totalOverArr" :key="index">
          <div class="qwNumBox" v-for="(ite, inde) in item" :key="inde">
            <div class="trasBox" :class="['rolling_' + ite]">
              <div class="qwnum" v-for="item in numList" :key="'qwnum'+item">{{item}}</div>
            </div>
          </div>
        </span>
      </el-col>
      <el-col class="miaosu">累计完成预警案件</el-col>
    </el-row>
    <el-row class="list">
      <el-col>
        <span>新增预警案件</span>
        <span class="progress">
          <dv-decoration-3 style="width:120px;height:30px;" />
        </span>
        {{ todayNew }}
      </el-col>
      <el-col>
        <span>完成预警案件</span>
        <span class="progress">
          <dv-decoration-3 style="width:120px;height:30px;" />
        </span>
        {{ todayOver }}
      </el-col>
      <el-col>
        <span>待完成预警案件</span>
        <span class="progress">
          <dv-decoration-3 style="width:120px;height:30px;" />
        </span>
        {{ todayNewAndUnOver }}
      </el-col>
      <el-col>
        <span>进行中预警案件</span>
        <span class="progress">
          <dv-decoration-3 style="width:120px;height:30px;" />
        </span>
        {{ totalUnOver }}
      </el-col>
    </el-row>
  </dv-border-box-12>
</template>

<script>
import './index.less'
export default {
  data() {
    return {
      totalOverArr: [],
      todayNew: 0,
      todayOver: 0,
      todayNewAndUnOver: 0,
      totalUnOver: 0,
      timer: null,
      firstList: 28,
      secondList: 24,
      threeList: 20,
      fourList: 16,
      numList:[0,1,2,3,4,5,6,7,8,9],
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.timer = setInterval(() => {
      this.init()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    init() {
      this.todayNew = parseInt(Math.random()*(100),10)
      this.todayOver = parseInt(Math.random()*(100),10)
      this.todayNewAndUnOver = parseInt(Math.random()*(100),10)
      this.totalUnOver = parseInt(Math.random()*(100),10)
      this.totalOverArr = String(parseInt(Math.random()*(100),10)).split('')
    },
  },
}
</script>

<style lang="less">
#centerRight2 {
  color: #fff;
  height: 570px;
  margin-top: 10px;
  .title {
    text-align: center;
    & > .el-col {
      &.miaosu {
        font-size: 32px;
        margin-top: 40px;
      }
    }
  }
  .list {
    font-size: 18px;
    margin-top: 120px;
    padding: 0 20px;
    & > .el-col {
      margin-bottom: 20px;
      height: 32px;
      line-height: 32px;
      & > span {
        // &:first-child {
        //   width: 120px;
        //   font-size: 18px;
        //   display: inline-block;
        // }
      }
      .progress {
        height: 32px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
      }
      
    }
  }
}
</style>