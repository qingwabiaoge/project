## sql语句
显示数据库

     show databases;

update

     update dou_product set image = concat('http://pic.http6.net/170513/',convert(image,char));

    update dou_product set content = concat('<img src="',convert(content,char));

    update dou_product set content = concat(convert(content,char),'" />');

## 登录

-----通过登录mysql系统----

    mysql -uroot -p
    Enter password: 【输入原来的密码】

---修改密码----

    mysql>use mysql; //使用mysql数据库,必须
    mysql> update user set password=password("新密码") where user='root';
    mysql> flush privileges;
    mysql> exit;

-----授权ip用navicat-----

    grant all on *.*  to 'root'@'要授权的ip'  identified by '数据库密码';


