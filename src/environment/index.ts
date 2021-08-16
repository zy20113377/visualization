// 卖点域名
const TRACE_HOST_LIST = {
  test: 'http://10.30.126.62:8080',
  production: 'https://www.uequan.net',
};
// 接口域名
const API_HOST_LIST = {
  test: 'http://www.hanzon.cn',
  production: '',
};

// 判断是否为生产环境
export function isProduction() {
  return env === 'production';
}

export const env = window.location.host == 'www.hanzon.cn' ? 'production' : 'test';
export const TRACE_HOST = TRACE_HOST_LIST[env];
export const API_HOST = API_HOST_LIST[env];
