var fs = require("fs");
//引用imageinfo模块
var imageinfo = require("imageinfo");

var filesList = []
// 自己改进的
function readSubFileList(path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach(function (itm, index) {
        var stat = fs.statSync(path + itm);

        if (stat.isDirectory()) {
            //递归读取文件

            var obj = {};
            obj.path = itm;
            obj.filename = [];
            filesList.push(obj);
            readSubFileList(path + itm + "/", obj.filename)
        } else {

           // 不是文件夹就存进obj.filename|filesList
            filesList.push(itm) //名字

        }


    })

}

var getFiles = {
//获取文件夹下的所有文件
    getFileList: function (path) {
        var filesList = [];
        readFileList(path, filesList);
        return filesList;
    },
    getSubFileList:function (path) {
        var filesList = [];
        readSubFileList(path, filesList);
        return filesList;
    },
    //获取文件夹下的所有图片
    getImageFiles: function (path) {
        var imageList = [];

        this.getFileList(path).forEach((item) => {
            var ms = imageinfo(fs.readFileSync(item.path + item.filename));

            ms.mimeType && (imageList.push(item.filename))
        });
        return imageList;

    },
    //获取文件夹下所有非图片的文件 2018年8月18日 19:15:13更新
    getTxtList: function (path) {


        return this.getFileList(path).filter((item) => {
            var ms = image(fs.readFileSync(item.path + item.filename));

            return !ms.mimeType
        });

    }
};

readSubFileList('./images/',filesList)

console.log(filesList)