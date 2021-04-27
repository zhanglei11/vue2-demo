
<template>
  <dv-border-box-12 id="centerBottom">
    <el-row :span="24">
      <el-col :span="6">
        <el-col class="first-img"><img src="../img/vehicleCount.png" alt=""></el-col>
        <el-col class="second-num">{{deviceCount}}</el-col>
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
      this.deviceCount = parseInt(Math.random()*(100),10)
      this.onlineRate = parseInt(Math.random()*(100),10)
      this.toDayAddVehicle = parseInt(Math.random()*(100),10)
      this.toDayAlarmCount = parseInt(Math.random()*(100),10)
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