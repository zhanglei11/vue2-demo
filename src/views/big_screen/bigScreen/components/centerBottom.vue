
<template>
  <dv-border-box-12 id="centerBottom">
    <el-row :span="24">
      <el-col :span="6">
        <el-col class="first-img"><img src="../img/vehicleCount.png" alt=""></el-col>
        <el-col class="second-num">
          {{deviceCount}}
          </el-col>
        <el-col class="three-title">平台设备总数(台)</el-col>
      </el-col>
      <el-col :span="6">
        <el-col class="first-img"><img src="../img/toDayAlarmCount.png" alt=""></el-col>
        <el-col class="second-num">{{toDayAlarmCount}}</el-col>
        <el-col class="three-title">今日AI智能识别风险数(条)</el-col>
      </el-col>
      <el-col :span="6">
        <el-col class="first-img"><img src="../img/toDayAddVehicle.png" alt=""></el-col>
        <el-col class="second-num">{{toDayAddVehicle}}</el-col>
        <el-col class="three-title">今日新增车辆(辆)</el-col>
      </el-col>
      <el-col :span="6">
        <el-col class="first-img"><img src="../img/onlineRate.png" alt=""></el-col>
        <el-col class="second-num">{{onlineRate}}%</el-col>
        <el-col class="three-title">监控车辆在线率(%)</el-col>
      </el-col>
    </el-row>
  </dv-border-box-12> 
</template>
<script>
import {
  data_open, //案件列表
} from "@/api/bigData";
export default {
  data() {
    return {
      deviceCount:0,
      onlineRate:0,
      toDayAddVehicle:0,
      toDayAlarmCount:0,
      timer:null,
    };
  },
  created(){
    console.log("centerBottom");
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
          this.deviceCount = res.returnData.deviceCount
          this.onlineRate = res.returnData.onlineRate
          this.toDayAddVehicle = res.returnData.toDayAddVehicle
          this.toDayAlarmCount = res.returnData.toDayAlarmCount
        } else {
          this.$message({
            message: !!!res.userMessage?'服务异常':res.userMessage,
            type: 'error',
            duration:1000
          });
        }
      }).catch(() => {});
    }
  }
};
</script>

<style lang="less">
#centerBottom {
  color: #fff;
  height: 270px;
  margin-top: 10px;
  .el-row{
    & > .el-col{
      text-align: center;
      .first-img{
        height: 180px;
        img{
          width: 130px;
          margin-top: 30px;
        }
      }
      .second-num{
        font-size: 26px;
        color: #F6D75D;
        text-align: center;
      }
      .three-title{
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }
}
</style>