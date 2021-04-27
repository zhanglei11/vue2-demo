
<template>
  <dv-border-box-12 class="mt10" id="centreLeft2">
    <el-row class="title">
      <el-col> {{ licenseNumber }}/{{ vin }} </el-col>
      <el-col>北纬：{{ lat }}</el-col>
      <el-col>东经：{{ lng }}</el-col>
    </el-row>
    <el-row class="qiche">
      <el-col class="qiche-gundong">
        <div class="img">
          <template v-if="initNumHis === 1">
            <img :key="'aa'+initNumB" src="../img/car1.png" alt="" />
          </template>
          <template v-if="initNumHis === 2">
            <img :key="'aa'+initNumB" src="../img/car2.png" alt="" />
          </template>
          <template v-if="initNumHis === 3">
            <img :key="'aa'+initNumB" src="../img/car3.png" alt="" />
          </template>
          <template v-if="initNumHis === 4">
            <img :key="'aa'+initNumB" src="../img/car4.png" alt="" />
          </template>
          <template v-if="initNumHis === 5">
            <img :key="'aa'+initNumB" src="../img/car5.png" alt="" />
          </template>
          <template v-if="initNumHis === 6">
            <img :key="'aa'+initNumB" src="../img/car6.png" alt="" />
          </template>
          <template v-if="initNumHis === 7">
            <img :key="'aa'+initNumB" src="../img/car7.png" alt="" />
          </template>
          <template v-if="initNumHis === 8">
            <img :key="'aa'+initNumB" src="../img/car8.png" alt="" />
          </template>
          <template v-if="initNumHis === 9">
            <img :key="'aa'+initNumB" src="../img/car9.png" alt="" />
          </template>
          <template v-if="initNumHis === 10">
            <img :key="'aa'+initNumB" src="../img/car10.png" alt="" />
          </template>
        </div>
      </el-col>
    </el-row>
  </dv-border-box-12>
</template>
<script>
import './index.less'
export default {
  data() {
    return {
      carList:[1,2,3,4,5,6,7,8,9,10],
      licenseArr: [],
      licenseNumber: '45**78',
      vin: '*****',
      lat: '****12',
      lng: '****67',
      timer: null,
      initNum: 0,
      initNumB: 0,
      imgSrc: '',
      initNumHis: 0,
    }
  },
  created() {
    console.log('centerLeft2')
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
      this.initNum = this.initNum + 1
      this.initNumB = this.initNumB + 1
      if (this.initNum > 10) {
        this.initNum = 1
      }
      let num = JSON.parse(JSON.stringify(this.initNum))
      this.initNumHis = num
    },
  },
}
</script>
<style lang="less">
#centreLeft2 {
  color: #fff;
  height: 650px;
  .title {
    text-align: center;
    & > .el-col {
      font-size: 20px;
      color: #8ecfff;
      text-align: center;
      margin-bottom: 20px;
      &:first-child {
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 40px;
        margin-top: 50px;
      }
    }
  }
}
</style>