import ajax from './ajax'
//首页
export const reqMenuList = () => ajax('/homemenu')
//分类
export const reqCategoryList = () => ajax('/categorysList')
//品牌
export const reqBrand = () => ajax('/brand')
//所有品牌
export const reqAllBrand = () => ajax('/allBrand')

// 获取图片验证码
export const reqCaptchas = () => ajax('/api/captcha')


 //账号密码登录
export const pwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')

//发送短信验证码
export const sendCode = phone => ajax('/api/sendcode', {phone})

//手机号验证码登录
export const smsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

