<template>
  <div id="china_map_box">
    <div class="echarts">
      <div id="map" style="width: 100%; height: 500px"></div>
    </div>
  </div>
</template>

<script>
import { mapOption } from '@/config/mapOption'
import detail from '@/utils/china.json'
import {
  data_open_province, //案件列表
} from '@/api/bigData'
export default {
  name: 'china',
  components: {},
  data() {
    return {
      chart: null, // 实例化echarts
      // provincesMap: cityProvincesMap.provincesMap, // 省拼音，用于查找对应json
      // provincesCode: cityProvincesMap.provincesCode, // 市行政区划，用于查找对应json
      // areaMap: cityProvincesMap.areaMap, // 省行政区划，用于数据的查找，按行政区划查数据
      // special: ['北京市', '天津市', '上海市', '重庆市', '香港', '澳门'], //直辖市和特别行政区-只有二级地图，没有三级地图
      mapData: [], // 当前地图上的地区
      option: { ...mapOption.basicOption }, // map的相关配置
      deepTree: [], // 点击地图时push，点返回时pop
      areaName: '中国', // 当前地名
      areaCode: '000000', // 当前行政区划
      areaLevel: 'country', // 当前级别
      data: [],
      timer: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEcharts()
    })
    this.timer = setInterval(() => {
      this.initEcharts()
    }, 10000)
  },

  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    // 初次加载绘制地图
    initEcharts() {
      //地图容器
      this.chart = this.$echarts.init(document.getElementById('map'))
      data_open_province().then((res) => {
        if (res.returnCode == '200') {
          this.data = res.returnData
          this.requestGetChinaJson()
        } else {
          this.$message.error(res.userMessage==null?'服务异常':res.userMessage)
        }
      }).catch(() => {});
    },

    //绘制全国地图
    requestGetChinaJson() {
      let arr = []
      for (let i = 0; i < detail.features.length; i++) {
        let obj = {
          name: detail.features[i].properties.name,
          areaName: detail.features[i].properties.name,
          areaCode: detail.features[i].id,
          areaLevel: 'province',
          // value: Math.round(Math.random()),
          value: this.getValue(detail.features[i].id),
        }
        arr.push(obj)
      }
      this.mapData = arr
      this.deepTree.push({
        mapData: arr,
        params: {
          name: 'china',
          areaName: 'china',
          areaLevel: 'country',
          areaCode: '000000',
        },
      })
      //注册地图
      this.$echarts.registerMap('china', detail)
      //绘制地图
      this.renderMap('china', arr)
    },
    getValue(id) {
      let value = 0
      this.data.forEach((item) => {
        if (item.provinceCode == id) {
          value = item.vehicleCount
        }
      })
      return value
    },

    renderMap(map, data) {
      this.option.series = [
        {
          name: map,
          mapType: map,
          ...mapOption.seriesOption,
          data: data,
  
        },
      ]
      // this.option.dataRange = mapOption.dataRange
      
      //渲染地图
      this.chart.setOption(this.option)
    },
  },
}
</script>

<style lang="less" scoped>
#china_map_box {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  .echarts {
    width: 0;
    flex: 1;
    background-size: 100% 100%;
    #map {
      height: 100%;
    }
  }
  .back {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    z-index: 999;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
  }
}
</style>

