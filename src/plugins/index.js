/**
 * Author:Vinsea.
 * CreateDate:2017/6/9 14:15.
 * Describe:扩展VUE，混合对象
 */
import config from '../res/js/config'
import consts from '../res/js/common/consts'
import util from '../res/js/common/util'

export default {
  install(Vue, options) {
    Vue.mixin({
      created: function () {
        this.$config = config
        this.$util = util
        this.$consts = consts
      }
    })

  }
}
