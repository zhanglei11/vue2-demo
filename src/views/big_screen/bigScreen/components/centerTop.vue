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
      this.vehicleCountArr = String(parseInt(Math.random()*(1000),10)).split('')
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