// 大屏展示
import request from '@/utils/request';

//大数据展板数据统计
export const data_open = params => {
  return request.get('/open', {
    params: params
  })
}

//车辆省份计数
export const data_open_province = params => {
  return request.get('/open/province', {
    params: params
  })
}

//车辆信息轮播
export const data_open_vehicle = params => {
  return request.get('/open/vehicle', {
    params: params
  })
}

//平台访问量
export const data_open_visit = params => {
  return request.get('/open/visit', {
    params: params
  })
}

//工单情况统计
export const data_open_workOrder = params => {
  return request.get('/open/workOrder', {
    params: params
  })
}
 




