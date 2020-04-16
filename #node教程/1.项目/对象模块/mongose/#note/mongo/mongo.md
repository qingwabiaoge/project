

# 安装mongodb

## linux安装

### 一、安装过程

1. 到mongodb官网下载对应系统的压缩包，我的系统是Ubuntu16.04,64位。（注意不要选错系统版本，也可以在本地下载好后上传到云服务器）

2. 默认下载路径是到用户目录下的Downloads目录，将其解压

```
tar -zxvf mongodb-linux-x86_64-3.2.12.tgz
```

3. 将解压后的文件夹移动到/usr/local/的mongodb目录下

```
mv -r mongodb-linux-x86_64-3.2.12 /usr/local/mongodb
```

4. 配置系统文件profile

```
sudo vi /etc/profile
```

插入下列内容：

```
export MONGODB_HOME=/usr/local/mongodb  
export PATH=$PATH:$MONGODB_HOME/bin
```

注意保存后要重启系统配置：

```
source /etc/profile
```

5. 创建用于存放数据和日志文件的文件夹，并修改其权限增加读写权限



```
cd /usr/local/mongodb
sudo mkdir -p data/dbsudo chmod -r 777 data/db
sudo mkdir logs
cd logs
touch mongodb.log
```



![img](./img/1101099-20180319233418015-953209930.png)

### 二、配置用户

6. mongodb启动配置

进入到bin目录，增加一个配置文件：

```
cd /usr/local/mongodb/bin  
sudo vi mongodb.conf
```

插入下列内容：

```
dbpath = /usr/local/mongodb/data/db #数据文件存放目录  
logpath = /usr/local/mongodb/logs/mongodb.log #日志文件存放目录  
port = 27017  #端口  
fork = true  #以守护程序的方式启用，即在后台运行  
nohttpinterface = false  #：是否禁止http接口，即28017 端口开启的服务。默认false，支持。
auth = true #开启密码
```

7. 创建用户

   ```
   db.createUser({ user: "admin", pwd: "admin", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
   ```

   

8.  启动mongod数据库服务，以配置文件的方式启动

```
cd /usr/local/mongodb/bin
./mongod -f mongodb.conf
```

9. 连接mongodb数据库

```
./mongo
```

![img](./img/1101099-20180319233505037-1320009908.png)

10. 登陆测试用户是否成功
    db.auth("root", "qinshilei@168") 如果返回1，则表示成功。
    show collections 验证是否登陆成功

### 三、设置mongodb.service启动服务

９．设置mongodb.service启动服务，设置开机启动

```
cd /lib/systemd/system  
sudo vi mongodb.service 
```

编辑其内容为：

```
[Unit]  
Description=mongodb  
After=network.target remote-fs.target nss-lookup.target  
  
[Service]  
Type=forking  
ExecStart=/usr/local/mongodb/bin/mongod --config /usr/local/mongodb/bin/mongodb.conf  
ExecReload=/bin/kill -s HUP $MAINPID  
ExecStop=/usr/local/mongodb/bin/mongod --shutdown --config /usr/local/mongodb/bin/mongodb.conf  
PrivateTmp=true  
  
[Install]  
WantedBy=multi-user.target
```

10．设置mongodb.service权限

```
chmod 754 mongodb.service
```

11．系统mongodb.service的操作命令如下：

```
#启动服务  
systemctl start mongodb.service  
#关闭服务  
systemctl stop mongodb.service  
#开机启动  
systemctl enable mongodb.service 
```



12．mongodb.service启动测试

![img](./img/1101099-20180319233548242-1156614625.png)

 

### 四、安装过程中遇到的问题

**1.**

```
mongod: error while loading shared libraries: libnetsnmpmibs.so.30: cannot open shared object file: No such file or directory
```

这个报错信息是说找不到对应的库文件，原因是一开始我下错了安装包版本，所以在下载是一定要注意自己系统的版本

![img](./img/1101099-20180319234218626-1036575677.png)

２．通过配置文件启动服务：mongod -f /etc/mongodb.conf 时报错

```
Error parsing INI config file: unrecognised option 'nohttpinterface' try './
```

这个一开始让我查了好久，后面查到是因为我下载的最新版本的mongodb，而最新的版本貌似不支持以这种配置文件的方式来启动服务，所以无奈我又重新下载安装了3.2.12的版本，然后再次启动服务就正常了。

３．启动服务时报错：

```
about to fork child process, waiting until server is ready for connections.
forked process: 11335
ERROR: child process failed, exited with error number 1
```

这个错误原因是dbpath文件的权限问题,data和logs目录增加写权限即可，上面提到了。

4 .配置文件报错,提示config无效,是txt的编码问题转carset,再转utf-8,txt打开应该是不换行的样子

