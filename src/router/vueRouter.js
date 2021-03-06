const prefix = '/vue_list';
const router = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '导航管理'
    },
    component: resolve => require(['@/views/vue_list/home'], resolve),
    children: [
      {
        path: prefix + '/list001',
        name: 'list001',
        meta: {
          title: '规划1',
          keeplive:true,
        },
        component: (resolve) => require(['@/views/vue_list/list001'], resolve),
      },
      {
        path: prefix + '/list002',
        name: 'list002',
        meta: {
          title: '规划2',
          keeplive:true,
        },
        component: (resolve) => require(['@/views/vue_list/list002'], resolve),
      },
    ]
  }
];
export default router;