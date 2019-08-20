
# [Mongoose基础入门]



## 前面的话

　　Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具。本文将详细介绍如何使用Mongoose来操作MongoDB

 

### NodeJS驱动

　　在介绍Mongoose之前，首先介绍使用NodeJS操作MongoDB的方法

　　如果使用程序操作数据库，就要使用MongoDB驱动。MongoDB驱动实际上就是为应用程序提供的一个接口，不同的语言对应不同的驱动，NodeJS驱动不能应用在其他后端语言中

　　首先，安装mongodb

```
npm install mongodb
```

　　接着，使用require()方法引入mongodb数据库；然后使用MongoClient对象的connect()方法连接mongodb；最后通过node来对mongodb进行异步的增删改查

　　在mongodb数据库中建立db1数据库，然后通过以下代码，建立col集合，并插入{"a":1}文档

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongodb = require('mongodb');
mongodb.MongoClient.connect("mongodb://localhost/db1",function(err,db){
    if(!err){
        db.collection("col").insert({"a":1},function(err,result){
            if(!err){
                console.log(result);
            }
        })
    }
})
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　最后返回结果如下

```
{ result: { ok: 1, n: 1 },
  ops: [ { a: 1, _id: 597077dc271d092728caa362 } ],
  insertedCount: 1,
  insertedIds: [ 597077dc271d092728caa362 ] }
```

 

### 概述

　　Mongoose是NodeJS的驱动，不能作为其他语言的驱动。Mongoose有两个特点

　　1、通过关系型数据库的思想来设计非关系型数据库

　　2、基于mongodb驱动，简化操作

![img](img/740839-20170721123112068-7289503.jpg)

　　Mongooose中，有三个比较重要的概念，分别是Schema、Model、Entity。它们的关系是：Schema生成Model，Model创造Document，Model和Document都可对数据库操作造成影响，但Model比Document更具操作性

`　　Schema`用于定义数据库的结构。类似创建表时的数据定义(不仅仅可以定义文档的结构和属性，还可以定义文档的实例方法、静态模型方法、复合索引等)，每个`Schema`会映射到mongodb中的一个collection，`Schema`不具备操作数据库的能力

　　Model是由Schema编译而成的构造器，具有抽象属性和行为，可以对数据库进行增删查改。Model的每一个实例（instance）就是一个文档document

　　Document是由Model创建的实体，它的操作也会影响数据库

 

### 安装

　　安装[nodejs](http://www.cnblogs.com/xiaohuochai/p/6223044.html#anchor1)和[mongodb](http://www.cnblogs.com/xiaohuochai/p/7192222.html#anchor3)之后 ，使用npm来安装mongoose

```
npm install mongoose
```

![img](img/740839-20170720114229505-521707664.png)

　　安装成功后，就可以通过 require('mongoose') 来使用

 

### 连接数据库

　　使用require()方法在项目中包含mongoose后，接下来使用connect()方法连接到MongoDB数据库

##### connect()

```
mongoose.connect(url);
```

　　connect()最简单的使用方式，就是只要传入url参数即可，如下所示。连接到本地localhost的db1服务器

```
mongoose.connect('mongodb://localhost/db1');
```

　　如果还需要传递用户名、密码，则可以使用如下方式

```
mongoose.connect('mongodb://username:password@host:port/database?options...');
```

　　connect()方法还接受一个选项对象options，该对象将传递给底层驱动程序。这里所包含的所有选项优先于连接字符串中传递的选项

```
mongoose.connect(uri, options);
```

　　可用选项如下所示



```
 db            -数据库设置
 server        -服务器设置
 replset       -副本集设置
 user          -用户名
 pass          -密码
 auth          -鉴权选项
 mongos        -连接多个数据库
 promiseLibrary
```

```javascript
var options = {
  /*
  useNewUrlParser - 底层MongoDB已经废弃当前连接字符串解析器。因为这是一个重大的改变，添加了  useNewUrlParser标记如果在用户遇到bug时，允许用户在新的解析器中返回旧的解析器。除非连接阻止设置，否则你应  该设置useNewUrlParser: true。
*/
 useNewUrlParser: true,
    //估计是用新的索引方法
  useCreateIndex: true,
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' },
  user: 'myUserName',
  pass: 'myPassword'
}
mongoose.connect(uri, options);
```

　　如果要连接多个数据库，只需要设置多个url以`,`隔开，同时设置`mongos`为true

```
mongoose.connect('urlA,urlB,...', {
   mongos : true 
})
```

　　connect()函数还接受一个回调参数

```
mongoose.connect(uri, options, function(error) {

});
```

 　　执行下列代码后，控制台输出“连接成功”

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test", function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});
```

 　　如果开启鉴权控制，以用户名"u1"，密码"123456"登录'db1'数据库。执行代码后，控制台输出“连接成功”



```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});
```



##### disconnect() 

```
mongoose.disconnect()
```

　　 使用disconnect()方法可以断开连接

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});
setTimeout(function(){
    mongoose.disconnect(function(){
        console.log("断开连接");
    })
}, 2000);
```



![img](img/740839-20170720232404255-1533749216.gif)

 

### 连接数据库(官方5.2中文)

你可以用`mongoose.connect()`方法连接MongoDB。

```js
mongoos.connect('mongodb://localhost:27017/myapp');
```

这是连接运行在本地`myapp`数据库最小的值（27017）。如果连接失败，尝试用`127.0.0.1`代替`localhost`。
你可在`uri`中指定更多的参数：

```js
mongoose.connect('mongodb://username:password@host:port/database?options...');
```

有关更多细节查看mongodb连接字符串规范。

##### 操作缓冲

Mongoose可以让你立即使用模型，不用等待mongoose与MongoDB建立连接。

```js
mongoose.connect('mongodb://localhost:27017/myapp');
var MyModel = mongoose.model('Test', new Schema({ name: String }));
// Works
MyModel.findOne(function(error, result) { /* ... */ });
```

