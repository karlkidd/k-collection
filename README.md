#### Install

```js
 npm install --save k-collection
```

#### Example

```js
// if you use require
const  { kRegExp, kCompressImage, kUserAgent, kCookies, kCopyText, kExportExcel, kDateFormat, kCloneDeep, kDebounce, kThrottle, version, name, author, license } = require('k-collection');
// or
const kCollection = require('k-collection');
```

or

```js
// if you use import, you can import
import { kRegExp, kCompressImage, kUserAgent, kCookies, kCopyText, kExportExcel, kDateFormat, kCloneDeep, kDebounce, kThrottle, version, name, author, license } from  'k-collection';
// or
import kCollection from  'k-collection';
```

#### Api

```js
{
  author: "karlkidd",
  install: ƒ (Vue),
  kCloneDeep: v => {…},
  kCompressImage: (file, callBack, convertToBase64 = false,ratio = 0.4) => {…},
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

###### compress image

```js
/** files is image; callback is function; convertToBase64 is default false; tatio use canvas.toDataURL('image/jpeg', ratio), must be 0-1;
*		It is found that on the apple 12 and apple 13 models, the first picture is compressed into a blank picture;
*		If the first image is detected during uploading, the method should be executed in advance
*		kCompressImage(file.file,function(){},true)
*/
if(fileList.length == 1){
  kCompressImage(file.file,function(){},true,0.4)
}

kCompressImage(file,callbackFun,convertToBase64,tatio);

callbackFun(res){
  console.log(res)
}
```

###### cookies

```js
{
  cookiesObj: ƒ cookiesObj() // get all cookies，is a Object
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
* @param {Number,String} expires (hours,default 7 * 24 hours)
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

###### copy text

```js
// Only string can be passed
kCopyText(string).then(()=>{
  alert('copy success')
})
```

###### debounce / throttle

```js
// <button onClick='myDebounce()'>myDebounce</button>
function toDo(){
  api.post()
};
// the function must be have this
const myDebounce = kDebounce(function(){
  toDo()
},100)
const myThrottle = kThrottle(function(){
  toDo()
},100)
```

