var obj = {};
function getFileName(dir) { //获得文件名
    const _arr = dir.split('/')
    return _arr[_arr.length - 1].split('.')[0]
}


function log (r) {
    r.keys().forEach(item => obj[getFileName(item)] = r(item));
}

log(require.r('./dir', true, /\.js$/));

console.log(obj)