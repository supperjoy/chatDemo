import requests from './request'
// 这里统一接口管理

/**
 * 
 * @returns 获取验证码
 */
export const reqCaptcha = ()=>requests({
    url:'/common/captcha',
    method:'get',
})

