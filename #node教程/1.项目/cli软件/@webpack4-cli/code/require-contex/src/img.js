function list() {
    const r = require.context('./img/wood/', false, /\.(jpg)$/);
    const arr = r.keys()
    function getFileName(item) {
        const str1 = item.split('/')[item.split('/').length - 1]
        const str2 = str1.split('.')[0]
        return str2
    }

    return arr.map(item => ({img: r(item), title:getFileName(item)}))
}

console.log(list())