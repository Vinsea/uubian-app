/**
 * Author:Vinsea.
 * CreateDate:2017/7/10 14:47.
 * Describe:vue扩展
 */
import Vue from 'vue'
export default

/**
 * 从localStorage中获取当前登录用户
 */
Vue.prototype.$getUser = function () {
  var user = localStorage.getItem('user')
  return user ? JSON.parse(user) : {}
}
/**
 * 将用户存储到本地localStorage
 * @param user 如果为空或空对象，则做删除操作
 */
Vue.prototype.$setUser = function (user) {
  if (user && user.id) {
    localStorage.setItem('user', JSON.stringify(user))
    this.$root.$emit('user-changed', user) // 通知本地用户被设置了，有需要的抓一下此事件做对应操作
  }else {
    localStorage.removeItem('user')
    // this.$root.$emit('user-changed', {}) // 通知本地用户被设置了，有需要的抓一下此事件做对应操作
  }
}
