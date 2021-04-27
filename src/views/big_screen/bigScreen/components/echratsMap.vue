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
      this.data = 
      [
        {"provinceCode":350000,"province":"福建省","vehicleCount":0},
        {"provinceCode":540000,"province":"西藏自治区","vehicleCount":0},
        {"provinceCode":520000,"province":"贵州省","vehicleCount":0},
        {"provinceCode":310000,"province":"上海市","vehicleCount":0},
        {"provinceCode":430000,"province":"湖南省","vehicleCount":0},
        {"provinceCode":440000,"province":"广东省","vehicleCount":1},
        {"provinceCode":420000,"province":"湖北省","vehicleCount":0},
        {"provinceCode":820000,"province":"澳门特别行政区","vehicleCount":0},
        {"provinceCode":810000,"province":"香港特别行政区","vehicleCount":0},
        {"provinceCode":510000,"province":"四川省","vehicleCount":0},
        {"provinceCode":340000,"province":"安徽省","vehicleCount":0},
        {"provinceCode":650000,"province":"新疆维吾尔自治区","vehicleCount":0},
        {"provinceCode":320000,"province":"江苏省","vehicleCount":0},
        {"provinceCode":220000,"province":"吉林省","vehicleCount":0},
        {"provinceCode":640000,"province":"宁夏回族自治区","vehicleCount":0},
        {"provinceCode":130000,"province":"河北省","vehicleCount":50},
        {"provinceCode":410000,"province":"河南省","vehicleCount":0},
        {"provinceCode":450000,"province":"广西壮族自治区","vehicleCount":0},
        {"provinceCode":460000,"province":"海南省","vehicleCount":0},
        {"provinceCode":360000,"province":"江西省","vehicleCount":0},
        {"provinceCode":500000,"province":"重庆市","vehicleCount":0},
        {"provinceCode":530000,"province":"云南省","vehicleCount":0},
        {"provinceCode":110000,"province":"北京市","vehicleCount":0},
        {"provinceCode":620000,"province":"甘肃省","vehicleCount":0},
        {"provinceCode":610000,"province":"陕西省","vehicleCount":0},
        {"provinceCode":370000,"province":"山东省","vehicleCount":0},
        {"provinceCode":330000,"province":"浙江省","vehicleCount":1},
        {"provinceCode":150000,"province":"内蒙古自治区","vehicleCount":0},
        {"provinceCode":630000,"province":"青海省","vehicleCount":0},
        {"provinceCode":210000,"province":"辽宁省","vehicleCount":0},
        {"provinceCode":120000,"province":"天津市","vehicleCount":0},
        {"provinceCode":710000,"province":"台湾省","vehicleCount":0},
        {"provinceCode":230000,"province":"黑龙江省","vehicleCount":0},
        {"provinceCode":140000,"province":"山西省","vehicleCount":0}
      ]
      this.requestGetChinaJson()
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

