
let config = {
  appid:'',
  redirect_uri: '',
  response_type: 'code',
  scope: '',
  state: '' // 填写a-zA-Z0-9的参数值，最多128字节
};

const getAuthWeiXinURL = paramData =>{
  return `https://open.weixin.qq.com/connect/oauth2/authorize?${paramData.}#wechat_redirect`;
}

export const getOpenID = (returnUrl,state)=>{
  let cfg = Object.assign({},config,{
    redirect_uri: returnUrl,
    scope: 'snsapi_base',
    state: state
  })
  redirect(getAuthWeiXinURL(cfg))
}

export const registerWeiXin = (returnUrl,state) => {
  let cfg = Object.assign({},config,{
    redirect_uri: urlEncode(returnUrl),
    scope: 'snsapi_userinfo',
    state: state
  })
  redirect(getAuthWeiXinURL(cfg))
}
