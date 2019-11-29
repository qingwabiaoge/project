# CentOS7  CLI和GUI切换

### 方式1

在图形界面使用 ctrl+alt+F2切换到dos界面  

dos界面 ctrl+alt+F2切换回图形界面

### 方式2

在命令上 输入 init 3 命令 切换到dos界面 

输入 init 5命令 切换到图形界面

###  默认启动

如果想系统默认以某种方式启动， 使用systemd创建符号链接指向默认运行级别。

centos7以上的版本

```
1.首先删除已经存在的符号链接：

rm /etc/systemd/system/default.target 

2.默认级别转换为3(文本模式)： 

# ln类似windows的mklink

ln -sf /lib/systemd/system/multi-user.target /etc/systemd/system/default.target

3. 级别转换为5(图形模式)：

ln -sf /lib/systemd/system/graphical.target /etc/systemd/system/default.target

3.重启：

reboot

 
```

centos7以下的版本 

```
以管理员权限编辑/etc/inittab
把
id:5:initdefault:
改为
id:3:initdefault:
就ok。
```



# 文件目录

```
bin 存放二进制可执行文件(ls,cat,mkdir等)
boot 存放用于系统引导时使用的各种文件
dev 用于存放设备文件
etc 存放系统配置文件
home 存放所有用户文件的根目录
lib 存放跟文件系统中的程序运行所需要的共享库及内核模块
mnt 系统管理员安装临时文件系统的安装点
opt 额外安装的可选应用程序包所放置的位置
proc 虚拟文件系统，存放当前内存的映射
root 超级用户目录
sbin 存放二进制可执行文件，只有root才能访问
tmp 用于存放各种临时文件
usr 用于存放系统应用程序，比较重要的目录/usr/local 本地管理员软件安装目录
var 用于存放运行时需要改变数据的文件
```
# 快捷键

### linux

Ctrl+A： 将光标移动到命令行的开始处。 
Ctrl+E：将光标移动到命行令的结尾处。
Ctrl+u: 清除光标之前的内容，快速删除shell中输入错误的命令，不必逐个字符删除
Ctrl+k: 清除光标之后的内容

Ctrl+r: 在历史命令中查找 ，非常好用，输入关键字就联想出以前的命令了

Ctrl + s 锁定屏幕显示的意思(以前电脑配置低时间使用现在已经不用了)
Ctrl + q 继续显示

Ctrl+l 清屏

Tab 键 自动补全命令

# 任务管理

### 查看剩余内存

```
free -h
```

### 任务管理器

`top`

### 杀死进程

```
kill xxx
```

### Linux前后台进程切换

##### (1) Linux前台进程与后台进程的区别

前台进程：是在终端中运行的命令，那么该终端就为进程的控制终端，一旦这个终端关闭，这个进程也随之消失。

后台进程：也叫守护进程（Daemon），是运行在后台的一种特殊进程，不受终端控制，它不需要终端的交互；Linux的大多数服务器就是使用守护进程实现的。比如Web服务器的httpd等。

##### (2) 进程的前台与后台运行

| 命令和快捷键           | 作用                                           |
| ---------------------- | ---------------------------------------------- |
| &                      | 用在一个命令的最后，可以把这个命令放到后台执行 |
| Ctrl+z                 | 暂停到后台                                     |
| ctrl+c                 | 关闭进程                                       |
| jobs <br />jobs –l     | 查看当前有多少在后台运行的进程.                |
| fg(foregroud  process) | 进程切换到前台                                 |
| bg(backgroud  process) | 后台运行继承                                   |
| kill(pid) (id)         | 关闭后台进程                                   |

##### (3) &的使用

　　如果直接使用&，部分命令仍然在前台显示，例如"ping 127.0.0.1 &"。此时我们可以使用nohup命令帮助，"nohup ping 127.0.0.1 &"，在执行时会创建一个nohup.out的文件。

# 文件操作

### 显示磁盘容量

```
df -a
df -h
```

### 浏览文件

```
ls (ls -lht)会列出当前目录下每个文件的大小，同时也会给出当前目录下所有文件大小总和

ls常用参数
-a:显示隐藏文件
-l:列表方式显示信息
-h:显示文件大小

du -sh *也会列出当前文件夹下所有文件对应的大小(指定文件大小和文件夹的大小)
```

### 建立和删除文件夹

```
mkdir

mkdir -p data/db 连带添加上级目录

rmdir
```

### 建立文件

```
touch 
```

### 设置权限

r:4读权限

w:2写权限

x:1执行

0：没有权限

5：读 执行

6：读 写

7：读写 执行

chmod abc filename//abc分别主人，同组，其他用户数字权限

chomd 753 filename//主人读。写，执行（7)；同组读，执行(5)；其他写，执行(3)

chomd 644 passwd

例1 chomd 644 passwd

如图所示：



