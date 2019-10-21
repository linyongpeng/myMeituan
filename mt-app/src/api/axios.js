import axios from 'axios'

// 创建自定义axios的默认值
axios.defaults.baseURL = 'http://api.duyiedu.com'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 拦截器 拦截当前请求的所有信息 并可加以添加新数据
  console.log(config.params)
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey: 'lin13250574170_1564325164626'
  }
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
