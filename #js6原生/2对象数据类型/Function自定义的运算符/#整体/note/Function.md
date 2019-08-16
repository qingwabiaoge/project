# Function

fn�̳���Object   fn���ܴ����¶���ʵ��

### ��������

##### ���캯����������

```javascript
new Function('a', 'b', 'return a + b');
```

##### ֱ�����﷨�ǵȼ۹��캯������

```
  function f(a,b) {return a + b}//�﷨�ǵȼ�����Ĺ��캯������

    f.a = 1
    f.b = 2
    console.log(f)//  function f() {} ��ӡ������ֻ��ֱ�������ʽ

```

### �������� in

![1](2.png)





```javascript
   const Fn = function () {
        console.log(Fn.arguments)
        console.log(Fn.arguments.callee)
    }
    Fn.a = 10
    Fn()
   
    

  //1.ԭ������Function.prototype---------------
   console.log({'Function.protype': Object.getPrototypeOf(fn)})
  /*{ 
    apply: ? apply()
    arguments: (...)
    bind: ? bind()
    call: ? call()
    caller: (...)
    constructor: ? Function()
    length: 0
    name: ""
    toString: ? toString()
    Symbol(Symbol.hasInstance): ? [Symbol.hasInstance]()
    get arguments: ? ()
    set arguments: ? ()
    get caller: ? ()
    set caller: ? ()
    }*/



    
    //2.Own����,Function��������---------------------    
    console.log(Object.getOwnPropertyNames(Fn))//(6)["length", "name", "arguments", "caller", "prototype", "a"]
     console.log(Fn.name)






    //3.��ö������:��̬����,��̬����--------------------
     console.log(Object.keys(Fn)) //['a']


     //for..in����ö�ٳ� 

    for (item in f) {
        console.log(item) //a,b

    }
```



### ����fn���Ժ����в�����()���м���

```
fn(),����������ջ
```