```
Error parsing INI config file: the options configuration file contains an invali
d line '锘?
```

## window安装

### 1.官网下载zip安装包

官网地址https://www.mongodb.com/download-center/community?jmp=nav，现在windows系统一般都是64位的，选好版本、系统和包类型之后点击download，mongodb-win32-x86_64-2008plus-ssl-4.0.10.zip。

![img](img/1491217-20190716103948211-651219356.png)

 

### 2.解压zip包，创建数据文件、日志文件和数据库配置文件

将下载后的zip包解压到D盘并重命名为mongodb4.0.10，下图除去三个红框标记的其余都是zip解压缩后的文件。

在mongodb4.0.10中新建文件夹data，用于存放数据文件；新建文件夹log并在log下新建mongo.log文件，用于存放日志；新建mongo.conf配置文件，文件内容如下。

![img](img/1491217-20190716103646670-1621998562.png) 



```
#数据库路径
dbpath=D:\mongodb\data
#日志路径
logpath=D:\mongodb\log\mongo.log
#启用日志文件，默认也启用
journal=true
#日志模式为追加
logappend=true
#过滤无用日志
quiet=true
#端口号
port=27017
```



 

```
#bind_ip_all = true                 # 任何机器可以连接
bind_ip = 127.0.0.1,192.168.0.3     # 本机和192.168.0.3可以访问
port = 27017                        # 实例运行在27017端口（默认）
dbpath = /usr/local/mongodb/db      # 数据文件夹存放地址（db要预先创建）
logpath = /usr/local/mongodb/logs/27017.log  # 日志文件地址
logappend = false                   # 启动时 添加还是重写日志文件
fork = true                         # 是否后台运行
auth = true                         # 开启校验用户

```



### 3.安装mongo服务

进入安装包的解压路径的bin目录下，bin目录为执行文件目录，内容如下

![img](img/1491217-20190716105643626-1327459292.png)

 

 打开cmd窗口，在bin目录下执行mongod --config "d:\mongodb\mongo.conf"（其实可以不加双引号），执行结果如下

![img](img/1491217-20190716105306081-1350666011.png)

 

### 4.启动mongo服务

关闭当前cmd窗口另开一个cmd窗口，在bin目录下执行mongod --dbpath d:\mongodb4.0.10\data，执行后如下

（如果不关闭上一个cmd窗口，这一步执行会报”另一个程序正在使用此文件，进程无法访问“）

![img](img/1491217-20190716110339290-1774365806.png)

