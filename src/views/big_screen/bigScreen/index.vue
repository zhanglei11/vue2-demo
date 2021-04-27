<template>
  <div :style="{height:asideHeight+'px'}" class="big-screen">
    <dv-full-screen-container>
      <el-row :span="24" class="big-screen">
        <el-col class="big-screen-total" :span="24">
          <el-row :span="24">
            <el-col :span="8" class="first">
              <!-- <div></div> -->
            </el-col>
            <el-col :span="8" class="second">
              <div>银行管理驾驶舱</div>
            </el-col>
            <el-col :span="8" class="three">
              金易求精 锡望无限 
              <i :class="isFullscreen?'el-icon-aim':'el-icon-rank'" @click="click"></i>
            </el-col>
          </el-row>
        </el-col>

        <el-col class="big-screen-buttom" :span="24">
          <el-row :span="24" :gutter="20">
            <el-col :span="7">
              <CenterLeft1 />
              <CenterLeft2 />
            </el-col>
            <el-col :span="10">
              <CenterTop />
              <CenterBottom />
            </el-col>
            <el-col :span="7">
              <CenterRight1 />
              <CenterRight2 />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </dv-full-screen-container>
  </div>
</template>
<script>
import { getWindowHeight } from "@/utils/windowHeight";
import CenterLeft1 from "./components/centerLeft1";
import CenterLeft2 from "./components/centerLeft2";
import CenterTop from "./components/centerTop";
import CenterBottom from "./components/centerBottom";
import CenterRight1 from "./components/centerRight1";
import CenterRight2 from "./components/centerRight2";
import screenfull from 'screenfull'
export default {
  components:{
    CenterLeft1,
    CenterLeft2,
    CenterTop,
    CenterBottom,
    CenterRight1,
    CenterRight2,
  },
  data() {
    return {
      asideHeight: "",
      isFullscreen:false,
    }
  },

  created() {
    this.asideHeight = getWindowHeight() - 200;
  },
  mounted () {
    this.init()
  },
  computed: {},
  methods: {
    click(){
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.enabled = false
      screenfull.toggle()
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    change(){
      this.isFullscreen = screenfull.isFullscreen
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    },
  },
  beforeDestroy() {
    this.destroy()
  },
}
</script>
<style lang="less">
.big-screen{
  background: #020950;
}
#dv-full-screen-container{
  position: absolute;
  .big-screen{
    background: #020950;
    width: 100%;
    height: 100%;
    .big-screen-total{
      & > .el-row{
      border-bottom: 1px solid #2A407F;
      height: 86px;
      line-height: 86px;
      padding: 0 20px;
        & > .first{
          & > div {
            height: 56px;
            /* width: 180px; */
            width: 244px;
            // margin-top: 12px;
            // background-image: url(./big_screen.png);
            // background:url(./img/xishang-login.png) no-repeat;
            // background-size: cover;
            // -webkit-background-size: cover;
            // -o-background-size: cover;
            // background-position: center 0;
          }
        }
        & > .second{
          color: #fff;
          font-size: 32px;
          text-align: center;
          padding: 0 40px;
          & > div{
            border-bottom: 5px solid #30A3F9;
          }
        }
        & > .three{
          color: #C4D8FF;
          font-size: 22px;
          text-align: right;
          .icon-resize-full-alt,.icon-target{
            font-size:24px;
            cursor: pointer;
          }
        }
      }
    }
    .big-screen-buttom{
      padding: 30px;
      border-bottom: 1px solid #152a66;
    }
  }
}

</style>


