---
slug: console-multiple-usage
title: console之你不知道的用法
authors: skyler
description: console, js, javascript的多种用法
tags: [技术]
---

## console.log

1. 字符串替换

```js
const personal = {
  name: "skyler",
  age: 25,
  contact: {
    phone: "66666",
    email: "skyler@qq.com",
  },
};
```

<!-- truncate -->

%s 替换成字符串
%d 替换成整数
%f 替换成浮点数
%o/%O 替换成对象

- `console.log(`this is ${personal.name}, ${personal.age} years old`)`
- `console.log('this is %s, %d years old', personal.name, personal.age)`
- `console.log('his contact info is %o', personal.contact)`

2. 定义样式

%c 可以定义后面字符的 css 样式

- `console.log('hello %cworld', 'color: red; font-size:20px')`

```js
function printVersion(name, version) {
  console.log(
    `%c${name}%cv${version}`,
    "color: white;padding: 4px 6px;border-radius: 4px 0 0 4px;background-color: #515151",
    "color: white;padding: 4px 6px;border-radius: 0 4px 4px 0;background-color: #0575b7"
  );
}
printVersion("npm", "10.15");
```

借此可以在控制台中打印出炫酷的版本信息

## console 的其他方法

1. console.warn
2. console.error
3. console.info
4. console.debug
5. console.log

以上五种都是打印信息的方法，展示效果不同

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-15-s8stPY-f0gM82.png)

console.debug 默认不显示，需要调整控制台日志级别的过滤选项，使其支持 Debug 或 Verbose 后才会显示。

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-15-y2CQAT-846qB8.png)

## 巧用 console，提升 debug 效率

1. 对于同类型的变量，比如布尔值可以

```js
const isDisable = true;
const isCorrect = false;
console.log({ isDisable, isCorrect });
```

2. 对于对象列表，如果对象中的 key 比较多，console.log 直接打印出来是收起来的

```js
const demo = [
  { key: 1, id: 1, name: 1, age: 1 },
  { key: 1, id: 1, name: 1, age: 1 },
  { key: 1, id: 1, name: 1, age: 1 },
];
console.table(demo);
```

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-15-KzAPVN-152Xgh.png)

可以单独打印出某个 key 对应的 value

```js
console.table(demo, ["name"]);
```

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-16-CR5LXJ-AnB6AK.png)

3. 分组打印

```js
function groupA() {
  console.group("This is A");
  console.log("Test");
  console.groupEnd();
}
function groupB() {
  console.group("This is B");
  console.log("Test1");
  groupA();
  console.log("Test2");
  console.groupEnd();
}
groupB();
```

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-16-m8FWTf-HGkwk8.png)

4. 统计次数

   ![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-16-oeo3Ta-U5sbVd.png)

   console.countReset() 重置计数器

5. 统计时间

   ![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-11-03-16-sg9I5j-z9BhqN.png)
