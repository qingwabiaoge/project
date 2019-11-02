### 安装和配置

在Centos下搭建Ftp服务，步骤如下。

1、检查是否安装 了vsftpd，如果未安装 则安装vsftpd。

1）查看系统中是否安装了vsftpd，可以通过执行命令 ：rpm -qa | grep vsftpd

2）如果没有安装 vsftpd，则安装 ：yum -y install vsftpd

2、创建ftp用户，比如ftp_test。命令：useradd -s /sbin/nologin -d /home/ftp_test ftp_test

注意：

1）目录尽量不要选择根目录下，这里是/home/ftp_test，并且ftp_test这个目录不要手动创建，否则权限会有问题，执行命令的时候会自动创建

2）注意目录的权限，如果有需要，应该设置相应的权限

3、为ftp_test用户创建密码。命令：passwd ftp_test

执行之后输入2次密码确认就设置好了密码。

4、编辑vsftpd配置文件，命令:vim /etc/vsftpd/vsftpd.conf

找到anonymous_enable这个配置项，默认是YES，修改成NO，表示不允许匿名用户登录。



### linux 通用服务操作

1. 启动`systemctl start vsftpd.service`

2. 查看ftp服务的状态`systemctl status vsftpd.service`

3. 开机启动 `systemctl enable  vsftpd.service`
4. 服务列表 `systemctl list-unit-files`
5. 禁用服务 `systemctl disable`



### 命令

1. 设置开机启动vsftpd ftp服务
    chkconfig vsftpd on

2. 启动vsftpd服务
    service vsftpd start

3. 停止vsftpd:  

​     service vsftpd stop

4. 重启vsftpd:  

​      service vsftpd restart