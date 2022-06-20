/**
 * 
 * @param {*} value text 
 * @returns 
 */
function copyText(value){
    let oInput = document.createElement("input");
    oInput.value = value;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {//兼容ios
      oInput.setSelectionRange(0, oInput.value.length);
    }
    document.execCommand("Copy"); // 执行浏览器复制命令
    document.body.removeChild(oInput);
    return new Promise((resolve)=>{
      resolve(value);
    })
}

export default copyText;