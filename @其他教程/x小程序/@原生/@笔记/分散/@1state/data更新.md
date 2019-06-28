# data:{arr:[]}更新

vue

```
  this.$set(this.obj, 'b', 3)
```
小程序

```
 this.setData({
      'array[0].text':'changed data'
    })


  this.setData({
      'object.text': 'changed data'
    });

this.setData({
      'newField.text': 'new data'
    })
```

原生

```
   obj = {a: 1, b: 2}


    Object.defineProperty(obj, 'c', {//可以改变其他属性的值，可以把其他属性的值赋值给自己
        configurable: false,
        enumerable: true,
        set: function () {
            this.a = 0
        },
        get: function () {
            return this.b
        }

    })
    obj.c = 3 //set触发tis.a=0
    console.log(obj)//除非get
```