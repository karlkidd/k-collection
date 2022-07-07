import regFun from "./regExp";

/**
 * Default 7 days
 * @param {*} time hours
 */
const expiresFun = (time)=>{
  let times = '; max-age=' + (60 * 60 * 24 * 7 );
  if(regFun.numReg.test(time)){
    times = '; max-age=' + (60 * 60 * Number(time))
  }
  // times = '; expires=' + expireTimes.toUTCString();
  return times;
}

/**
 * Default location.host
 * @param {*} domains host
 */
const domainFun = (domains)=>{
  let domainVal = domains || location.hostname;
  domainVal = '; domain=' + domainVal;
  return domainVal;
}

/**
 * Default path '/'
 * @param {*} domains host
 */
const pathFun = (paths)=>{
  let pathVal = paths || '/';
  pathVal = '; path=' + pathVal;
  return pathVal;
}

/**
 * harmony default export
 */
const handle_cookie = ({
  install: function (Vue) {
    Vue.prototype.$cookies = this;
  },
  setCookie(key,value,expires,domains,path) {
    if(key == null){
      throw Error('You will use setCookie function, key must be Object or String, but you set key is null, Please check you code');
    }else if(typeof key == 'undefined'){
      throw Error('You will use setCookie function, key must be Object or String, but you set key is undefined, Please check you code');
    }else if(typeof key == 'object'){
      if(typeof key.key == 'string' && typeof key.value == 'string'){
        doCookie(key.key, key.value, key.expires, key.domains, key.path,)
      }else{
        throw Error('You will use setCookie function, key and value must be String, Please check you code');
      }
    }else{
      if(typeof key == 'string' && typeof value == 'string'){
        doCookie(key, value, expires, domains, path,)
      }else{
        throw Error('You will use setCookie function, key and value must be String, Please check you code');
      }
    }
  },
  setCookieObj(obj) {
    if(obj == null){
      throw Error('You will use setCookie function, key must be Object, but you set key is null, Please check you code');
    }else if(typeof obj == 'undefined'){
      throw Error('You will use setCookie function, key must be Object, but you set key is undefined, Please check you code');
    }else if(typeof obj == 'string'){
      throw Error('You will use setCookie function, key must be Object, but you set key is string, Please check you code');
    }else{
      if(typeof obj.key == 'string' && typeof obj.value == 'string'){
        doCookie(obj.key, obj.value, obj.expires, obj.domains, obj.path,)
      }else{
        throw Error('You will use setCookie function, key and value must be String, Please check you code');
      }
    }
  },
  getCookie(name) {
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    var arr = document.cookie.match(reg);
    return arr ? unescape(arr[2]) : null;
  },
  delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  },
  isKey(key) {
    let res = this.keys().includes(key);
    return res;
  },
  cookiesObj() {
    let _objs = []
    let _string = document.cookie
    if (_string){
      let oArr = _string.split('; ')
      for(let i in oArr){
        let item = oArr[i].split('=');
        _objs[item[0]] = item[1]
      }
    }
    return _objs;
  },
  getKeys() {
    let objs = this.cookiesObj();
    let _keys = Object.keys(objs)
    return _keys;
  },
});


/**
 * 
 * @param {*} obj 
 */
const doCookie = (key,value,expires,domains,path)=>{
  value = value || '';
  expires = expiresFun(expires);
  domains = domainFun(domains);
  path = pathFun(path);
  document.cookie = key + '=' + value + '; ' + expires + domains + path;
}

export default handle_cookie;