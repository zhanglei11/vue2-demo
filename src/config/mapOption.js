export const mapOption = {
  basicOption: {
    tooltip: {
      show:true,
      trigger: 'item',
      formatter: function(obj) {
        let num = `<span>${obj.name}:${isNaN(obj.value)?0:obj.value}</span>`
        return num
      }
    },
    // 左侧小导航图标
    visualMap: {
      pieces: [
        { min: 0, max: 0, label: '0', color: '#fcf16e',  },
        { min: 1, max: 100, label: '1-100', color: '#c1a173',  },
        { min: 101, max: 200, label: '101-200', color: '#f15a22', },
        { min: 201, max: 500, label: '201-300', color: '#54211d',   },
        { min: 500, max:10000000, label: '500以上', color: '#ed1941',},
      ],
      precision: 1,
      show:true,
      textStyle: {
        color: '#fff'
      },
      top: 'bottom',
      left: 'left'
    },
    geo: {
      top: 100
      // layoutCenter: ['30%', '30%'],
      // // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
      // layoutSize: 100
      // 设置这两个值后 left/right/top/bottom/width/height 无效。
    }
  },
  seriesOption: {
    type: 'map',
    roam: false,
    nameMap: {
      china: '中国'
    },
    label: {
      normal: {
        show: true, //显示省份标签
        formatter: function(obj) {
          return obj.value
        },
      },
      emphasis: {  //对应的鼠标悬浮效果
        show: false,
        textStyle: {
          color: '#fff'
        }
      }
    },
    itemStyle: {
      normal: {
        borderWidth: 0.5, //区域边框宽度
        borderColor: '#009fe8', //区域边框颜色
        areaColor: '#ffefd5' //区域颜色
      },
      emphasis: {
        borderWidth: 0.5,
        borderColor: '#4b0082',
        areaColor: '#ffdead'
      }
    }
	},
	dataRange: {
		x: '-1000 px', //图例横轴位置
		y: '-1000 px', //图例纵轴位置
		splitList: [
			{ start: 1, end: 1, label: '北京', color: '#fff' },
			{ start: 2, end: 2, label: '天津', color: '#f1ebd1' },
			{ start: 3, end: 3, label: '上海', color: '#feffdb' },
			{ start: 4, end: 4, label: '重庆', color: '#e0cee4' },
			{ start: 5, end: 5, label: '河北', color: '#fde8cd' },
			{ start: 6, end: 6, label: '河南', color: '#e4f1d7' },
			{ start: 7, end: 7, label: '云南', color: '#fffed7' },
			{ start: 8, end: 8, label: '辽宁', color: '#e4f1d7' },
			{ start: 9, end: 9, label: '黑龙江', color: '#e4f1d7' },
			{ start: 10, end: 10, label: '湖南', color: '#fffed7' },
			{ start: 11, end: 11, label: '安徽', color: '#fffed8' },
			{ start: 12, end: 12, label: '山东', color: '#dccee7' },
			{ start: 13, end: 13, label: '新疆', color: '#fff' },
			{ start: 14, end: 14, label: '江苏', color: '#fce8cd' },
			{ start: 15, end: 15, label: '浙江', color: '#ddceeb' },
			{ start: 16, end: 16, label: '江西', color: '#e4f1d3' },
			{ start: 17, end: 17, label: '湖北', color: '#fde8cd' },
			{ start: 18, end: 18, label: '广西', color: '#fde8cd' },
			{ start: 19, end: 19, label: '甘肃', color: '#fde8cd' },
			{ start: 20, end: 20, label: '山西', color: '#fffdd6' },
			{ start: 21, end: 21, label: '内蒙古', color: '#ddcfe6' },
			{ start: 22, end: 22, label: '陕西', color: '#fad8e9' },
			{ start: 23, end: 23, label: '吉林', color: '#fce8cd' },
			{ start: 24, end: 24, label: '福建', color: '#fad8e8' },
			{ start: 25, end: 25, label: '贵州', color: '#fad8e8' },
			{ start: 26, end: 26, label: '广东', color: '#ddcfe8' },
			{ start: 27, end: 27, label: '青海', color: '#fad8e9' },
			{ start: 28, end: 28, label: '西藏', color: '#ddcfe6' },
			{ start: 29, end: 29, label: '四川', color: '#e4f1d5' },
			{ start: 30, end: 30, label: '宁夏', color: '#fefcd5' },
			{ start: 31, end: 31, label: '海南', color: '#fad8e9' },
			{ start: 32, end: 32, label: '台湾', color: '#fce8cd' },
			{ start: 33, end: 33, label: '香港', color: '#dc9bbb' },
			{ start: 34, end: 34, label: '澳门', color: '#e0f7cc' }
		]
	},
}
