/**
 * Author:Vinsea.
 * CreateDate:2017/7/10 10:13.
 * Describe:接口配置文件
 */
const BASE_URL = '/uubian'
export default {
  /** 分页配置 */
  page: {
    pageSize: 10
  },

  /** 接口地址配置 */
  baseUrl: BASE_URL,
  baseApiUrl: BASE_URL + '/web/api',
  baseCommentUrl: BASE_URL + '/comment/api',
}
