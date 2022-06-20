/**
 * 
 * @param {*} file image file
 * @param {*} callBack callback function
 * @param {*} convertToBase64 file to base64
 */

const compressImage = (file, callBack, convertToBase64 = false) => {
    let reader = new FileReader();
    reader.readAsDataURL(file); // 读出 base64
    reader.onloadend = ev => {
        let dataURL = ev.target.result;
        // 下面逻辑处理
        let file_mb = dataURL.length / (1024.0 * 1024);

        console.log(2, file_mb);

        let img = new Image();
        img.src = dataURL;
        if (file_mb <= 1) {
            return convertToBase64 ? callBack(ev.target.result) : callBack(file)
        }
        img.onload = () => {
            const canvas = document.createElement('canvas');
            if (!canvas) {
                return convertToBase64 ? callBack(ev.target.result) : callBack(file)
            }
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return convertToBase64 ? callBack(ev.target.result) : callBack(file)
            }
            const width = img.width;
            const height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            if (convertToBase64) {
                const base64 = canvas.toDataURL('image/jpeg', 0.4)  // 图片的质量默认是0.4，取值是 0 到 1，如果超出取值范围，将会使用默认值 0.92
                console.log(base64)
                callBack(base64)
                return
            }
            canvas.toBlob(function (blob) {
                console.log(blob)
                callBack(blob)
            }, 'image/jpeg', 0.4)
        };
    };
};

export default compressImage;