这是因为mongoose缓冲模型函数被立即调用。这种缓冲非常方便，但也是造成混淆的常见原因。默认情况下，如果你用一个没有连接的模型，Mongoose不会报错。

```js
var MyModel = mongoose.model('Test', new Schema({ name: String }));
// 将一直挂起，直到连接成功
MyModel.findOne(function(error, result) { /* ... */ });

setTimeout(function() {
  mongoose.connect('mongodb://localhost:27017/myapp');
}, 60000);
```

关闭schema的配置`bufferCommands`就可以禁用缓冲。如果在`bufferCommands`打开时有连接挂起，尝试关闭`bufferCommands`观察是否没有正确打开连接。你也可以全局禁用`bufferCommands`:

```js
mongoose.set('bufferCommands', false);
```

##### 选项

`connect`方法也接收一个`options`对象，它将传递给底层的MongoDB驱动程序。

```js
mongoose.connect(uri, options);
```

可以在MongoDB Node.js驱动文档上找到`connect()`中选项的完整列表。Mongoose在没有修改的情况下将选项传递给驱动，除以下展示的例外。

- `bufferCommands` - 这是mongoose中一个特殊的选项（不传递给MongoDB驱动），它可以禁用mongoose的缓冲机制
- `user/pass` - 身份验证的用户名和密码。这是mongoose中特殊的选项，它们可以等同于MongoDB驱动中的auth.user和auth.password选项。
- `autoIndex` - 默认的，mongoose在连接的时候自动会在schema中创建索引。这对开发来说非常好，但是对大型项目部署并不理想，因为索引的构建将会造成性能的降低。如果设置`autoIndex`为false,mongoose在连接的时候不会为任何与此连接相关的模型创建索引。
- `dbName` - 指定连接哪个数据库，并覆盖连接字符串中任意的数据库。如果你用mongodb+srv语法连接MongoDB Atlas，你应该用`dbName`去指定数据库，因为当前不能再字符串中使用。

以下是调用mongoose中一些重要的选项。

- `useNewUrlParser` - 底层MongoDB已经废弃当前连接字符串解析器。因为这是一个重大的改变，添加了`useNewUrlParser`标记如果在用户遇到bug时，允许用户在新的解析器中返回旧的解析器。除非连接阻止设置，否则你应该设置`useNewUrlParser: true`。
- `autoReconnect` - 当与MongoDB连接断开时，底层MongoDB驱动将会自动尝试重新连接。除非你是高级用户，想要控制他们自己的连接池，否则不要设置这个选项为`false`。
- `reconnectTries` - 如果你连接到单个服务器或mongos代理（而不是副本集），MongoDB驱动将会在`reconnectTries`时间内的每一个`reconnectInterval`毫秒内重新连接，直到最后放弃连接。当驱动放弃连接的时候，mongoose连接将会触发`reconnectFailed`事件。此选项不会对副本集连接执行任何操作。
- `reconnectInterval` - 查看`reconnectTries`
- `promiseLibrary` - 设置底层驱动的promise库
- `poolSize` - MongoDB驱动将为这个连接保持的最大socket数量。默认情况下，`poolSize`是5。请记住在MongoDB 3.4中，MongoDB每个socket每次只允许一个操作，如果你在进行中发现一些缓慢的查询阻止快的查询，你可以增加这个值。
- `connectTimeoutMS` - MongoDB驱动在初始化连接失败时会等待多久。一旦Mongoose成功连接，`connectTimeoutMS`就不再有效。
- `socketTimeoutMS` - MongoDB驱动在杀掉一个不活跃的socket时会等待多久。socket可能因为不再活动或长时间处于操作状态而处于不活跃状态。默认情况这个值是`30000`，如果你希望一些数据库操作运行事件超过20秒，你应该设置为最长运行时间的2-3倍。
- `family` - 是否用IPv4或IPv6进行连接。这个选项传递个Node.js的`dns.lookup()`函数。如果你不设置这个选项，MongoDB驱动首先会尝试IPv6如果失败再尝试IPv4。如果`mongoose.connect(uri)`花费很长时间，尝试`mongoose.connect(uri, {family: 4})`

例子：

```js
const options = {
  useNewUrlParser: true,//不选有警告
        //估计是用新的索引方法
  useCreateIndex: true,//不选有警告
 poolSize: 100, //必要 维护最多100个socket连接
  autoIndex: false, // 不创建索引
  reconnectTries: Number.MAX_VALUE, // 总是尝试重新连接
  reconnectInterval: 500, // 每500ms重新连接一次

  // 如果没有连接立即返回错误，而不是等待重新连接
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // 10s后放弃重新连接
  socketTimeoutMS: 45000, // 在45s不活跃后关闭sockets
  family: 4 // 用IPv4, 跳过IPv6
};
mongoose.connect(uri, options);
```

有关`connectTimeoutMS`和`socketTimeoutMS`的更多信息，查阅此页面

##### 回调

`connect()`函数也接收一个回调参数，其返回一个promise。

```js
mongoose.connect(uri, options, function(error) {
  // 检查错误，初始化连接。回调没有第二个参数。
});

// 或者用promise
mongoose.connect(uri, options).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
  err => { /** handle initial connection error */ }
);
```

##### 连接字符串选项

你还可以将连接字符串中的驱动选项指定为URI查询字符串中的部分参数。这只适用于传递给MongoDB驱动的选项。你不能在查询字符串中设置特定的Mongoose选项，类似`bufferCommands`

```js
mongoose.connect('mongodb://localhost:27017/test?connectTimeoutMS=1000&bufferCommands=false');
// 以上等同于:
mongoose.connect('mongodb://localhost:27017/test', {
  connectTimeoutMS: 1000
  // 注意mongoose将不会从查询字符串中提取`bufferCommands`
});
```

