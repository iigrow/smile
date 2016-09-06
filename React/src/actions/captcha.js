/*
 * @Author: star 
 * @Date: 2016-09-05 16:34:15 
 * @Last Modified by: star
 * @Last Modified time: 2016-09-06 22:59:18
 */

import {
  GET_SMS_CAPTCHA
} from '../constants/ActionTypes';

export const getSMSCaptcha = (tel, callback) => {
  return dispatch => {
    return fetch(`/api/captcha/sms/${tel}`).then(res => {
      res.json().then(data => {
        callback && callback(data);
      });
    }).catch(err => {
      console.log(err)
    })
  }
}