module.exports = {
  //预警规则
  vueMenus:[
    {
      name: '规则设置',
      permissionValue:'1',
      path: '',
      urlName:[],
      children:[
        {
          name: '预警规则设置',
          permissionValue:'1',
          path: '/vue_list/list001',
          urlName:['']
        },
        {
          name: '预警规则审核',
          permissionValue:'2',
          path: '/vue_list/list001',
          urlName:['']
        },
      ]
    },
  ],
}