将选项放入查询字符串选项不利于阅读。但是你只需要单独设置URI，而不是分开对`socketTimeoutMS`，`connectTimeoutMS`等设置。最佳实践是在开发和生产中将不同的选项，类似`replicaSet`或`ssl`放到连接字符串中，保持不变的类似`connectTimeoutMS`或`poolsize`放到对象中。 MongoDB文档具有支持连接字符串选项的完整列表。

##### keepAlive注意

对于长时间运行的应用，通常谨慎的做法是用毫秒数来激活`keepAlive`。没有它，一段时间后你或许会看到“连接关闭”的错误，这似乎是没有理由的。如果确实是这样，在阅读完本文后，你或许决定开启`keepAlive`：

```js
mongoose.connect(uri, { keepAlive: true, keepAliveInitialDelay: 300000 });
```

`keepAliveInitialDelay`是在socket上启动`keepAlive`时要等待的毫秒数。从mongoose 5.2.0开始`keepAlive`默认被启动。

##### 副本集连接

要连接到一个副本集需要通过逗号分隔的主机列表而不是单个主机。

```js
mongoose.connect('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]' [, options]);
```

例如：

```js
mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');
```

连接一个单点副本集，指定`replicaSet`选项

```js
mongoose.connect('mongodb://host1:port1/?replicaSet=rsName');
```

##### Multi-mongos支持

你可以连接多个mongos实例，以便于分片集群中的高可用行。在mongoose 5.x中你不需要传递任何选项去连接多个mongos。

```js
// 连接2个服务器
mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);
```

##### 多连接

到目前为止我们已经用mongoose的默认连接来连接上MongoDB。有时我们需要对mongo开放多个连接，每个具有不同的读/写设置，或者只是可能针对不同的数据库。在这些情况下，我们可以使用`mongoose.createConnection()`，他接受上面已经介绍过的所有参数，并返回一个新的连接给你。

```js
const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);
```

这个连接对象用于创建和索引模型。模型总是作用于单个连接。当你调用`mongoose.connect()`时mongoose会创建一个默认连接。你可以用`mongoose.connection`访问默认连接。

##### 连接池

每个连接，无论由`mongoose.connect`或`mongoose.createConnection`创建都被内部配置连接池支持，默认最大值为5。可以修改连接选项来修改连接池大小。

```js
// With object options
mongoose.createConnection(uri, { poolSize: 4 });

const uri = 'mongodb://localhost:27017/test?poolSize=4';
mongoose.createConnection(uri);
```

##### 在v5.x中选项的改变

如果你在4.x中没有使用`useMongoClient`，当从4.x升级到5.x的时候，你或许会收到以下弃用警告：

```
the server/replset/mongos options are deprecated, all their options are supported at the top level of the options object
```

在较早版本的MongoDB驱动中，必须为服务器连接、副本集连接和mongos连接指定不同的选项：

```js
mongoose.connect(myUri, {
  server: {
    socketOptions: {
      socketTimeoutMS: 0,
      keepAlive: true
    },
    reconnectTries: 30
  },
  replset: {
    socketOptions: {
      socketTimeoutMS: 0,
      keepAlive: true
    },
    reconnectTries: 30
  },
  mongos: {
    socketOptions: {
      socketTimeoutMS: 0,
      keepAlive: true
    },
    reconnectTries: 30
  }
});
```

在mongoose v5.x中可以在顶级声明这些，不需要额外的嵌套，这里列出了所有支持的选项。

```js
// Equivalent to the above code
mongoose.connect(myUri, {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
});
```





### Schema

　　Schema主要用于定义MongoDB中集合Collection里文档document的结构　　

　　定义Schema非常简单，指定字段名和类型即可，支持的类型包括以下8种



```
String      字符串
Number      数字    
Date        日期
Buffer      二进制
Boolean     布尔值
Mixed       混合类型
ObjectId    对象ID    
Array       数组
```



　　通过mongoose.Schema来调用Schema，然后使用new方法来创建schema对象



```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```



　　[注意]创建Schema对象时，声明字段类型有两种方法，一种是首字母大写的字段类型，另一种是引号包含的小写字段类型

```
var mySchema = new Schema({title:String, author:String});
//或者 
var mySchema = new Schema({title:'string', author:'string'});
```

　　如果需要在Schema定义后添加其他字段，可以使用add()方法

```
var MySchema = new Schema;
MySchema.add({ name: 'string', color: 'string', price: 'number' });
```

##### timestamps

　　在schema中设置timestamps为true，schema映射的文档document会自动添加createdAt和updatedAt这两个字段，代表创建时间和更新时间

```
var UserSchema = new Schema(
  {...},
  { timestamps: true }
);
```

##### _id

　　每一个文档document都会被mongoose添加一个不重复的_id，_id的数据类型不是字符串，而是ObjectID类型。如果在查询语句中要使用_id，则需要使用findById语句，而不能使用find或findOne语句



##### 文档验证

　　为什么需要文档验证呢？以一个例子作为说明，schema进行如下定义

```
var schema = new mongoose.Schema({ age:Number, name: String,x:Number,y:Number});  
```

　　如果不进行文档验证，保存文档时，就可以不按照Schema设置的字段进行设置，分为以下几种情况

　　1、缺少字段的文档可以保存成功

```
var temp = mongoose.model('temp', schema);
new temp({age:10}).save(function(err,doc){
    //{ __v: 0, age: 10, _id: 597304442b70086a1ce3cf05 }
    console.log(doc);
}); 
```

　　2、包含未设置的字段的文档也可以保存成功，未设置的字段不被保存

```
new temp({age:100,abc:"abc"}).save(function(err,doc){
    //{ __v: 0, age: 100, _id: 5973046a2bb57565b474f48b }
    console.log(doc);
}); 
```

　　3、包含字段类型与设置不同的字段的文档也可以保存成功，不同字段类型的字段被保存为设置的字段类型

```
new temp({age:true,name:10}).save(function(err,doc){
    //{ __v: 0, age: 1, name: '10', _id: 597304f7a926033060255366 }
    console.log(doc);
}); 
```

