/**
 * Author:Vinsea.
 * CreateDate:2017/7/10 10:11.
 * Describe:登录注册相关的路由
 */
const login = r => require.ensure([], () => r(require('../../views/auth/Login.vue')), 'login')

export default
[
  {
    path: '/auth/login',
    name: 'login',
    component: login,
    meta: {
      name: '登录'
    }
  }
]
