<!--
 * @Author: your name
 * @Date: 2020-11-30 14:00:39
 * @LastEditTime: 2020-12-18 10:02:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /postloan-warning-front/src/views/big_screen/components/centerRight2.vue
-->

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
        <span>今日新增预警案件</span>
        <span class="progress">
          <div class="first">
            <div
              class="progress_sss"
              v-for="(item, index) in firstList"
              :key="'first' + index"
            ></div>
          </div>
          {{ todayNew }}
        </span>
      </el-col>
      <el-col>
        <span>今日完成预警案件</span>
        <span class="progress">
          <div class="second">
            <div
              class="progress_sss"
              v-for="(item, index) in secondList"
              :key="'first' + index"
            ></div>
          </div>
          {{ todayOver }}
        </span>
      </el-col>
      <el-col>
        <span>今日待完成预警案件</span>
        <span class="progress">
          <div class="three">
            <div
              class="progress_sss"
              v-for="(item, index) in threeList"
              :key="'first' + index"
            ></div>
          </div>
          {{ todayNewAndUnOver }}
        </span>
      </el-col>
      <el-col>
        <span>进行中的预警案件</span>
        <span class="progress">
          <div class="four">
            <div
              class="progress_sss"
              v-for="(item, index) in fourList"
              :key="'first' + index"
            ></div>
          </div>
          {{ totalUnOver }}
        </span>
      </el-col>
    </el-row>
  </dv-border-box-12>
</template>

<script>
import {
  data_open_workOrder, //案件列表
} from '@/api/bigData'
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
    console.log('centerRight2')
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
      data_open_workOrder().then((res) => {
        if (res.returnCode == '200') {
          this.todayNew = res.returnData.todayNew
          this.todayOver = res.returnData.todayOver
          this.todayNewAndUnOver = res.returnData.todayNewAndUnOver
          this.totalUnOver = res.returnData.totalUnOver
          this.totalOverArr = String(res.returnData.totalOver).split('')
        } else {
          this.$message({
            message: !!!res.userMessage?'服务异常':res.userMessage,
            type: 'error',
            duration:1000
          });
        }
      }).catch(() => {});
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
    font-size: 24px;
    margin-top: 120px;
    padding: 0 20px;
    & > .el-col {
      margin-bottom: 20px;
      height: 32px;
      line-height: 32px;
      & > span {
        &:first-child {
          width: 170px;
          font-size: 18px;
          display: inline-block;
        }
      }
      .img {
        margin: 0 10px;
      }
      .progress {
        height: 32px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        & > div {
          &.first {
            width: 230px;
          }
          &.second {
            width: 198px;
          }
          &.three {
            width: 165px;
          }
          &.four {
            width: 134px;
          }
          height: 24px;
          display: inline-block;
          font-size: 0;
          background: linear-gradient(to right, #6cebf3, #ffffff 100);
          .progress_sss {
            height: 100%;
            width: 2px;
            background: #020950;
            display: inline-block;
            margin-left: 6px;
          }
        }
      }
      
    }
  }
}
</style>