const prefix = '/bigScreen';
const router = [
  {
    path: prefix + '/index',
    name: 'bigScreenShow',
    meta: {
      title: '大数据展板',
      keeplive:false,
    },
    component: (resolve) => require(['@/views/big_screen/bigScreen/index'], resolve),
  },
];
export default router;