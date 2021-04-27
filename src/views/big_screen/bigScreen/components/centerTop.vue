<!--
 * @Author: your name
 * @Date: 2020-12-17 08:45:02
 * @LastEditTime: 2020-12-18 10:01:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /postloan-warning-front/src/views/big_screen/components/centerTop.vue
-->
<template>
  <div id="centretop">
    <el-row >
      <el-col class="rol-title-top">
        <span class="toAD" v-for="(item, index) in vehicleCountArr" :key="index">
          <div
            class="qwNumBox-center"
            v-for="(ite, inde) in item"
            :key="inde"
            >
            <div class="trasBox" :class="['rolling-center_' + ite]">
              <div class="qwnum-center" v-for="item in numList" :key="'qwnum-center'+item">{{item}}</div>
            </div>
          </div>
        </span>
      </el-col>
      <el-col class="miaosu">监控中车辆</el-col>
      <el-col >
        <EchratsMap></EchratsMap>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EchratsMap from "./echratsMap";
import {
  data_open, //案件列表
} from "@/api/bigData";
import './index.less'
export default {
  data() {
    return {
      vehicleCountArr:[],
      timer:null,
      numList:[0,1,2,3,4,5,6,7,8,9],
    };
  },
  components: {
    EchratsMap
  },
  created(){
    this.init()
  },
  mounted() {
    this.timer = setInterval(() => {
      this.init()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.timer);        
    this.timer = null;
  },
  methods: {
    init(){
      data_open().then((res) => {
        if (res.returnCode == "200") {
          this.vehicleCountArr = String(res.returnData.vehicleCount).split('')
        } else {
          this.$message({
            message: !!!res.userMessage?'服务异常':res.userMessage,
            type: 'error',
            duration:1000
          });
        }
      })
    }
  }
};
</script>

<style lang="less">
#centretop {
  color: #fff;
  height: 660px;
  & > .el-row{
    text-align: center;
    & > .el-col{
      &.miaosu{
        margin-top: 20px;
        font-size: 28px;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }
}
</style>