/* eslint-disable */
import Axios from 'axios';
import { API_HOST } from '../environment/index';

let axios = Axios.create({
  timeout: 30000   // 超时时间
});

/**
 * 请根据需要在拦截器内填写需要特殊处理的异常返回
 */
axios.interceptors.response.use(
  function(response) {
    if (response.data.status !== 'success' && response.data.code !== 200 && response.data.code !== 1) {
      // console.log('wrong')
      switch (response.data.code) {
        case '11111111': 
          // 针对错误代码做统一处理
          break;
        default:
          // 其它报错信息
          if(response.data.message){
            console.log('response.data.message',response.data.message);
            // Toast(response.data.message);
          }
      }
      return Promise.reject(response.data.code);
    }
    return response.data;
  },
  function(error) {
    console.log('[网络异常]', error);
    return Promise.reject(error);
  }
);

const request = (url: string, config:any = {}) => {
  if (config.withCredentials) {
    // 允许携带cookie
    Object.assign(config, {
      withCredentials: true
    });
  }
  if (config.formData) {
    Object.assign(config, {
      transformRequest: [
        function(data:any) {
          let ret = '';
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
          }
          return ret;
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  return axios({
    url: config.raw ? url : API_HOST + url,
    ...config
  });
};

export default request;
