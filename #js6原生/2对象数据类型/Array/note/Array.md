[^split]:����
[^splice]: ���� 
[^slice]: һ����@����_

# Array�ľ�̬����

###  Array.of��̬������������

```javascript
 Array.of��1��  //[1]
 Array.of��1��2��3��//[1,2,3]
```

### Array.from������ת����

```javascript
let ArrayLike = { 0 : "a", 1 : "b", 2 : "c" ,length:3};
Array.from(ArrayLike)

```

###  Array.isArray( )�ж��Ƿ���������

1. ����ǲ������� Array.isArray(arr)
2. arr instanceof Array //����������.������
3. Array.protype.isprotypeof(arr)

# ʵ������������(��ʵ���ݽṹ) in

![](4.png)

### __ proto __:Array.prototype

##### ջ�����޸�����(ֻ�д���ı�ԭ����)

###### ջ�����޸����ɾ��

push  pop  unshift shift

```
    const arr = [1, 2, 3, 4]
          arr2=arr.push(5)//arr2��������ֵ arr�Ǳ�Ӱ���ֵ
    console.log(arr)// [1,2,3,4,5]
    console.log(arr2) // 5

```

###### ����λ����ɾ��splice[^splice]

```javascript
const arr = [1, 2, 3, 4]
arr2=arr.splice(1,1,'a','b')
console.log(arr)//[1,'a','b',3,4]
console.log(arr2)//[2]
//��λ��2��ʼɾ��1�����'a','b',��������ɾ����1��[2]

```

###### �������(�ı�ԭ����)

```
 instance.fill(��qsl��,1,4) //���qsl��λ��2��5������5
```

##### ��string��ͬ�ķ���(���ı�ԭ����)

###### slice[^slice] ��ȡ

```
instance.slice��1��4��\\��ȡ����2��5������5

instance.slice��-3��-1��\\������4��������2������4
```

###### contact(���ı�ԭ����)

```
//arr��������ӵ��
     const arr = [1, 2, 3], arr2 = [1,2,4, 5]
    allarry=arr.concat(arr2)
    console.log(arr) //[1,2,3]
    console.log(allarry) //[1,2,3,4,5]

```

###### includes

```
 arr.includes(1)  //�ж�arr�Ƿ����1 ����boolen,

 arr.includes({a:1})  //�����ж����ΰ���
```

###### indexOf

```
1. arr.indexOf(1)  //��ǰ��������һ��1������
2. arr.lastindexOf(1��) //�Ӻ���ǰ����һ��1������
3. arr.indexOf({a: 10}) //�޷�ʹ��,����-1
```

##### join()������ַ�����ת

```
[...'abc']
```

```
[1, 2, 3, 4].join('-')
```
split[^split]

```javascript
'1234'.split('')
```
##### �����������(���ı�ԭ����)

###### every�ж����������ĳ���� ����boolen

```
 Array.protype.every((item,index,self) => {})
```

###### some�ж��Ƿ��з���ĳ�������� ����boolen

```
 Array.protype.some((item,index,self) => {})
 
```

###### mapӳ�䡪>����ĳ������������

```
  Array.protype.map((item,index,self) => {})
 
```

###### filter���ˡ�>����ĳ������Ԫ�� ��������

```
 Array.protype.filter((item,index,self) => {})
```

###### forEach��ÿһ�����

```
 Array.protype.forEach((item,index,self) => {})
```

###### ��������

```
3. arr.find(function(item, index, self) { return item>1 }) //���ҵ�һ��ֵ
4. arr.findindex(function(item, index, self) { return item > 9 }) //���ҵ�һ������
```

��

```
arr=[{a:1,id:1},{b:2,id:2}]    ��֪id��2 ����ɾ��{b:2,id:2}��?
------------------------
arr=[{a:1,id:1},{b:2,id:2},{b:2,id:3}]
 const index =arr.findIndex((item,index,arr)=>{return item.id===3})
```

###### ����

```
 Array.protype.sort((a,b)=>b-a)

 Array.protype.reverse()//��ת
```

###### ���reduce

```
array.reduce((total, item, index, self) => res += item, initialValue)

total����һ�ε��ûص����ص�ֵ���������ṩ�ĳ�ʼֵ��initialValue��

item�����������ڴ����Ԫ��

index�����������ڴ����Ԫ������������ṩ�� initialValue ����0��ʼ�������1��ʼ

self�� ���� reduce ������

initialValue����ѡ���ֵ���ڵ�һ�ε��� callback �ĵ�һ�����������û�����ó�ʼֵ���������еĵ�һ��Ԫ����Ϊ��ʼֵ�����������reduceʱû�����ó�ʼֵ���ᱨ��

 
```

**�����������:**

IE>=9 , PS: IE��֧��ES6�ļ�ͷ������

```
   let array = [
        {
            name: 'apple',
            price: 10
        }, 
        {
            name: 'banana',
            price: 9
        }
    ];

    let sumprice = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sumprice += element.price;
    }
    console.log('for example sumprice',sumprice);

    sumprice = array.reduce(function (total, currentValue, currentIndex, arr) {
        return total + currentValue.price;
    }, 0);
    console.log('for reduce sumprice',sumprice);

```

### ownProperty

```javascript
['leng','0','1']
```

### keys(EnumerableProperty()

```javascript
['0','1']
```

# null,undefine ����Ľ������

����ķ������������������ ��Ϊnull,undefine�Ͳ�������ᱨ��

![](1.png)

�������1 ���ж��Ƿ�����

```
if(Array.isArray(arr)){

arr.filter(..)
}

```

�������2 , ||

```
const arr=null

const _arr=arr||[]

const arr2=_arr.filter(..)

```