　　而通过文档验证，就可以避免以下几种情况发生

　　文档验证在SchemaType中定义，格式如下

```
{name: {type:String, validator:value}}
```

　　常用验证包括以下几种



```
required: 数据必须填写
default: 默认值
validate: 自定义匹配
min: 最小值(只适用于数字)
max: 最大值(只适用于数字)
match: 正则匹配(只适用于字符串)
enum:  枚举匹配(只适用于字符串)
```



###### required

　　将age设置为必填字段，如果没有age字段，文档将不被保存，且出现错误提示



```
var schema = new mongoose.Schema({ age:{type:Number,required:true}, name: String,x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({name:"abc"}).save(function(err,doc){
    //Path `age` is required.
    console.log(err.errors['age'].message);
}); 
```



###### default

　　设置age字段的默认值为18，如果不设置age字段，则会取默认值



```
var schema = new mongoose.Schema({ age:{type:Number,default:18}, name:String,x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({name:'a'}).save(function(err,doc){
    //{ __v: 0, name: 'a', _id: 59730d2e7a751d81582210c1, age: 18 }
    console.log(doc);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

###### min | max

　　将age的取值范围设置为[0,10]。如果age取值为20，文档将不被保存，且出现错误提示

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var schema = new mongoose.Schema({ age:{type:Number,min:0,max:10}, name: String,x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({age:20}).save(function(err,doc){
    //Path `age` (20) is more than maximum allowed value (10).
    console.log(err.errors['age'].message);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

###### match

　　将name的match设置为必须存在'a'字符。如果name不存在'a'，文档将不被保存，且出现错误提示

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var schema = new mongoose.Schema({ age:Number, name:{type:String,match:/a/},x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({name:'bbb'}).save(function(err,doc){
    //Path `name` is invalid (bbb).
    console.log(err.errors['name'].message);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

###### enum

　　将name的枚举取值设置为['a','b','c']，如果name不在枚举范围内取值，文档将不被保存，且出现错误提示

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var schema = new mongoose.Schema({ age:Number, name:{type:String,enum:['a','b','c']},x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({name:'bbb'}).save(function(err,doc){
    //`bbb` is not a valid enum value for path `name`.
    console.log(err.errors['name'].message);

}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

###### validate

　　validate实际上是一个函数，函数的参数代表当前字段，返回true表示通过验证，返回false表示未通过验证。利用validate可以自定义任何条件。比如，定义名字name的长度必须在4个字符以上

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var validateLength = function(arg){
    if(arg.length > 4){
        return true;
    }
    return false;
};
var schema = new mongoose.Schema({ name:{type:String,validate:validateLength}, age:Number,x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({name:'abc'}).save(function(err,doc){
    //Validator failed for path `name` with value `abc`
    console.log(err.errors['name'].message);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

##### 前后钩子

　　前后钩子即pre()和post()方法，又称为中间件，是在执行某些操作时可以执行的函数。中间件在schema上指定，类似于静态方法或实例方法等

　　可以在数据库执行下列操作时，设置前后钩子

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
    init
    validate
    save
    remove
    count
    find
    findOne
    findOneAndRemove
    findOneAndUpdate
    insertMany
    update
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

###### pre()

　　以find()方法为例，在执行find()方法之前，执行pre()方法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var schema = new mongoose.Schema({ age:Number, name: String,x:Number,y:Number});  
schema.pre('find',function(next){
    console.log('我是pre方法1');
    next();
});
schema.pre('find',function(next){
    console.log('我是pre方法2');
    next();
});  
var temp = mongoose.model('temp', schema);
temp.find(function(err,docs){
    console.log(docs[0]);
})    
/*
我是pre方法1
我是pre方法2
{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 }
*/
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

###### post()

　　post()方法并不是在执行某些操作后再去执行的方法，而在执行某些操作前最后执行的方法，post()方法里不可以使用next()

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var schema = new mongoose.Schema({ age:Number, name: String,x:Number,y:Number});  
schema.post('find',function(docs){
    console.log('我是post方法1');
});
schema.post('find',function(docs){
    console.log('我是post方法2');
});
var temp = mongoose.model('temp', schema);
temp.find(function(err,docs){
    console.log(docs[0]);
}) 
/*
我是post方法1
我是post方法2
{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 }
 */   
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 　

### Model

　　模型Model是根据Schema编译出的构造器，或者称为类，通过Model可以实例化出文档对象document

　　文档document的创建和检索都需要通过模型Model来处理

##### model()

```
mongoose.model()
```

　　使用model()方法，将Schema编译为Model。model()方法的第一个参数是模型名称

　　[注意]一定要将model()方法的第一个参数和其返回值设置为相同的值，否则会出现不可预知的结果

　　Mongoose会将集合名称设置为模型名称的小写版。如果名称的最后一个字符是字母，则会变成复数；如果名称的最后一个字符是数字，则不变；如果模型名称为"MyModel"，则集合名称为"mymodels"；如果模型名称为"Model1"，则集合名称为"model1"

```
var schema = new mongoose.Schema({ num:Number, name: String, size: String});
var MyModel = mongoose.model('MyModel', schema);
```

##### 实例化文档document

　　通过对原型Model1使用new方法，实例化出文档document对象

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
        var schema = new mongoose.Schema({ num:Number, name: String, size: String});
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ size: 'small' });
        console.log(doc1.size);//'small'
    }
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### 文档保存

　　通过new Model1()创建的文档doc1，必须通过save()方法，才能将创建的文档保存到数据库的集合中，集合名称为模型名称的小写复数版

　　回调函数是可选项，第一个参数为err，第二个参数为保存的文档对象

```
save(function (err, doc) {})
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ num:Number, name: String, size: String });
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ size: 'small' });
        doc1.save(function (err,doc) {
        //{ __v: 0, size: 'small', _id: 5970daba61162662b45a24a1 }
          console.log(doc);
        })
    }
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　由下图所示，db1数据库中的集合名称为mymodels，里面有一个{size:"small"}的文档

