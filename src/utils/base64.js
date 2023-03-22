let base64={
    getBase64Str(file) {
        return new Promise(resolve => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload= e =>{
                //e也是一个大对象，包含了e.file转成的base64格式字符串
                resolve(e.target.result);
            }
        });

    }
}

export default base64;