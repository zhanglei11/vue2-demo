<template>
  <dv-border-box-12 id="centerRight1">
    <el-row >
      <el-col>
        <el-col class="fl left-title">平台访问总数</el-col>
        <el-col class="fl right-num">
          <span class="toAD" v-for="(item, index) in totalData" :key="index">
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
      </el-col>
      <el-col>
        <el-col class="fl left-title">今日访问总数</el-col>
        <el-col class="fl right-num">
          <span class="toAD" v-for="(item, index) in todayData" :key="index">
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
      </el-col>
      <el-col>
        <img src="../img/22.gif" alt="">
      </el-col>
    </el-row>
  </dv-border-box-12>    
</template>

<script>
import './index.less'
export default {
  data() {
    return {
      totalData:[],
      todayData:[],
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
      this.totalData = String(parseInt(Math.random()*(10000),10)).split('')
      this.todayData = String(parseInt(Math.random()*(1000),10)).split('')
    }
  }
};
</script>
<style lang="less">
#centerRight1 {
  color: #fff;
  height: 360px;
  .el-row{
    & > .el-col{
      display: inline-flex;
      margin-top: 20px;
      padding: 0 40px;
      .left-title{
        font-size: 24px;
        color: #FFFFFF;
        width: 360px;
        margin-top: 15px;
      }
    }
  }
  img{
    width: 100%;
    height: 100px;
    margin-top: 50px;
  }
}
</style>