![img](img/740839-20170721003232802-1510769411.png)

 

### 自定义方法

##### 实例方法

　　`Model`的实例是`document，`内置实例方法有很多，如 `save`，可以通过Schema对象的`methods`属性给实例自定义扩展方法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ num:Number, name: String, size: String });        
        schema.methods.findSimilarSizes = function(cb){
            return this.model('MyModel').find({size:this.size},cb);
        }
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name:'doc1', size: 'small' });
        var doc2 = new MyModel({ name:'doc2', size: 'small' });
        var doc3 = new MyModel({ name:'doc3', size: 'big' });
        doc1.save();
        doc2.save();
        doc3.save();
        setTimeout(function(){
            doc1.findSimilarSizes(function(err,docs){
                docs.forEach(function(item,index,arr){
                    //doc1
                    //doc2
                     console.log(item.name)        
                })
            })  
        },0)  
    }
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### 静态方法

　　通过Schema对象的`statics`属性给 `Model` 添加静态方法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ num:Number, name: String, size: String });        
        schema.statics.findByName = function(name,cb){
            return this.find({name: new RegExp(name,'i')},cb);
        }
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name:'doc1', size: 'small' });
        var doc2 = new MyModel({ name:'doc2', size: 'small' });
        var doc3 = new MyModel({ name:'doc3', size: 'big' });
        doc1.save();
        doc2.save();
        doc3.save();
        setTimeout(function(){
            MyModel.findByName('doc1',function(err,docs){
                //[ { _id: 5971e68f4f4216605880dca2,name: 'doc1',size: 'small',__v: 0 } ]
                console.log(docs);
            })  
        },0)  
    }
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　由上所示，实例方法和静态方法的区别在于，静态方法是通过Schema对象的`statics属性`给`model`添加方法，实例方法是通过Schema对象的`methods`是给document添加方法

##### 查询方法

　　通过schema对象的query属性，给model添加查询方法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        schema.query.byName = function(name){
            return this.find({name: new RegExp(name)});
        }
        var temp = mongoose.model('temp', schema);   
        temp.find().byName('huo').exec(function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
            // { _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 } ]
            console.log(docs);
        })  

    }           
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

### 新增文档

　　文档新增有三种方法，一种是使用上面介绍过的文档的save()方法，另一种是使用模型model的create()方法，最后一种是模型model的insertMany()方法

#####  new Model+save()

　　[注意]回调函数可以省略

```
save([options], [options.safe], [options.validateBeforeSave], [fn])
```

　　新建{age:10,name:'save'}文档，并保存

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        var temp = mongoose.model('temp', schema);
        //使用链式写法    
        new temp({age:10,name:'save'}).save(function(err,doc){
            //[ { _id: 59720bc0d2b1125cbcd60b3f, age: 10, name: 'save', __v: 0 } ]
            console.log(doc);        
        });         
    }           
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### create()

　　使用save()方法，需要先实例化为文档，再使用save()方法保存文档。而create()方法，则直接在模型Model上操作，并且可以同时新增多个文档

```
Model.create(doc(s), [callback])
```

　　新增{name:"xiaowang"}，{name:"xiaoli"}这两个文档

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        var temp = mongoose.model('temp', schema);   
        temp.create({name:"xiaowang"},{name:"xiaoli"},function(err,doc1,doc2){
            //{ __v: 0, name: 'xiaowang', _id: 59720d83ad8a953f5cd04664 }
            console.log(doc1); 
            //{ __v: 0, name: 'xiaoli', _id: 59720d83ad8a953f5cd04665 }
            console.log(doc2); 
        });       
    }           
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### insertMany()

```
Model.insertMany(doc(s), [options], [callback])
```

　　新增{name:"a"}，{name:"b"}这两个文档

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        var temp = mongoose.model('temp', schema);   
        temp.insertMany([{name:"a"},{name:"b"}],function(err,docs){
            //[ { __v: 0, name: 'a', _id: 59720ea1bbf5792af824b30c },
            //{ __v: 0, name: 'b', _id: 59720ea1bbf5792af824b30d } ]
            console.log(docs); 
        });       

    }           
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　 

### 文档查询

　　使用Mongoose来查找文档很容易，有以下3种方法可供选择

```
find()
findById()
findOne()
```

##### find()

　　第一个参数表示查询条件，第二个参数用于控制返回的字段，第三个参数用于配置查询参数，第四个参数是回调函数，回调函数的形式为function(err,docs){}

```
Model.find(conditions, [projection], [options], [callback])
```

　　在数据库db1的集合temps中存在如下数据

![img](img/740839-20170721205332902-619241772.png)

　　现在，使用find()方法找出所有数据

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        var temp = mongoose.model('temp', schema);
        temp.find(function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
            //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 18 },
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 },
            //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 } ]
            console.log(docs);
        })
    }
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　找出年龄大于18的数据

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
        temp.find({age:{$gte:18}},function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
            //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 18 },
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 }]
            console.log(docs);
        })
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　找出年龄大于18且名字里存在'huo'的数据

```
        temp.find({name:/huo/,age:{$gte:18}},function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 }]
            console.log(docs);
        })
```

　　找出名字里存在'a'的数据，且只输出'name'字段

　　[注意]_id字段默认输出

```
        temp.find({name:/a/},'name',function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai' },
            //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang' } ]
            console.log(docs);
        })
```

　　如果确实不需要_id字段输出，可以进行如下设置

```
        temp.find({name:/a/},{name:1,_id:0},function(err,docs){
            //[ { name: 'huochai' }, { name: 'wang' } ]
            console.log(docs);
        })
```

　　找出跳过前两条数据的其他所有数据

　　[注意]如果使用第三个参数，前两个参数如果没有值，需要设置为null

```
        temp.find(null,null,{skip:2},function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 },
            //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 } ]
            console.log(docs);
        })
```

##### findById()

```
Model.findById(id, [projection], [options], [callback])
```

