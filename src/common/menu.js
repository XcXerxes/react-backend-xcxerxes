const menuData = [
  {
    name: '图表统计',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'dashboard/analysis'
      }
    ]
  },
  {
    name: '用户管理',
    icon: 'usergroup-add',
    path: 'users',
    children: [
      {
        name: '用户列表',
        path: 'users/list'
      }
    ]
  },
  {
    name: '分类管理',
    icon: 'appstore',
    path: 'category',
    children: [
      {
        name: '分类列表',
        path: 'category/list'
      }
    ]
  },
  {
    name: '文章管理',
    icon: 'profile',
    path: 'article',
    children: [
      {
        name: '文章列表',
        path: 'article/list'
      }
    ]
  }
]
export const getMenuData = () => {
  return menuData
}
