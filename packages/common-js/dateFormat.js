/**
 *
 * @param fmt 时间格式 yyyy-MM-dd hh:mm:ss 中间分隔符可自定义，例如：yyyy/MM/dd hh:mm:ss yyyy年MM月dd日 hh时mm分ss秒
 * @param date 需要格式化的日期数据
 * @returns {*} 格式化后的数据
 */
function kDateFormat(fmt, date) {
    let ret;
    const opt = {
        "y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "h+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}


export default kDateFormat