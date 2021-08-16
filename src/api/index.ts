/* eslint-disable */
import request from '../utils/network';

interface submitRequest{
  phone: string,
  code: string,
  utm?: string
}

export default class Api {
  /**
   * 获取手机验证码
   */
  static getCode(phone: string) {
    return request('/sms/send', {
      method: "GET",
      params: {
        phone
      }
    });
  }
  /**
   * 提交数据
   */
  static submit(data: submitRequest) {
    return request('/user/event/ ', {
      method: "POST",
      formData: true,
      data: data
    });
  }
}