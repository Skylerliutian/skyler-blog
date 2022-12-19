---
slug: json-stringify
title: JSON.stringify
author: skyler
author_title: 前端工程师
author_url: https://github.com/Skylerliutian
tags: [前端]
---

大家对 JSON.stringify()这个方法肯定不陌生，但是不是有很多小伙伴跟我一样才知道，这个方法的参数是 3 个呢。今天看一下 JSON.stringify 的参数详解。

<!-- truncate -->

首先让我们看看源码中，stringify 方法以及参数是怎么定义的
![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-12-19-17-rni6Qv-ODzZG9.png)
可以看到参数有三个：

1. value - 要转换成字符串的对象
2. replacer - 可以是方法或 number/string 数组, 主要作用是确定怎么转换对象中的值
3. space - 缩进/换行/空格 使转换后的字符串可读性更高

```js
let obj = {
  name: "skyler",
  gender: "male",
  age: 25,
  skills: ["唱", "跳", "rap", "篮球"],
};
```

## value

```js
console.log(JSON.stringify(obj));

//  '{"name":"skyler","gender":"male","age":25,"skills":["唱","跳","rap","篮球"]}'
```

## replacer

第二个参数我们可以传递一个字符数组，内容为需要转换的 key

```js
JSON.stringify(obj, ["name", "skills"]);

// '{"name":"skyler","skills":["唱","跳","rap","篮球"]}'
```

或者是一个方法

```js
JSON.stringify(obj, (key, value) => {
  if (key === "skills") {
    return undefined;
  }
  return value;
});

// '{"name":"skyler","gender":"male","age":25}'

JSON.stringify(obj, (key, value) => {
  if (key === "skills") {
    return ["看电影"];
  }
  return value;
});

// '{"name":"skyler","gender":"male","age":25,"skills":["看电影"]}'
```

## space

第三个参数就是空格的个数(1-10) 或者是其他字符串

```js
JSON.stringify(obj);
```

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-12-19-17-SmuURp-pryZv0.png)

```js
JSON.stringify(obj, null, 4);
```

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-12-19-17-LxoTvI-dFrxwP.png)

```js
JSON.stringify(obj, null, "strings  ");
```

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-12-19-17-R6WLPg-gFQQJ4.png)

## 小彩蛋

如果不想对象被转换成字符串可以给对象添加一个方法

```js
let obj = {
  name: "skyler",
  gender: "male",
  age: 25,
  skills: ["唱", "跳", "rap", "篮球"],
  toJSON: () => "我看你就是一个小黑子！",
};
console.log(JSON.stringify(obj));

// '"我看你就是一个小黑子！"'
```
