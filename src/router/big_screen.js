const prefix = '/big_screen';
const router = [

  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '导航管理'
    },
    component: resolve => require(['@/views/big_screen/home'], resolve),
    children: [
      {
        path: prefix + '/index',
        name: 'bigScreenIndex',
        meta: {
          title: '大屏列表',
          keeplive:true,
        },
        component: (resolve) => require(['@/views/big_screen/index'], resolve),
      },
      {
        path: prefix + '/xs/index',
        name: 'bigScreenShow',
        meta: {
          title: '大数据展板',
          keeplive:false,
        },
        component: (resolve) => require(['@/views/big_screen/bigScreen/index'], resolve),
      },
      {
        path: prefix + '/xs2/index',
        name: 'bigScreenShow',
        meta: {
          title: '大数据展板2',
          keeplive:false,
        },
        component: (resolve) => require(['@/views/big_screen/bigScreen2/index'], resolve),
      },
      // {
      //   path: prefix + '/list002',
      //   name: 'list002',
      //   meta: {
      //     title: '规划2',
      //     keeplive:true,
      //   },
      //   component: (resolve) => require(['@/views/big_screen/list002'], resolve),
      // },
    ]
  }
];
export default router;