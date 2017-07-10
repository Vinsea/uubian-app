import Vue from 'vue'
import Router from 'vue-router'

//首页
const index = r => require.ensure([], () => r(require('../views/Index.vue')), 'index')

//
import loginRouters from './module/auth'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',  //首页
      component: index,
      meta: {
        name: '首页'
      }
    },
  ]
});
router.addRoutes(loginRouters);
export default router
