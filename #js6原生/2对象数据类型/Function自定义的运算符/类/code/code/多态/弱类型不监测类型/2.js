//超类
function Animal(sound) {
    this.duckSinging = function () {
        console.log(sound);
    }
}

//两个类
var duck = new Animal('嘎嘎嘎')
var chicken = new Animal('嘎嘎嘎')


var choir = []; // 合唱团

//一个函数适合不同类
var joinChoir = function (animal) {//检查动物类型java静态类型是这样做的
    if (animal && typeof animal.duckSinging === 'function') {
        choir.push(animal);
        console.log('恭喜加入合唱团');
        console.log('合唱团已有成员数量:' + choir.length);
    }
};

joinChoir(duck); // 恭喜加入合唱团
joinChoir(chicken); // 恭喜加入合唱团