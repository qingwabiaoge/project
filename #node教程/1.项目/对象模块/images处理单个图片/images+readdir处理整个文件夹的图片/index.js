var fs = require("fs");


var images = require("images");
const path = require('path')

var filesList = []

function readFileList(imagesDir, filesList) {
    var files = fs.readdirSync(imagesDir);
    files.forEach(function (item) {
        //图片文件夹完整路径

        images(imagesDir + item)                     //Load image from file
        //加载图像文件
            .size(400)                          //Geometric scaling the image to 400 pixels width
            //等比缩放图像到400像素宽
            // .draw(images("1.jpg"), 100, 100)   //Drawn logo at coordinates (10,10)
            //在(10,10)处绘制Logo
            .save(path.join(imagesDir + '../400x400/') + item, {               //Save the image to a file,whih quality 50
                quality: 90                    //保存图片到文件,图片质量为50
            });

    })


}

readFileList('./images/', filesList)
