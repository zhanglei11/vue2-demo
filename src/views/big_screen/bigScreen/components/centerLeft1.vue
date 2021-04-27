<template>
  <dv-border-box-12 id="centreLeft1">
    <el-row>
      <el-col class="rol-title">
        <span class="toAD" v-for="(item, index) in toDayLocusCountArr" :key="index">
          <div
            class="qwNumBox"
            v-for="(ite, inde) in item"
            :key="inde"
            >
            <div class="trasBox" :class="['rolling_' + ite]">
              <div class="qwnum" v-for="item in numList" :key="'qwnum'+item">{{item}}</div>
            </div>
          </div>
        </span>
      </el-col>
      <el-col class="miaosu">今日车辆轨迹</el-col>
      <el-col><img src="../img/22.gif" alt=""></el-col>
    </el-row>
  </dv-border-box-12>
</template>
<script>
import './index.less'
export default {
  data() {
    return {
      toDayLocusCountArr:[],
      timer:null,
      numList:[0,1,2,3,4,5,6,7,8,9],
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
      this.toDayLocusCountArr = String(parseInt(Math.random()*(10000),10)).split('')
    }
  }
};
</script>

<style lang="less">
#centreLeft1 {
  color: #fff;
  height: 280px;
  .el-row{
    text-align: center;
    & > .el-col{
      &.miaosu{
        font-size: 24px;
        margin-top: 20px;
      }
    }
    img{
      width: 80%;
      height: 80px;
      margin-top: 20px;
    }
  }
}
</style>