　　显示第0个元素的所有字段

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
        var aIDArr = [];
        temp.find(function(err,docs){
            docs.forEach(function(item,index,arr){
                aIDArr.push(item._id);
            })
            temp.findById(aIDArr[0],function(err,doc){
                //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
                console.log(doc);
            })            
        })
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　以上代码的另一种写法如下

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
        var aIDArr = [];
        temp.find(function(err,docs){
            docs.forEach(function(item,index,arr){
                aIDArr.push(item._id);
            })
            temp.findById(aIDArr[0]).exec(function(err,doc){
                //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
                console.log(doc);
            })            
        })
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　只输出name字段

```
            temp.findById(aIDArr[0],{name:1,_id:0},function(err,doc){
                //{  name: 'huochai'}
                console.log(doc);
            })            
```

　　或者写成下面这种形式

```
            temp.findById(aIDArr[0],{name:1,_id:0}).exec(function(err,doc){
                //{  name: 'huochai'}
                console.log(doc);
            })            
```

　　输出最少的字段

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
            temp.findById(aIDArr[0],{lean:true},function(err,doc){
                //{ _id: 5971f93be6f98ec60e3dc86c }
                console.log(doc);
            })   
            temp.findById(aIDArr[0],{lean:true}).exec(function(err,doc){
                //{ _id: 5971f93be6f98ec60e3dc86c }
                console.log(doc);
            })     
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

#####  findOne()

　　该方法返回查找到的所有实例的第一个

```
Model.findOne([conditions], [projection], [options], [callback])
```

　　找出age>20的文档中的第一个文档

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
temp.findOne({age:{$gt : 20}},function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
    console.log(doc);
})   
temp.findOne({age:{$gt : 20}}).exec(function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
    console.log(doc);
})  
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　找出age>20的文档中的第一个文档，且只输出name字段

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
temp.findOne({age:{$gt : 20}},{name:1,_id:0},function(err,doc){
    //{ name: 'huochai' }
    console.log(doc);
})   
temp.findOne({age:{$gt : 20}},{name:1,_id:0}).exec(function(err,doc){
    //{ name: 'huochai' }
    console.log(doc);
})     
```



　　找出age>20的文档中的第一个文档，且输出包含name字段在内的最短字段



```
temp.findOne({age:{$gt : 20}},"name",{lean:true},function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai' }
    console.log(doc);
})   
temp.findOne({age:{$gt : 20}},"name").lean().exec(function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai' }
    console.log(doc);
})   
```

##### 文档查询中，常用的查询条件如下

```
$or　　　　或关系
$nor　　　 或关系取反
$gt　　　　大于
$gte　　　 大于等于
$lt　　　　小于
$lte　　　 小于等于
$ne　　　　不等于
$in　　　　在多个值范围内
$nin　　　 不在多个值范围内
$all　　　 匹配数组中多个值
$regex　　 正则，用于模糊查询
$size　　　匹配数组大小
$maxDistance　范围查询，距离（基于LBS）
$mod　　　　取模运算
$near　　　 邻域查询，查询附近的位置（基于LBS）
$exists　　 字段是否存在
$elemMatch　匹配内数组内的元素
$within　　　范围查询（基于LBS）
$box　　　　 范围查询，矩形范围（基于LBS）
$center　　　范围醒询，圆形范围（基于LBS）
$centerSphere　范围查询，球形范围（基于LBS）
$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素
```

```
Dog.find({name: 'xiaohua', age: {$in: [10, 20]}}, callback)
```

#####  $where

　　如果要进行更复杂的查询，需要使用$where操作符，$where操作符功能强大而且灵活，它可以使用任意的JavaScript作为查询的一部分，包含JavaScript表达式的字符串或者JavaScript函数

![img](img/740839-20170722141433964-2137472445.png)

　　使用字符串

```
temp.find({$where:"this.x == this.y"},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
}) 
temp.find({$where:"obj.x == obj.y"},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
}) 
```

　　使用函数

```
temp.find({$where:function(){
        return obj.x !== obj.y;
    }},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
}) 
```



```
temp.find({$where:function(){
        return this.x !== this.y;
    }},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
}) 
```



### 文档联表查询

　　下面以一个实例的形式来介绍下mongoose中的联表操作population

　　以类别category和文章post之间的关联为例

　　其中，category的model如下所示

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema(
  {
    number: { type: Number, required: true, index: true, unique: true, min:[1000000000, '位数不足'], max: [9999999999, '位数过长'] },
    name: { type: String, required: true, validate: { validator: (v) => v.trim().length, message: '名称不能为空'} },
    description: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    recommend: { type: Boolean },
    index: { type: Number }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Category', CategorySchema)
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　post的model如下所示

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    content: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', index: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }],
    imgUrl: { type: String },
    recommend: { type: Boolean },
    index: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', PostSchema)
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　在对类别的操作中， 都需要使用populate操作符显示出所包括的posts中的title

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
  /* 加载所有类别 */
  app.get('/categories', (req, res) => {
    Category.find().populate('posts','title').select("number name description recommend index").exec((err, docs) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      return res.status(200).json({code: 1, message: '获取类别成功', result: {docs}})
    })
  })

  /* 新增一个类别 */
  app.post('/categories', adminAuth, (req, res) => {
    new Category(req.body).save((err, doc) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      doc.populate({path:'posts',select:'title'}, (err, doc) => {
        if (err) return res.status(500).json({code:0, message: err.message, err})
        return res.status(200).json({code: 1, message: '新增成功', result: {doc}})
      })      
    })
  })
...
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　在对文章的操作中，则需要显示出类别category的number属性

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
  /* 按照id加载一篇文章 */
  app.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id).populate('category','number').exec((err, doc) => {
      if (err) return res.status(500).json({code:0, message:err.message, err})
      if (doc === null) return res.status(404).json({code:0, message:'文章不存在'})
      return res.status(200).json({code:1, message:'获取文章成功', result:{doc}})
    })
  })

  /* 加载所有文章 */
  app.get('/posts', (req, res) => {
    Post.find().select("title likes comments recommend imgUrl index").populate('category','number').sort("-createdAt").exec((err, docs) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      return res.status(200).json({code: 1, message: '获取文章成功', result: {docs}})
    })
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　在新增、更新和删除文章的操作中，都需要重建与category的关联

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
// 关联category的posts数组
fnRelatedCategory = _id => {
  Category.findById(_id).exec((err, categoryDoc) => {
    if (err) return res.status(500).json({ code: 0, message: err.message, err })
    if (categoryDoc === null) return res.status(404).json({code:0, message:'该类别不存在，请刷新后再试'})
    Post.find({ category: _id }).exec((err, postsDocs) => {
      if (err) return res.status(500).json({ code: 0, message: err.message, err })
      categoryDoc.posts = postsDocs.map(t => t._id)
      categoryDoc.save(err => {
        if (err) return res.status(500).json({ code: 0, message: err.message, err })
      })
    })
  })
}

  /* 按照id更新一篇文章 */
  app.put('/posts/:id', adminAuth, (req, res) => {
    Post.findById(req.params.id).exec((err, doc) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      if (doc === null) return res.status(404).json({code: 0, message: '文章不存在，请刷新后再试'})
      for (prop in req.body) {
        doc[prop] = req.body[prop]
      }
      doc.save((err) => {
        if (err) return res.status(500).json({code: 0, message: err.message, err})
        doc.populate({path:'category',select:'number'}, (err, doc) => {
          if (err) return res.status(500).json({code:0, message: err.message, err})
          fnRelatedCategory(doc.category._id)        
          return res.status(200).json({code: 1, message: '更新成功', result: {doc}})
        })
      })
    })
  })
...
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

### 文档查询后处理

　　常用的查询后处理的方法如下所示

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
sort     排序skip     跳过
limit    限制
select   显示字段
exect    执行count    计数distinct 去重
```





