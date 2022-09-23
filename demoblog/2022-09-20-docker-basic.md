---
slug: docker-basic
title: docker基础知识学习
authors: skyler
keywords:
  - docker
description: docker基础命令学习
tags: [docker, 技术]
---

## 简介

最近工作中，有一个项目的部署方式是通过 docker 进行部署，借此机会也来学习并记录一下 docker 相关的基础知识。

## Dockerfile 的编写

以前端的一个项目为例，将打包后的产物复制进镜像中，更改 nginx 配置，暴露端口并映射到宿主机的某个端口，然后进行访问

```dockerfile
# 以nginx镜像为基础进行操作
FROM nginx
# 运行命令
RUN echo "                           \n\
server {                                \n\
    listen 80;                          \n\
    location ^~ / {                     \n\
        root /dist;                     \n\
        index index.html index.htm;     \n\
    }                                   \n\
}" > /etc/nginx/conf.d/default.conf

# 可以通过ENV关键字来定义环境变量，既可以在dockerfile中使用，也可以在docker容器中使用
# ENV TOMCAT_MAJOR 8
# ENV TOMCAT_VERSION 8.0.53

# 创建数据目录
VOLUME [ "/dist" ]
# 把宿主机中的 build/ 复制到 dist中
COPY build /dist
# 把宿主机中的 start.sh 复制到 dist中
COPY start.sh /dist
# 指定工作目录
WORKDIR /etc/nginx
# 运行命令
RUN nginx -t
# 在容器启动时执行的命令
ENTRYPOINT ["/dist/start.sh"]
# 暴露nginx工作的端口
EXPOSE 80
```

把 RUN 命令合并在一起，这样可以减少镜像层的数量，也减少了镜像构建过程中反复创建容器的次数，提高了镜像构建的速度。

```shell
# start.sh
#!/bin/bash
nginx

# 打开一个挂起的进程，否则docker会关闭
tail -f /dev/null
```

## docker 命令

```shell
# 构建镜像
docker build -t [repositry:tag] .(构建镜像的目录) (可选 [-f dockerfile的路径])

# 查看镜像
docker images

# 删除images
docker rmi [images]

# 创建容器
# -d 后台运行  --name指定容器名称 -p端口映射<宿主机:docker>  最后容器名称
docker run -d --name nginx_test -p 8080:80 nginx(容器名称)

# 查看容器列表
# -a 查看全部的容器
docker ps -a

# 启动/停止容器
docker start/stop [container]

# 删除容器
# -f 强制删除
docker rm [container] -f

# 进入容器
docker exec -it [container] bash

```

## docker compose

多个镜像的管理命令

```yml
version: "2.4"
services:
  cssdemo:
    # image指定镜像，本地没有的话，会远程拉取
    # image: css
    # 也可以用build创建镜像，值为dockerfile的路径，可详细配置
    build: .
    # 容器名称
    container_name: cssdemo_compose
    # 文件挂载
    volumes:
      - ./build:/dist
      - ./start.sh:/script
    # 端口映射
    ports:
      - "8081:80"
    restart: always
```

```shell
# 启动 -d后台运行 --build 启动时新建镜像
docker-compose up -d

# 停止
docker-compose down
```
