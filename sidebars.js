/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  // learn: {
  //   简介: ["learn/greeting"],
  //   CSS炫酷效果集合: ["learn/tools/magicLine"],
  // },
  learn: [
    "learn/css-intro",
    {
      CSS炫酷效果集合: [
        "learn/tools/magicLine/magic-line",
        "learn/tools/swingButton/swing-button",
        "learn/tools/navBar/navbar",
        "learn/tools/shakeEffect/shake-effect",
        "learn/tools/scrollNum/scroll-num",
      ],
    },
  ],
  // learn: [
  //   {
  //     // 文件夹需要改成以数字命名的
  //     type: "autogenerated",
  //     dirName: "learn",
  //   },
  // ],
};

module.exports = sidebars;