![img](https:////upload-images.jianshu.io/upload_images/7520141-16231aebe824a3cf.png?imageMogr2/auto-orient/strip|imageView2/2/w/649/format/webp)

chmod 273 php.txt



![img](https:////upload-images.jianshu.io/upload_images/7520141-f4054f6db9998ed0.png?imageMogr2/auto-orient/strip|imageView2/2/w/660/format/webp)



![img](https:////upload-images.jianshu.io/upload_images/7520141-20787de4ba297dfd.png?imageMogr2/auto-orient/strip|imageView2/2/w/714/format/webp)

字母相对和数字相对取舍？

修改权限相对比较多时候使用数字方式

.................少................字母方式

对当前目录下所有文件及文件夹极其子目录及子文件

```
chmod -R  777 *    
```

### 复制第一个文件夹到第二个文件夹

      cp -R /alidata/www/duchanghong.com/images/product  /alidata/www/@wanxiang

###### linux复制到远程主机

        scp local_file remote_username@remote_ip:remote_folder

### mv 移动和重命名

```
mv abc.txt 1234.txt

mv a.txt /b/c.txt
```

### 删除文件和文件夹

```
rm xxx
rm -rf
```

# 用戶

    who、w 和 users 等命令通过 utmp(/var/run/utmp) 文件查询当前登录用户的信息。
    last 和 ac 命令通过 wtmp(/var/log/wtmp) 文件查询当前与过去登录系统的用户的信息。
    lastb 命令通过 btmp(/var/log/btmp) 文件查询所有登录系统失败的用户的信息。
    lastlog 命令通过 lastlog(/var/log/lastlog) 文件查询用户最后一次登录的信息。
    
    passwd 修改密碼



# 网络

### 修改网卡配置，让网卡随操作系统自动启用

1，确保是root账号进行下面操作，如果不是root身份，首先要以root身份登入当前的CentOS 7 ！

2，在shell里面输入命令：cd /etc/sysconfig/network-scripts ，随后回车，进入这个目录。随后在shell里面输入：ls -a ，随后回车，会显示这个目录里面的所有文件。

![img](img/510112-20170720223901380-181988068.png)

3，修改网卡配置文件。“ifcfg-ens33”就是我的网卡配置文件，我用vi编辑它，在shell里面输入：vi ifcfg-ens33 ，随后回车，按"i"键，进入vi编辑模式，现在就可以编辑此文件了！

![img](img/510112-20170720224317146-326654761.png)

4，把“ONBOOT”的值修改为"yes"，CentOS最小化安装的网卡默认不跟随系统启用，所以这项的默认值为“no”。修改成"yes"后，直接输入":wq"保存当前修改，退出vi。

![img](img/510112-20170720225007677-1078435840.png)

5，重启操作系统，在shell里面输入：reboot，随后回车，重启操作系统。

6，验证yum是否可以正常工作了，登入系统后，在shell里面输入：yum grouplist，如果网卡设置正确，那么yum就应该可以正常工作了，如下图：

![img](img/510112-20170720225413786-534550151.png)



### 查看ip地址

```
 先安装 yum install net-tools
ifconfig -a
```

### 查看开启的端口

     //需要先安装net-tools   
     netstat -lntp


### 查看网速
实时网速
```
nload

```
图像
```
nload -t 200 -i 1024 -o 128 -U M
```

### 关闭防火墙

```

1) 重启后生效 
开启： chkconfig iptables on 
关闭： chkconfig iptables off 

2) 即时生效，重启后失效 
开启： service iptables start 
关闭： service iptables stop 

需要说明的是对于Linux下的其它服务都可以用以上命令执行开启和关闭操作。 

在开启了防火墙时，做如下设置，开启相关端口， 
修改/etc/sysconfig/iptables 文件，添加以下内容： 
-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT 
-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
```
# 环境变量

## linux环境变量

### 设置永久的环境变量
##### profile里设置过的cli程序的path,cli命令可以全局使用(估计是操作系统的一种搜索机制)
```
vim /etc/profile，添加PATH

export PATH=/usr/local/yarn-v1.15.2/bin

export MONGODB_HOME=/usr/local/mongodb  
export PATH=$PATH:$MONGODB_HOME/bin

shell下输入source /etc/profile 立马生效 
```
*设置软链接到已设置path的目录(window下是mklink)*

软连接到 /usr/local/bin/ 

```
ln -s /alidata/node/bin/node /usr/local/bin/node
ln -s /alidata/node/bin/npm /usr/local/bin/npm
```
软连接到 /usr/local/bin/node

```
ln -s /alidata/node/bin/node /usr/local/bin/node
ln -s /alidata/node/bin/npm /usr/local/bin/npm
```

![](./7.png)
* 删除软链接

```
rm -rf xxx
```
##### profile配置其他永久环境变量 

* 定义
全局变量系统设置,可以供程序使用
* 设置永久环境变量

```
vim /etc/profile，里面记录直接加到文件里面，最后面


export HOST=47.107.170.105 
export PORT=3000
export NODE_ENV=production


shell下输入source /etc/profile 立马生效 

```

### 设置临时修改设置环境变量 

使用export其实相当于导出变量，在shell里面，直接使用=赋值符号就可以定义一个变量，例如A=“test”，用命令echo $A就可以打印出"test"；
但这样定义的变量只在当前的shell中可用，如果要使其在外部（子shell中）可见，就要用export A=“test”的方式，或者在定义A之后使用export A。

```
export NODE_PATH=/alidata/node/lib/node_modules
```


![](./5.png)

关闭命令行再打开,临时变量不存在

![](./6.png)

(多个命令用空格间隔)

```
 Linux 下  HOST=47.107.170.105 PORT=3000 npm run start
```

### 查看环境变量

显示所有环境变量

```
export或env 
```
显示路径环境变量

```
echo $PATH
```
显示指定变量

```
echo $HOST
```



# 安装软件

 命令全局访问 软件目录必须是path里有的目录或其下级目录

### 源码包安装

 ![img](img/2018092721520030-1572706237767.png) 

  源码安装需要安装编译工具： yum -y install gcc gcc-c++ make

以Redhat下安装apache为例

- 先网站下载源代码包 httpd-2.2.15.tar.gz

- tar -xvf  httpd-2.2.15.tar.gz  -C  /usr/src  将其解压到 /usr/src/ 目录下

- 到其解压目录 /usr/src/httpd-2.2.15/ 下，

-  ./configure  运行configure配置文件,设置安装目录，安装模块等，不设置的话，软件默认安装在 /usr/local/apache2/目录下。

  如果  ./configure  --prefix=/usr/local/https/  ,则是将其安装在/usr/local/https/目录下。此时还并未安装，只是配置安装路径

- make 编译，生成可执行的二进制文件Makefile

- make  install 安装。此时，软件安装在 /usr/local/https/ 目录下

安装完成之后对安装包的清理

-   进入其解压目录  /usr/src/httpd-2.2.15/下  ，  make  uninstall  或者  make  clean 用于清除上一次的编译
-   然后返回到上一级目录，把 httpd-2.2.15 删除
-   如果要卸载软件的话，把 /usr/local/apache2 这个软件删除就可以


### 免编译包安装

下载

```
wget http://cn.wordpress.org/wordpress-3.1-zh_CN.zip 
```

```
tar -zxvf yarn-v1.7.0.tar.gz -C /usr/local/yarn
```

添加path

```
vim /etc/profile

#在文件结尾加入以下内容
export PATH=$PATH:/var/local/yarn/yarn-1.7.0/bin

#立马生效 

source /etc/profile

```

### yum \apt 安装

```
yum install wget -y
```

yum的安装路径, 已经添加到path了

![](10.PNG)

列出安装过的包

```
yum grouplist
```



# 运行软件

### 命令

##### 简单命令后面带参数

`pm2 start 1.js`

` mongod --dbpath d:\mongodb4.0.10\data`

` mongod --config "d:\mongodb4.0.10\mongo.conf" `

##### 复杂命令可以加配置文件

`pm2 start pm2.json`

` mongod --config d:\mongodb4.0.10\mongo.conf `

window有配置文件也是因为如此_

### 多个命令

##### linux

空格 分离多个命令

##### windows

&&分离多个命令

### 常用软件

##### vim

![1567763517912](img/1567763517912.png)

建立或者修改文件

```
wim /xxx 
```

输入模式      

```
i
```

撤销 恢复

```
vim撤销操作：u

vim恢复操作：ctrl+r
```

保存

```
esc->:wq保存关闭
esc->:q不保存退出
esc->:q!强制退出
```

##### 压缩软件

```
unzip test.zip
zip -r shipoe4.zip /alidata/www/shipoe.com
```

```
tar -zxvf yarn-v1.7.0.tar.gz -C /usr/local/yarn

x : 从 tar 包中把文件提取出来
z : 表示 tar 包是被 gzip 压缩过的，所以解压时需要用 gunzip 解压
v : 显示详细信息
f xxx.tar.gz : 指定被处理的文件是 xxx.tar.gz
```



# 服务(mongo为例)

linux和window所谓的任务不过是开机自动启动的后台cli程序

## linux 服务

### 建立服务

linux系统结构/lib/systemd/system/目录 该目录自动存放启动文件的配置位置，里面一般包含有xxx.service 


```
cd /lib/systemd/system  
sudo vi mongodb.service 
```

输入

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
### 设置文件权限

`chmod 754 mongodb.service`


### 服务操作 system-ctl

##### 启动服务  
`systemctl start mongodb.service  `
##### 关闭服务  
`systemctl stop mongodb.service  `

##### 重启服务

`systemctl restart mongodb.service`

##### 查看服务当前状态

`systemctl status mongodb.service`

##### 参看所有服务的状态

`systemctl list-unit-files`

##### 开机启动  
`systemctl enable mongodb.service `

##### 取消开机启动

`systemctl disable`





