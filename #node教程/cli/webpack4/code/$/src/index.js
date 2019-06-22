require('@/dir/1.js')
require('./css/index.less')

import img from'./img/1.jpg'
var image = new Image();
image.src = img;
document.getElementById('app').appendChild(image)
console.log(image)