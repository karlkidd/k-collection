let userAgent = ()=>{
    return window.navigator.userAgent
}

let ua = userAgent().toLowerCase();
// 判断微信浏览器
// ua.match(/MicroMessenger/i) == "micromessenger"
const isWx = ua.indexOf('micromessenger') > -1;
// ios
let uaType;
if (ua.indexOf('iphone') > -1 || ua.indexOf('ipod') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('appleWebKit') > -1) {
    uaType = 'ios';
} else if (ua.indexOf('android') > -1 || ua.indexOf('adr') > -1) {
    uaType = 'android';
} else {
    uaType = 'other';
}

const isIos = uaType === 'ios';
const isAdr = uaType === 'android';

export default {
    uaInfo: uaType,
    wx: isWx,
    ios: isIos,
    android: isAdr,
    wxIos: isWx && isIos,
    wxAdr: isWx && isAdr,
    userAgent:userAgent()
};
