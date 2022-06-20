/**
 * 列表数据导出
 * @param httpPrivate//接口类
 * @param listParams 查询参数，页码等等
 * @param ExcelName 导出文件名
 * @param thData 表头 , 隔开
 * @param interfaceUrl 轮询查询接口
 * @param limit 最大查询条数
 * @param callBackUfn 查询结束回调函数（下载）非必要参数，配合下文的_使用this
 * @param _this 调用的作用域，做导出回调用，例如导出成功关闭loading等，非必要参数
 * @param thKeyList 表头定制，有的表头导出不需要，则自定义传入，然后匹配key值，非必要参数
 * @param exportStr 分页轮巡查询的表头累加数据，这里需要从调用位置传空字符串即可
 */

function kExportExcel(interfaceParameters) {
    let listParamsClone={};
    listParamsClone={...interfaceParameters.listParams}//深拷贝，避免修改调用位置的分页数量
    listParamsClone.limit = interfaceParameters.limit;
    let exportTotalPages='';
    interfaceParameters.httpPrivate.post(interfaceParameters.interfaceUrl, listParamsClone).subscribe((res) => {
        if (res.errno == 0) {
            exportTotalPages = res.data.paging.totalPages;
            //要导出的数据
            let dataStr = res.data.body
            if (listParamsClone.page == 1) {
                //列标题，逗号隔开，每一个逗号就是隔开一个单元格
                interfaceParameters.exportStr = `${interfaceParameters.thData}`;
            }
            //增加\t为了不让表格显示科学计数法或者其他格式
            for (let i = 0; i < dataStr.length; i++) {
                interfaceParameters.exportStr += `${(listParamsClone.page - 1) * listParamsClone.limit + i + 1 + '\t'},`;
                if(interfaceParameters.thKeyList&&interfaceParameters.thKeyList.length>0){
                    interfaceParameters.thKeyList.forEach(element => {
                        interfaceParameters.exportStr += `${dataStr[i][element] + '\t'},`
                    });
                }else{
                    for (var key in dataStr[i]){
                        interfaceParameters.exportStr += `${dataStr[i][key] + '\t'},`
                    }
                }
                interfaceParameters.exportStr += '\n';
            }
            if (listParamsClone.page < exportTotalPages) {
                listParamsClone.page++;
                setTimeout(() => {
                    kExportExcel(interfaceParameters)  // 回调本身
                }, 500);
            } else {
                if(interfaceParameters._this){
                    interfaceParameters._this.callBackUfn(interfaceParameters._this)//结束回调，例如loading结束加载
                }
                //encodeURIComponent解决中文乱码
                let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(interfaceParameters.exportStr);
                //通过创建a标签实现
                var link = document.createElement("a");
                link.href = uri;
                //对下载的文件命名
                link.download = `${interfaceParameters.ExcelName}.csv`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    });
}



export default kExportExcel