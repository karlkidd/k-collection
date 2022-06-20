
/**
 * 深克隆
 * @param v//传入要操作的数组即可
 */
const kCloneDeep = v => {
    // 不是对象则返回原来的值，过滤掉Date和Regexp
    if (v === null) return v;
    if (typeof v !== "object") return v;
    if (v instanceof Date) return new Date(v);
    if (v instanceof RegExp) return new RegExp(v);
    const retObj = new v.constructor(); //  获取当前对象的构造器，新建一个空对象，Array/Object
    for (const key in v) {
        retObj[key] = kCloneDeep(v[key]);
    }
    return retObj;
};

/**
 * @desc  函数防抖，用于将多次执行变为最后一次执行
 * @param {function} fn - 需要使用函数防抖的被执行的函数。必传
 * @param {Number} wait - 多少毫秒之内触发，只执行第一次，默认1000ms。可以不传
 */
function kDebounce (fn, wait=1000) {
    let timer // 缓存一个定时器对象
    return function (...args) {
        // 当触发时定时器对象存在，则清除重新计时
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args) // 执行函数
            timer = null
        }, wait)
    }
}
/**
 * 节流函数, 在一段的时间只执行一次
 * @param fn 事件触发的操作
 * @param delay 间隔多少毫秒需要触发一次事件
 */
 function kThrottle (fn, delay=1000) {
    let flag
    return function (...args) {
        if (flag) return
        flag = setTimeout(() => {
           fn.apply(this, args) // doSomething
           clearTimeout(flag)
           flag = null
        }, delay)
    }
}

export default {
    kCloneDeep,
    kDebounce,
    kThrottle
}