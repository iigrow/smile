var https = require('https');

module.exports.get = function () {
  // this.query.
  https.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code`, res => {
    let data = {
      'access_token': 'ACCESS_TOKEN',
      'expires_in': 7200,
      'refresh_token': 'REFRESH_TOKEN',
      'openid': 'OPENID',
      'scope': 'SCOPE'
    }
  })

  https.get(`https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN`, res => {
    let data =
      {
        'openid': 'OPENID',
        'nickname': 'NICKNAME',
        'sex': '1',   // 1 男 2 女
        'province': 'PROVINCE',
        'city': 'CITY',
        'country': 'COUNTRY',
        'headimgurl': 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46',
        'privilege': ['PRIVILEGE1', 'PRIVILEGE2'],
        'unionid': 'o6_bmasdasdsad6_2sgVt7hMZOPfL'
      }
  })
}