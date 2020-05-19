# 建立软连接

下载node 解压缩
设置软连接到/usr/local/bin 是因为 环境变量里有 path=/usr/local/bin,使node和npm可以全局使用

```
ln -s /home/nodejs/node-v10.14.2-linux-x64/bin/node  /usr/local/bin/node

ln -s /home/nodejs/node-v10.14.2-linux-x64/bin/npm  /usr/local/bin/npm
```


# cnpm

```

npm install -g cnpm --registry=https://registry.npm.taobao.org

ln -s /home/nodejs/node-v10.14.2-linux-x64/bin/cnpm /usr/local/bin/cnpm


```

# cnpm i pm2 -g

```
同样需要建立软连接：ln -s /root/node-v8.9.3-linux-x64/bin/pm2 /usr/local/bin/pm2

pm2的使用可以参考官网 http://pm2.keymetrics.io/

```

# yarn i pm2 -g

```
会自动添加软连接
```