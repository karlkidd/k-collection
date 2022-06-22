
import kRegExp from './common-js/regExp';
import kCompressImage from './common-js/compressImg';
import kUserAgent from './common-js/uaEnv';
import kCookies from './common-js/cookie';
import kCopyText from './common-js/copy';
import kExportExcel from './common-js/exportExcel';
import kDateFormat from "./common-js/dateFormat";
import authjs from './common-js/auth';

const packageInfo = require('../package.json');
// console.log(packageInfo,'===pa')

const getVersion = ()=>packageInfo.version;
const getName = ()=> packageInfo.name;
const getAuthor = ()=> packageInfo.author;
const getLicense = ()=> packageInfo.license;

export const kCollection =  {
    install: function (Vue) {
        Vue.prototype.$kCollectionJS = this;
    },
    kRegExp,// 正则
    kCompressImage, // 图片压缩
    kUserAgent, // 浏览器ua
    kCookies, // 设置cookie
    kCopyText, // 浏览器点击复制
    kExportExcel, // 前端导出表格
    kDateFormat, //日期格式化
    kCloneDeep:authjs.kCloneDeep, // 数组深克隆
    kDebounce:authjs.kDebounce, //防抖
    kThrottle:authjs.kThrottle, //截流
    version:getVersion(),
    name:getName(),
    author:getAuthor(),
    license:getLicense()
};


export default kCollection