# path.join只是简单的拼接

1. 对于以/开始的路径片段，path.join只是简单的将该路径片段进行拼接，而path.resolve将以/开始的路径片段作为根目录，在此之前的路径将会被丢弃，就像是在terminal中使用cd命令一样。

```
path.join('/a', '/b') // 'a/b'
path.resolve('/a', '/b') // '/b'
```

 

2. path.resolve总是返回一个以相对于当前的工作目录（working directory）的绝对路径。

如果第一个参数为相对路径resolve默认前面加了__dirname

```
path.join('./a', './b') // 'a/b'
path.resolve('./a', './b') // '/Users/username/Projects/webpack-demo/a/b'
```



# path.resolve([arg1,arg2,...])根据参数的不同，返回值存在两种情况。

### 以下为参数的两种情况：

1.每个参数都不带'/'，比如path.resolve(),或者path.resolve('path1','path2')，或者path.resolve('./path');

2.一个或多个参数最开头带'/'符号 path.resolve('/path');

### 返回值分别为：

1.绝对路径

2.相对路径

### 1.参数为空：

*path.resolve()或者paht.resolve('')

```
输出：当前文件所在文件夹路径  === __dirname
```

 

### 2.参数为文件夹名字(参数>=1):

*path.resolve('path')

```
输出：当前文件所在文件夹绝对路径/path
```

*或者 path.resolve('path1','path2')

```
输出：当前文件所在文件夹绝对路径/path1/path2
```

*或者 path.resolve('path1','path2'.......'pathX')

```
输出：当前文件所在文件夹绝对路径/path1/path2...../pathX
```

### 3. 某个参数为'./'+文件名

*path.resolve('./path')

```
输出：当前文件所在文件夹绝对路径/path
```

*或者path.resolve('path1','./path2')

```
输出：当前文件所在文件夹绝对路径/path1/path2
```

 

 

### 4.文件夹名字前加了'/'

注意，无论是第几个文件前加了/！！！最终路径都为：/+‘最后一个前面加/的文件文件名’+‘剩下文件夹’

好的，我知道上面那句话很难懂，那就看例子

##### 4.1.path.resolve('/path')

```
输出: /path
```

##### 4.2.相对路径

###### 4.2.1path.resolve('path1','path2','/path3') 

*前两个path前没有斜杠，只最后一个有

```
输出: /path2
```

###### 4.2.2.path.resolve('path1','/path2','/path3')

*后面两个path都有斜杠

```
输出：/path2
```

看到没，跟path1,path2,根本没有任何关系，因为最后一个path2前面有斜杠/，所以地址为path2

##### 4.3.path.resolve('path1','/path2','path3') 

*path2有斜杠，后面的path3没有斜杠

```
输出: /path2/path3
```

 