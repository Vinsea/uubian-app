/**
 * Author:Vinsea.
 * CreateDate:2017/6/9 14:18.
 * Describe:自定义的公用工具库
 */
export default {

  /**
   * 简单的返回顶部
   */
  scrollToTop(){
    document.body.scrollTop = 0;
  },

  /**
   * 复制对象
   */
  copyObj(obj) {
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      var copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      var copy = [];
      for (var i = 0; i < obj.length; ++i) {
        copy[i] = this.copyObj(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      var copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.copyObj(obj[attr]);
      }
      return copy;
    }
    throw new Error("复制失败，一定是你的姿势不对！");
  }
}
