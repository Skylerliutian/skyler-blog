---
slug: random-trick
title: 前端随机数小妙用
authors: skyler
tags: [前端]
---

前端开发中有一个 `Math.random()` 的方法，获取 0 - 1 之间的随机数。下面来介绍几种使用这个方法延伸出来的小妙招

<!-- truncate -->

### 随机颜色

前端 css 样式中的颜色是 16 进制的。

```js
// toString方法可以传递一个参数，转化成对应的进制的字符串
Math.random().toString(16).slice(2, 8);

// 截取之后可能不满6位，使用padEnd来进行补全
const randomColor = () =>
  "#" + Math.random().toString(16).slice(2, 8).padEnd(6, "0");
```

### 随机字符串

`toString(36)` 36 进制代表所有的数字和字母 0-9 a-z。所以使用 36 进制可以得到一个随机的字符串。

```js
// 获取指定长度的随机字符串
// 36进制字符串是有长度的,最多11位，所以可以进行判断然后递归调用获取
const randomString = (len = 6) => {
  if (len <= 11) {
    return Math.random()
      .toString(36)
      .slice(2, 2 + len)
      .padEnd(len, "0");
  } else {
    return randomString(11) + randomString(len - 11);
  }
};
```
