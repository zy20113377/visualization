/* eslint-disable */
import { TRACE_HOST } from '../environment/index';

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid.replace(/-/g, "");
}

//获取URL参数
function getParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return false;
}
//事件追踪
function traceEvent(reporturl,cookie, action, event_name, event_value='', event_desc='', 
  url=window.location.href, event_order=1) {
  var envent ={
      "cookie": cookie,
      "action": action,
      "event_name": event_name,
      "event_value": event_value,
      "event_order": event_order,
      "event_desc": event_desc,
      "url": url
   }
   $.ajax({
      type: "POST",
      url: TRACE_HOST + reporturl,
      contentType: "application/json;charset=utf-8",
      data:JSON.stringify(envent),
      dataType:"json",         
      success:function (message) {
          console.log("traceEvent-success:\n"+message);
      },
      error:function (message) {
          console.log("traceEvent-error:\n"+message);
      }
  });

}

function getCookie(name){
  return $.cookie(name);
}

//初始化页面
$(function () {

  if(!$.cookie('uuid')) {
    $.cookie('uuid', uuid(), { expires: 365, path: '/' });
  }
  var campaign = getParam("utm_campaign");
  var source = getParam("utm_source");
  var medium = getParam("utm_medium");
  console.log("juchutil-campaign:\n"+campaign);
  console.log("juchutil-source:\n"+source);
  console.log("juchutil-medium:\n"+medium);
  if(source && campaign && medium) {
    $.cookie('utm_source', source, { expires: 1 });
    $.cookie('utm_campaign', campaign, { expires: 1 });
    $.cookie('utm_medium', medium, { expires: 1 });
    console.log("juchutil-cookiename:\n"+campaign+'-'+source+'-'+medium+'-times');
    if(!$.cookie(campaign+'-'+source+'-'+medium+'-times')) {
      $.cookie(campaign+'-'+source+'-'+medium+'-times', 0, { expires: 1 });
    }
  }
  //traceEvent(reporturl,cookie, action, event_name, event_value, event_desc, url);
  //traceEvent(reporturl, $.cookie('uuid'), 'pageload', 'pageload','','',url);
  traceEvent('/openapi/traceEvent', $.cookie('uuid'), 'pageload', 'pageload');
});

export { traceEvent, getCookie };