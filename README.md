#### Install

```js
 npm install --save k-collection
```

#### Example

```js
// if you use require
const kCollection = require('k-collection');
console.log(kCollection,'=====kCollection')
```

or

```js
// if you use import, you can import
import { kCollection } from  'k-collection';
// or
import kCollection from  'k-collection';
console.log(kCollection,'=====kCollection')
```

#### Api

```js
{
  author: "karlkidd",
  install: ƒ (Vue),
  kCloneDeep: v => {…},
  kCompressImage: (file, callBack, convertToBase64 = false) => {…},
  kCookies: {install: ƒ, setCookie: ƒ, setCookieConfig: ƒ, getCookie: ƒ, delCookie: ƒ, isKey: ƒ, getKeys: ƒ, cookiesObj: ƒ},
  kCopyText: ƒ copyText(value),
  kDateFormat: ƒ kDateFormat(fmt, date),
  kDebounce: ƒ kDebounce(fn, wait=1000),
  kExportExcel: ƒ kExportExcel(interfaceParameters),
  kRegExp: {intReg: /^\d{1,}$/, floatReg: /^\d+\.\d+$/, numReg: /^[0-9.]+$/, IMEI: /^\d{15,17}$/, …},
  kThrottle: ƒ kThrottle(fn, delay=1000),
  kUserAgent: {uaInfo: 'other', wx: false, ios: false, android: false, wxIos: false, …},
  name: "k-collection",
  version: "0.0.01",
}

// If you want use in vue 
vue.use(kCollection)

```

###### kCompressImage

```js
kCompressImage(file,callbackFun,false);
callbackFun(res){
  console.log(res)
}
```

###### kCookies

```js
{
  cookiesObj: ƒ cookiesObj()
  delCookie: ƒ delCookie(name)
  getCookie: ƒ getCookie(name)
  getKeys: ƒ getKeys()
  install: ƒ (Vue)
  isKey: ƒ isKey(key)
  setCookie: ƒ setCookie(key,value,expires,domains,path)
  setCookieObj: ƒ setCookieObj(obj)
}
/** 
* @param {String} key
* @param {String} value  
* @param {Number,String} expires (hours)
* @param {*} domains
* @param {*} path 
* if you want set cookie 
*/
kCookies.setCookie(key,value,expires,domains,path)
// or
kCookies.setCookie({key,value,expires,domains,path})
//or
kCookies.setCookieObj({key,value,expires,domains,path})

// get cookie or delect cookie 
kCookies.getCookieObj(name)
kCookies.delCookieObj(name)
```

###### kCopyText

```js
kCopyText(string).then(()=>{
  alert('copy success')
})
```

