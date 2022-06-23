#### 安装

```js
 npm install --save k-collection
```

#### 示例

```js
// 使用require方式
const kCollection = require('k-collection');
const  { kRegExp, kCompressImage, kUserAgent, kCookies, kCopyText, kExportExcel, kDateFormat, kCloneDeep, kDebounce, kThrottle, version, name, author, license } = require('k-collection');
```

```js
// 使用import方式
import { kRegExp, kCompressImage, kUserAgent, kCookies, kCopyText, kExportExcel, kDateFormat, kCloneDeep, kDebounce, kThrottle, version, name, author, license } from  'k-collection';
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

// 可以直接使用vue.use全局安装 
vue.use(kCollection)

```

###### 图片压缩

```js
/** 图片文件;回调方法;是否转换为base64(true为base64，默认false);压缩率：canvas.toDataURL('image/jpeg', ratio)，必须在0-1之间
*   发现在苹果12，苹果13机型上，会出现首张图片压缩后为空白图片的情况；
*		如果在上传的时候，检测到是首张图片，需要对该方法提前执行一遍
* 	kCompressImage(file.file,function(){},true)
*/
if(fileList.length == 1){
  kCompressImage(file.file,function(){},true,0.4)
}

kCompressImage(file,callbackFun,convertToBase64,ratio);

callbackFun(res){
  console.log(res)
}
```

###### 操作cookie

```js
{
  cookiesObj: ƒ cookiesObj() // 获取所有cookie，是个对象
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
* @param {Number,String} expires (小时，默认7天)
* @param {*} domains
* @param {*} path 
*/
// 设置cookie
kCookies.setCookie(key,value,expires,domains,path)
// 或
kCookies.setCookie({key,value,expires,domains,path})
//或
kCookies.setCookieObj({key,value,expires,domains,path})

// 获取cookie、删除cookie
kCookies.getCookieObj(name)
kCookies.delCookieObj(name)
```

###### 文本拷贝

```js
// 只能传字符串
kCopyText(string).then(()=>{
  alert('copy success')
})
```

###### 防抖、节流

```js
// <button onClick='myDebounce()'>myDebounce</button>
function toDo(){
  api.post()
};
// 必须使用能获取到this的方法
const myDebounce = kDebounce(function(){
  toDo()
},100)
const myThrottle = kThrottle(function(){
  toDo()
},100)
```

