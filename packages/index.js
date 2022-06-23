
import RegExp from './common-js/regExp';
import CompressImage from './common-js/compressImg';
import UserAgent from './common-js/uaEnv';
import Cookies from './common-js/cookie';
import CopyText from './common-js/copy';
import ExportExcel from './common-js/exportExcel';
import DateFormat from "./common-js/dateFormat";
import authjs from './common-js/auth';

const packageInfo = require('../package.json');
// console.log(packageInfo,'===pa')

const getVersion = ()=>packageInfo.version;
const getName = ()=> packageInfo.name;
const getAuthor = ()=> packageInfo.author;
const getLicense = ()=> packageInfo.license;


export const kRegExp = RegExp;// 正则
export const kCompressImage = CompressImage; // 图片压缩
export const kUserAgent = UserAgent;// 浏览器ua
export const kCookies = Cookies;// 设置cookie
export const kCopyText = CopyText; // 浏览器点击复制
export const kExportExcel = ExportExcel; // 前端导出表格
export const kDateFormat = DateFormat; //日期格式化
export const kCloneDeep = authjs.kCloneDeep; // 数组深克隆
export const kDebounce = authjs.kDebounce; //防抖
export const kThrottle = authjs.kThrottle; //截流
export const version = getVersion();
export const name = getName();
export const author = getAuthor();
export const license = getLicense();

const kCollection =  {
    install: function (Vue) {
        Vue.prototype.$kCollectionJS = this;
    },
    kRegExp,
    kCompressImage,
    kUserAgent,
    kCookies,
    kCopyText,
    kExportExcel,
    kDateFormat,
    kCloneDeep,
    kDebounce,
    kThrottle,
    version,
    name,
    author,
    license,
};


export default kCollection