```
var schema = new mongoose.Schema({ age:Number, name: String,x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
temp.find(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
}) 
```



##### sort()

　　按age从小到大排序



```
temp.find().sort("age").exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　按x从小到大，age从大到小排列

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
temp.find().sort("x -age").exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{  _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### skip()

　　跳过1个，显示其他

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
temp.find().skip(1).exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
}); 
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### limit()

　　显示2个

```
temp.find().limit(2).exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 } ]
    console.log(docs);
}); 
```

##### select()

　　显示name、age字段，不显示_id字段

```
temp.find().select("name age -_id").exec(function(err,docs){
    //[ { name: 'huochai', age: 27 },{ name: 'wang', age: 18 },{ name: 'huo', age: 30 },{ name: 'li', age: 20 } ]
    console.log(docs);
}); 
temp.find().select({name:1, age:1, _id:0}).exec(function(err,docs){
    //[ { name: 'huochai', age: 27 },{ name: 'wang', age: 18 },{ name: 'huo', age: 30 },{ name: 'li', age: 20 } ]
    console.log(docs);
}); 
```

　　下面将以上方法结合起来使用，跳过第1个后，只显示2个数据，按照age由大到小排序，且不显示_id字段

```
temp.find().skip(1).limit(2).sort("-age").select("-_id").exec(function(err,docs){
    //[ { name: 'huochai', age: 27, x: 1, y: 2 },
    //{ name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
}); 
```

##### count()

　　显示集合temps中的文档数量

```
temp.find().count(function(err,count){
    console.log(count);//4
}); 
```

##### distinct()

　　返回集合*temps*中的x的值

```
temp.find().distinct('x',function(err,distinct){
    console.log(distinct);//[ 1, 2 ]
}); 
```

### 文档更新

　　文档更新可以使用以下几种方法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
update()
updateMany()find() + save()
updateOne()findOne() + save()
findByIdAndUpdate()
fingOneAndUpdate()
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### update()

　　第一个参数conditions为查询条件，第二个参数doc为需要修改的数据，第三个参数options为控制选项，第四个参数是回调函数

```
Model.update(conditions, doc, [options], [callback])
```

　　options有如下选项

按 Ctrl+C 复制代码

按 Ctrl+C 复制代码

　　数据库temps中现有数据如下

![img](img/740839-20170722102511714-669069142.png)

　　现在使用update()方法查询age大于20的数据，并将其年龄更改为40岁

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        var temp = mongoose.model('temp', schema);   
        temp.update({age:{$gte:20}},{age:40},function(err,raw){
            //{ n: 1, nModified: 1, ok: 1 }
            console.log(raw);
        })

    }           
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　经过以上操作，数据库结果如下。只有第一个数据更改为40岁。而第三个数据没有发生变化

![img](img/740839-20170722103806792-1390059167.png)

　　如果要同时更新多个记录，需要设置options里的multi为true。下面将名字中有'a'字符的年龄设置为10岁

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});        
        var temp = mongoose.model('temp', schema);   
        temp.update({name:/a/},{age: 10},{multi:true},function(err,raw){
            //{ n: 2, nModified: 2, ok: 1 }
            console.log(raw);
        })

    }           
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](img/740839-20170722105348933-1661967582.png)

　　如果设置的查找条件，数据库里的数据并不满足，默认什么事都不发生

```
temp.update({age:100},{name: "hundred"},function(err,raw){
    //{ n: 0, nModified: 0, ok: 1 }
    console.log(raw);
})
```

　　如果设置options里的upsert参数为true，若没有符合查询条件的文档，mongo将会综合第一第二个参数向集合插入一个新的文档

```
temp.update({age:100},{name: "hundred"},{upsert:true},function(err,raw){
    //{ n: 1, nModified: 0,upserted: [ { index: 0, _id: 5972c202d46b621fca7fc8c7 } ], ok: 1 }
    console.log(raw);
})
```

![img](img/740839-20170722111059777-351477732.png)

```
temp.update({name:/aa/},{age: 0},{upsert:true},function(err,raw){
    //{ n: 1, nModified: 0,upserted: [ { index: 0, _id: 5972c288d46b621fca7fdd8f } ], ok: 1 }
    console.log(raw);
})
```

![img](img/740839-20170722111300761-1926802847.png)

　　[注意]update()方法中的回调函数不能省略，否则数据不会被更新。如果回调函数里并没有什么有用的信息，则可以使用exec()简化代码

```
temp.update({name:/aa/},{age: 0},{upsert:true}).exec();
```

##### updateMany()

　　updateMany()与update()方法唯一的区别就是默认更新多个文档，即使设置{multi:false}也无法只更新第一个文档

```
Model.updateMany(conditions, doc, [options], [callback])
```

　　将数据库中名字中带有'huo'的数据，年龄变为50岁

```
temp.updateMany({name:/huo/},{age:50},function(err,raw){
    //{ n: 2, nModified: 2, ok: 1 }
    console.log(raw);
});
```

![img](img/740839-20170722112834308-1873815423.png)



##### updateOne()

 　　updateOne()方法只能更新找到的第一条数据，即使设置{multi:true}也无法同时更新多个文档

　　将数据库中名字中带有'huo'的数据，年龄变为60岁

```
temp.updateOne({name:/huo/},{age:60},function(err,raw){
    //{ n: 1, nModified: 1, ok: 1 }
    console.log(raw);
});
```

![img](img/740839-20170722113216183-374293061.png)

##### find() + save()

　　如果需要更新的操作比较复杂，可以使用find()+save()方法来处理，比如找到年龄小于30岁的数据，名字后面添加'30'字符

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
temp.find({age:{$lt:20}},function(err,docs){
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 10 },
    //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 }]
    console.log(docs);
    docs.forEach(function(item,index,arr){
        item.name += '30';
        item.save();
    })
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang30', age: 10 },
    // { _id: 5971f93be6f98ec60e3dc86f, name: 'li30', age: 12 }]
    console.log(docs);
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)



##### findOne() + save()

　　如果需要更新的操作比较复杂，可以使用findOne()+save()方法来处理，比如找到名字为'huochai'的数据，年龄加100岁

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
temp.findOne({name:'huochai'},function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 10 }
    console.log(doc);
    doc.age += 100;
    doc.save();
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 110 }
    console.log(doc);
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

##### findOneAndUpdate()

　　fineOneAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}

```
Model.findOneAndUpdate([conditions], [update], [options], [callback])
```

##### findByIdAndUpdate

　　 fineByIdAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}

```
Model.findOneAndUpdate([conditions], [update], [options], [callback])
```

 

### 文档删除

　　有三种方法用于文档删除

```
remove()
findOneAndRemove()
findByIdAndRemove()
```

##### remove()

　　remove有两种形式，一种是文档的remove()方法，一种是Model的remove()方法

　　下面介绍Model的remove()方法，该方法的第一个参数conditions为查询条件，第二个参数回调函数的形式如下function(err){}　　

```
model.remove(conditions, [callback])
```

![img](img/740839-20170722115955136-435160244.png)

　　删除数据库中名称包括'30'的数据

```
temp.remove({name:/30/},function(err){})
```

![img](img/740839-20170722120740730-207409461.png)

　　[注意]remove()方法中的回调函数不能省略，否则数据不会被删除。当然，可以使用exec()方法来简写代码

```
temp.remove({name:/30/}).exec()
```

　　下面介绍文档的remove()方法，该方法的参数回调函数的形式如下function(err,doc){}

```
document.remove([callback])
```

　　删除数据库中名称包含'huo'的数据

　　[注意]文档的remove()方法的回调函数参数可以省略



```
temp.find({name:/huo/},function(err,doc){
    doc.forEach(function(item,index,arr){
        item.remove(function(err,doc){
            //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 30 }
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 60 }
            console.log(doc);
        })
    })
})  
```



![img](img/740839-20170722121538620-1318315817.png)

##### findOneAndRemove()

　　model的remove()会删除符合条件的所有数据，如果只删除符合条件的第一条数据，则可以使用model的findOneAndRemove()方法

```
Model.findOneAndRemove(conditions, [options], [callback])
```

 　　集合temps现有数据如下

![img](img/740839-20170722122724527-1611550236.png)

　　现在删除第一个年龄小于20的数据

```
temp.findOneAndRemove({age:{$lt:20}},function(err,doc){
    //{ _id: 5972d3f3e6f98ec60e3dc873, name: 'wang', age: 18 }
    console.log(doc);
})
```

![img](img/740839-20170722123723214-1991458770.png)

　　与model的remove()方法相同，回调函数不能省略，否则数据不会被删除。当然，可以使用exec()方法来简写代码

```
temp.findOneAndRemove({age:{$lt:20}}).exec()
```

##### findByIdAndRemove()

```
Model.findByIdAndRemove(id, [options], [callback])
```

![img](img/740839-20170722124111839-168768226.png)

　　删除第0个元素

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findByIdAndRemove(aIDArr[0],function(err,doc){
        //{ _id: 5972d754e6f98ec60e3dc882, name: 'huochai', age: 27 }
        console.log(doc);
    })            
})
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](img/740839-20170722124210105-1759533603.png)

　　类似的，该方法也不能省略回调函数，否则数据不会被删除。当然，可以使用exec()方法来简写代码

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findByIdAndRemove(aIDArr[0]).exec()            
})
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](img/740839-20170722124335949-2088054111.png)

 

## 最后

　　mongoose操作基础入门大致就是以上这些。mongoose的很多操作与mongodb的操作命令非常类似，学起来并不难。但是，由于中文资源并不完善，需要对照[英文文档](http://mongoosejs.com/docs/guide.html)进行学习，可能会稍显吃力。而且，mongoose对mongodb做了许多扩展，增加了许多方法，需要更多耐心

　　欢迎交流

 