在浏览器中输入[http://127.0.0.1:27017](http://127.0.0.1:27017/)，返回结果如下，表明mongo数据库安装成功。

![img](img/1491217-20190716110426942-536165483.png)

 

### 5.连接mongo数据库

保持上一个cmd窗口开启，另开一个cmd窗口在bin目录下执行mongo，执行结果如下

![img](img/1491217-20190716110956905-464769575.png)

 可执行命令查询当前版本和已存在的数据库。

![img](img/1491217-20190716111032315-345236515.png)

 

6.后续要使用mongo数据库，先在bin目录下执行mongod --dbpath d:\mongodb4.0.10\data启动服务，保持窗口开启在另一窗口执行mongo即可进入数据库。

 

使用上面的方法即可正常启停和使用mongo数据库，但是每次都需要进入到安装路径的bin目录下启停服务、连接数据库十分麻烦。因此需要将mongo添加到windows的服务中，并且将mongo程序添加到环境变量中。

### 7.将mongo添加为windows服务

关闭之前所有的cmd窗口，使用管理员权限打开一个新的cmd窗口，bin目录下执行mongod --config d:\mongodb4.0.10\mongo.conf --install --serviceName MongoDB，安装完成后可在windows的服务中看到MongoDB，可以在服务中启动或停止服务，或者在cmd的任意路径中执行net start/stop MongoDB来启停，并且启动后如果不手动停止，服务回一直为启动状态，后续连接数据库之前不需要先启动服务。

![img](img/1491217-20190716140355501-1104487521.png)

如果不使用管理员权限安装服务，执行不报错但是服务无法注册成功，即无法在windows服务中找到mongoDB服务；使用管理员权限，如果有其他运行mongo服务的cmd窗口，也无法成功，查看日志如下，此时关闭其他cmd窗口重新执行安装服务即可。

```
exception in initAndListen: DBPathInUse: Unable to create/open the lock file: E:\mongodb4.0.10\data\mongod.lock (另一个程序正在使用此文件，进程无法访问。). 
Ensure the user executing mongod is the owner of the lock file and has the appropriate permissions. Also make sure that another mongod instance is not already running on the E:\mongodb4.0.10\data directory, terminating
```

bin目录下执行mongd --remove移除mongodb服务

 

### 8.将mongo添加到环境变量

上述添加到服务的操作解决的是在bin下执行mongod --dbpath d:\mongodb4.0.10\data启动服务的操作，但是要连接mongo数据库还是需要到bin目录下执行mongo，这就需要添加环境变量了，将mongo的bin路径添加到环境变量之后，就可以在cmd的任意路径中通过mongo连接到mongo数据库。。

电脑上右键-管理，打开系统设置界面如下图1，点击高级系统设置进入系统属性设置界面如下图2，在高级页签中点击环境变量，进入环境变量设置界面如下图3，选中系统变量Path点击编辑，进入编辑环境变量界面如下图4，点击新建，将mongo的完整bin路径添加到最后，保存即可。

![img](img/1491217-20190717174037596-930223058.png)        ![img](img/1491217-20190718094616472-1229398028.png)

 

![img](img/1491217-20190717174305502-1739997985.png)   ![img](img/1491217-20190717174513858-1274551861.png)

# [手把手教你设置MongoDB密码](https://www.cnblogs.com/zilongmao/p/11428864.html)

mongodb密码和传统数据如mysql等有些区别： mongodb的用户名和密码是基于特定数据库的，而不是基于整个系统的。所有所有数据库db都需要设置密码。

### 1. 查看所有数据库(在mongodb新版本里并没有admin数据库，但是并不妨碍第2步操作。)

```
show dbs
```

![img](https://img2018.cnblogs.com/blog/1336193/201908/1336193-20190829114802627-1173376086.png)

### 2. 进入admin数据库

```
use admin
```

![img](https://img2018.cnblogs.com/blog/1336193/201908/1336193-20190829114812976-369380832.png)

### 3. 创建管理员账户

```
db.createUser({ user: "admin", pwd: "password", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
```

![img](https://img2018.cnblogs.com/blog/1336193/201908/1336193-20190829114821735-1603368404.png)

mongodb中的用户是基于身份role的，该管理员账户的 role是 userAdminAnyDatabase。admin用户用于管理账号，不能进行关闭数据库等操作。

### 4. 创建管理员管理amin ,admin数据库密码可用于登陆studio 3t

```
db.createUser({user: "root",pwd: "password", roles: [ { role: "root", db: "admin" } ]})
```

![img](https://img2018.cnblogs.com/blog/1336193/201908/1336193-20190829114834295-178204325.png)

创建完admin管理员，创建一个超级管理员root。角色：root。root角色用于关闭数据库。

```
db.shutdownServer()
```

### 5. 创建普通管理员 并指定管理哪个数据库

```
use yourdatabase
db.createUser({user: "user",pwd: "password",roles: [ { role: "dbOwner", db: "yourdatabase" } ]})
```

![img](https://img2018.cnblogs.com/blog/1336193/201908/1336193-20190829114843715-373549026.png)

role: "dbOwner"代表数据库所有者角色，拥有最高该数据库最高权限。比如新建索引等当账号管理员和超级管理员，可以为自己的数据库创建用户了。（坑）这时候一定，一定要切换到所在数据库上去创建用户，不然创建的用户还是属于admin。

如果是读写角色的话，权限设置为`role: "readWrite"`

### 6. 查看用户

```
show users
```

### 7. 删除用户

删除用户必须由账号管理员来删，所以，切换到admin角色

```
use admin
db.auth("admin","password")
```

删除单个用户

```
db.system.users.remove({user:"XXXXXX"})
```

删除所有用户

```
db.system.users.remove({})
```

可以使用：mongodb://youruser:yourpassword2@localhost/yourdatabase 来连接到你的mongo

### 8.mongodb的配置文件开启验证后重启mongodb服务

```bash
[root@mongodb ~]# vim /opt/mongodb/data/mongodb.conf 
#开启认证
auth = true
[root@mongodb ~]# service mongodb restart
```

### 3.再次登录，没有密码认证是执行不了命令的

![image-20200416175250267](img/image-20200416175250267.png)



### 4.进行密码验证

```bash
> db.auth('root','123456')
1
> #返回1代表成功
```



### 2.配置文件开启验证后重启mongodb服务

```bash
[root@mongodb ~]# vim /opt/mongodb/data/mongodb.conf 
#开启认证
auth = true
[root@mongodb ~]# service mongodb restart
```

### 4.进行密码验证

```bash
>use admin  #这个一定要输入才行
> db.auth('root','123456')
1
> #返回1代表成功
```

### 5.再次测试命令（成功）

```bash
> show dbs
```

附加也可以通过这种方式进行验证，效果一样

```bash
[root@mongodb bin]# ./mongo admin -u root -p123456
```

