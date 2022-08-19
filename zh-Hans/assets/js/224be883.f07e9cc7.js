"use strict";(self.webpackChunkskyler_blog=self.webpackChunkskyler_blog||[]).push([[116],{5969:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"deploy-website","metadata":{"permalink":"/skyler-blog/zh-Hans/deploy-website","source":"@site/demoblog/2022-08-19-deploy-website.mdx","title":"Docusaurus \u53d1\u5e03\u7f51\u7ad9","description":"\u4e0a\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u535a\u5ba2\u7f51\u7ad9\uff0c\u672c\u7bc7\u4e3b\u8981\u4ecb\u7ecd\u4e00\u4e0b\uff0c\u5982\u4f55\u53d1\u5e03\u7f51\u7ad9","date":"2022-08-19T00:00:00.000Z","formattedDate":"2022\u5e748\u670819\u65e5","tags":[{"label":"\u7f51\u7ad9\u642d\u5efa","permalink":"/skyler-blog/zh-Hans/tags/\u7f51\u7ad9\u642d\u5efa"},{"label":"\u6280\u672f","permalink":"/skyler-blog/zh-Hans/tags/\u6280\u672f"}],"readingTime":1.895,"hasTruncateMarker":true,"authors":[{"name":"\u5218\u5929","title":"\u524d\u7aef\u5de5\u7a0b\u5e08","url":"https://github.com/Skylerliutian","email":"skyler151096@gmail.com","imageURL":"https://imgse.com/i/vsp7kV","key":"skyler"}],"frontMatter":{"slug":"deploy-website","title":"Docusaurus \u53d1\u5e03\u7f51\u7ad9","authors":"skyler","tags":["\u7f51\u7ad9\u642d\u5efa","\u6280\u672f"]},"nextItem":{"title":"Docusaurus\u642d\u5efa\u535a\u5ba2\u7f51\u7ad9","permalink":"/skyler-blog/zh-Hans/create-own-blog-website"}},"content":"\u4e0a\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u535a\u5ba2\u7f51\u7ad9\uff0c\u672c\u7bc7\u4e3b\u8981\u4ecb\u7ecd\u4e00\u4e0b\uff0c\u5982\u4f55\u53d1\u5e03\u7f51\u7ad9\\n\\n\x3c!--truncate--\x3e\\n\\n## \u53d1\u5e03\u5230 Github Pages\\n\\n1. \u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539\\n\\n```shell\\n// docusaurus.config.js\\nmodule.exports = {\\n  // ...\\n  url: \'https://endiliey.github.io\', // \u4f60\u7684\u7f51\u7ad9 URL\\n  baseUrl: \'/\',\\n  projectName: \'endiliey.github.io\',   // github \u4ed3\u5e93\u540d\u79f0\\n  organizationName: \'endiliey\',   // gitHub \u7528\u6237\u540d\\n  trailingSlash: false,\\n  // ...\\n};\\n```\\n\\n> \u6bcf\u4e2a GitHub \u4ed3\u5e93\u90fd\u5173\u8054\u6709\u4e00\u4e2a GitHub Pages \u670d\u52a1\u3002 \u5982\u679c\u90e8\u7f72\u4ed3\u5e93\u53eb\u4f5c my-org/my-project\uff08my-org \u662f\u7ec4\u7ec7\u540d\u6216\u7528\u6237\u540d\uff09\uff0c\u90a3\u4e48\u7f51\u7ad9\u4f1a\u88ab\u90e8\u7f72\u5728 https://my-org.github.io/my-project/ \u5904\u3002 \u7279\u522b\u5730\uff0c\u5982\u679c\u90e8\u7f72\u4ed3\u5e93\u53eb\u4f5c my-org/my-org.github.io\uff08\u4e5f\u5c31\u662f \u7ec4\u7ec7 GitHub Pages \u4ed3\u5e93\uff09\uff0c\u90a3\u4e48\u7f51\u7ad9\u4f1a\u88ab\u90e8\u7f72\u5728 https://my-org.github.io/\u3002\\n\\n\u6ce8\u610f\uff1a\ud83d\udc46 \u63d0\u5230\u7684\uff0c\u5982\u679c\u4ed3\u5e93\u7684\u540d\u79f0\u4e0d\u662f `my-org.github.io` \u7684\u8bdd\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 `baseUrl` \u8bbe\u7f6e\u6210\u4e3a `/my-project/` \u5426\u5219\u4f1a\u51fa\u73b0\u6837\u5f0f\u4e22\u5931\u7684\u95ee\u9898\u3002\\n:::caution\\nGitHub Pages \u9ed8\u8ba4\u4e3a Docusaurus \u7f51\u5740\u94fe\u63a5\u6dfb\u52a0\u672b\u5c3e\u659c\u6760\u3002 \u5efa\u8bae\u8bbe\u7f6e trailingSlash\uff08true \u6216 false \u90fd\u53ef\u4ee5\uff0c\u53ea\u8981\u4e0d\u662f undefined\uff09\u3002\\n:::\\n\\n2. \u6267\u884c\u547d\u4ee4\\n\\n```shell\\n// \u5982\u679cgit\u4ed3\u5e93\u662f\u901a\u8fc7ssh\u65b9\u5f0f\u8fde\u63a5\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\\nyarn deploy\\n\\n// \u5982\u679c\u662f\u901a\u8fc7https\u65b9\u5f0f\u8fde\u63a5\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\uff0c\u7528\u4e8e\u63a8\u9001\u90e8\u7f72\u6587\u4ef6\u7684 GitHub \u8d26\u6237\u7528\u6237\u540d\uff0c\u9700\u8981\u6709\u90e8\u7f72\u4ed3\u5e93\u7684\u63a8\u9001\u6743\u9650\u3002 \u5bf9\u4e8e\u4f60\u81ea\u5df1\u7684\u4ed3\u5e93\uff0c\u8fd9\u4e00\u822c\u4f1a\u662f\u4f60\u81ea\u5df1\u7684 GitHub \u7528\u6237\u540d\u3002 \u4e0d\u4f7f\u7528 SSH \u65f6\u5fc5\u586b\uff0c\u4f7f\u7528 SSH \u65f6\u5219\u4f1a\u88ab\u5ffd\u7565\u3002\\nGIT_USER=<GITHUB_USERNAME> yarn deploy\\n```\\n\\n3. \u53d1\u5e03\u6210\u529f\\n   \u8bbf\u95ee https://endiliey.github.io \u5373\u53ef\u770b\u5230\u7f51\u7ad9\u3002\\n\\n4. \u4f7f\u7528 Github Actions \u5b9e\u73b0\u81ea\u52a8\u90e8\u7f72"},{"id":"create-own-blog-website","metadata":{"permalink":"/skyler-blog/zh-Hans/create-own-blog-website","source":"@site/demoblog/2022-08-18-create-own-blog-website.md","title":"Docusaurus\u642d\u5efa\u535a\u5ba2\u7f51\u7ad9","description":"\u5927\u6982\u662f 2020 \u5e74\u56e0\u4e3a\u75ab\u60c5\uff0c\u53ea\u80fd\u5728\u5bb6\u4e0a\u7f51\u8bfe\uff0c\u7a7a\u4f59\u65f6\u95f4\u5f88\u591a\uff0c\u5c31\u4f7f\u7528 wordpress + \u963f\u91cc\u4e91\u670d\u52a1\u5668\u642d\u5efa\u4e86\u4e00\u4e2a\u535a\u5ba2\u7f51\u7ad9\uff0c\u4f46\u662f\u56e0\u4e3a\u81ea\u5236\u529b\u4e0d\u5f3a\uff0c\u628a\u7f51\u7ad9\u642d\u5efa\u8d77\u6765\u4e4b\u540e\u4e5f\u5c31\u6ca1\u6709\u7ba1\u7406\u8fc7\u4e86\uff0c\u76f4\u5230\u53bb\u5e74\u57df\u540d\u8fc7\u671f\u4e86\uff0c\u518d\u52a0\u4e0a\u5de5\u4f5c\u4e4b\u540e\u79ef\u7d2f\u7684\u4e00\u4e9b\u7ecf\u9a8c\u548c\u77e5\u8bc6\u90fd\u88ab\u96f6\u6563\u5316\u7684\u8bb0\u5f55\u5728\u4e86\u672c\u5730\u7535\u8111\u4e0a\uff0c\u6240\u4ee5\u8fd9\u53c8\u840c\u751f\u51fa\u4e86\u642d\u5efa\u4e00\u4e2a\u4e2a\u4eba\u535a\u5ba2\u7f51\u7ad9\u7684\u5ff5\u5934\u3002\u7528\u8fd9\u4e2a\u535a\u5ba2\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u4f7f\u7528 Docusaurus \u642d\u5efa\u535a\u5ba2\u7f51\u7ad9\u7684\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u642d\u5efa\u535a\u5ba2\u7f51\u7ad9\u7684\u6b65\u9aa4\u3002\u5f53\u7136\u91c7\u7528 Docusaurus \u7684\u53e6\u4e00\u4e2a\u539f\u56e0\u4e5f\u662f\u5728 B \u7ad9\u4e0a\u770b\u5230\u4e86 UP \u4e3b \u5cf0\u534e\u524d\u7aef\u5de5\u7a0b\u5e08 \u7684\u8fd9\u4e2a\u89c6\u9891\u3002","date":"2022-08-18T00:00:00.000Z","formattedDate":"2022\u5e748\u670818\u65e5","tags":[{"label":"\u7f51\u7ad9\u642d\u5efa","permalink":"/skyler-blog/zh-Hans/tags/\u7f51\u7ad9\u642d\u5efa"},{"label":"\u6280\u672f","permalink":"/skyler-blog/zh-Hans/tags/\u6280\u672f"}],"readingTime":5.2,"hasTruncateMarker":true,"authors":[{"name":"\u5218\u5929","title":"\u524d\u7aef\u5de5\u7a0b\u5e08","url":"https://github.com/Skylerliutian","email":"skyler151096@gmail.com","imageURL":"https://imgse.com/i/vsp7kV","key":"skyler"}],"frontMatter":{"slug":"create-own-blog-website","title":"Docusaurus\u642d\u5efa\u535a\u5ba2\u7f51\u7ad9","authors":"skyler","tags":["\u7f51\u7ad9\u642d\u5efa","\u6280\u672f"]},"prevItem":{"title":"Docusaurus \u53d1\u5e03\u7f51\u7ad9","permalink":"/skyler-blog/zh-Hans/deploy-website"},"nextItem":{"title":"\u4e2a\u4eba\u4ecb\u7ecd","permalink":"/skyler-blog/zh-Hans/first-blog"}},"content":"\u5927\u6982\u662f 2020 \u5e74\u56e0\u4e3a\u75ab\u60c5\uff0c\u53ea\u80fd\u5728\u5bb6\u4e0a\u7f51\u8bfe\uff0c\u7a7a\u4f59\u65f6\u95f4\u5f88\u591a\uff0c\u5c31\u4f7f\u7528 wordpress + \u963f\u91cc\u4e91\u670d\u52a1\u5668\u642d\u5efa\u4e86\u4e00\u4e2a\u535a\u5ba2\u7f51\u7ad9\uff0c\u4f46\u662f\u56e0\u4e3a\u81ea\u5236\u529b\u4e0d\u5f3a\uff0c\u628a\u7f51\u7ad9\u642d\u5efa\u8d77\u6765\u4e4b\u540e\u4e5f\u5c31\u6ca1\u6709\u7ba1\u7406\u8fc7\u4e86\uff0c\u76f4\u5230\u53bb\u5e74\u57df\u540d\u8fc7\u671f\u4e86\uff0c\u518d\u52a0\u4e0a\u5de5\u4f5c\u4e4b\u540e\u79ef\u7d2f\u7684\u4e00\u4e9b\u7ecf\u9a8c\u548c\u77e5\u8bc6\u90fd\u88ab\u96f6\u6563\u5316\u7684\u8bb0\u5f55\u5728\u4e86\u672c\u5730\u7535\u8111\u4e0a\uff0c\u6240\u4ee5\u8fd9\u53c8\u840c\u751f\u51fa\u4e86\u642d\u5efa\u4e00\u4e2a\u4e2a\u4eba\u535a\u5ba2\u7f51\u7ad9\u7684\u5ff5\u5934\u3002\u7528\u8fd9\u4e2a\u535a\u5ba2\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u4f7f\u7528 Docusaurus \u642d\u5efa\u535a\u5ba2\u7f51\u7ad9\u7684\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u642d\u5efa\u535a\u5ba2\u7f51\u7ad9\u7684\u6b65\u9aa4\u3002\u5f53\u7136\u91c7\u7528 Docusaurus \u7684\u53e6\u4e00\u4e2a\u539f\u56e0\u4e5f\u662f\u5728 B \u7ad9\u4e0a\u770b\u5230\u4e86 UP \u4e3b [\u5cf0\u534e\u524d\u7aef\u5de5\u7a0b\u5e08](https://www.bilibili.com/video/BV1uE411x7mE?) \u7684\u8fd9\u4e2a\u89c6\u9891\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## Docusaurus \u4ecb\u7ecd\\n\\n\u5b98\u7f51\u7b80\u4ecb\uff1a[Docusaurus](https://docusaurus.io/zh-CN/docs) \u662f\u4e00\u6b3e\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\u3002 \u53ef\u4ee5\u642d\u5efa\u5e26\u6709\u5feb\u901f\u5ba2\u6237\u7aef\u5bfc\u822a\u7684\u5355\u9875\u5e94\u7528\uff0c\u5145\u5206\u5229\u7528\u4e86 React\uff0c\u8ba9\u4f60\u7684\u7f51\u7ad9\u5177\u6709\u4ea4\u4e92\u80fd\u529b\u3002 \u5b83\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u6587\u6863\u529f\u80fd\uff0c\u4e0d\u8fc7\u4e5f\u53ef\u7528\u4e8e\u642d\u5efa\u5404\u79cd\u7f51\u7ad9\uff08\u4e2a\u4eba\u7f51\u7ad9\u3001\u4ea7\u54c1\u3001\u535a\u5ba2\u3001\u8425\u9500\u4e3b\u9875\uff0c\u7b49\u7b49\uff09\u3002\\n\\n## \u642d\u5efa\u6d41\u7a0b\\n\\n\u642d\u5efa\u6d41\u7a0b\u5b98\u7f51\u4e0a\u6709\u8be6\u7ec6\u7684\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u6211\u4f1a\u628a\u6b65\u9aa4\u548c\u6211\u9047\u5230\u7684\u95ee\u9898\uff0c\u8e29\u8fc7\u7684\u5751\u8bb0\u5f55\u4e0b\u6765\u3002\\n\\n1. \u5b89\u88c5 Docusaurus\\n   \u9996\u5148\u786e\u4fdd\u7535\u8111\u6709 node \u73af\u5883\uff0c\u8fd9\u91cc\u5173\u4e8e node \u73af\u5883\u7684\u5b89\u88c5\u4e0d\u505a\u8d58\u8ff0\u3002\\n\\n```bash\\nnpx create-docusaurus@latest my-website classic\\n```\\n\\n2. \u76ee\u5f55\u7ed3\u6784\\n   \u4e0b\u9762\u662f\u4e3b\u8981\u76ee\u5f55\u7684\u4ecb\u7ecd\uff1a\\n\\n```bash\\n\u251c\u2500\u2500 babel.config.js\\n\u251c\u2500\u2500 blog\\n\u2502   \u251c\u2500\u2500 2020-02-21-first-blog.md   # \u535a\u5ba2\u6587\u4ef6\\n\u2502   \u2514\u2500\u2500 img                        # \u535a\u5ba2\u56fe\u7247\\n\u251c\u2500\u2500 docs\\n\u2502   \u2514\u2500\u2500 doc1.md                    # \u6587\u6863\\n\u251c\u2500\u2500 docusaurus.config.js\\n\u251c\u2500\u2500 package.json\\n\u251c\u2500\u2500 sidebars.js\\n\u251c\u2500\u2500 src\\n\u2502   \u251c\u2500\u2500 components                 # \u81ea\u5b9a\u4e49\u7ec4\u4ef6\\n\u2502   \u251c\u2500\u2500 css                        # \u81ea\u5b9a\u4e49 CSS\\n\u2502   \u251c\u2500\u2500 pages                      # \u81ea\u5b9a\u4e49\u9875\u9762\\n\u251c\u2500\u2500 static\\n\u2502   \u251c\u2500\u2500 icons                      # \u516c\u7528\u56fe\u6807\\n\u2502   \u251c\u2500\u2500 img                        # \u516c\u7528\u56fe\u7247\uff08\u4ee5\u53ca\u9057\u7559\u7684\u535a\u5ba2\u56fe\u7247\uff09\\n\u2514\u2500\u2500 yarn.lock\\n```\\n\\n3. \u8fd0\u884c\u7f51\u7ad9\\n\\n```bash\\ncd my-website\\nyarn start\\n```\\n\\n\u8fd9\u91cc\u6211\u4f7f\u7528\u7684\u662f yarn\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f npm\uff0c\u90a3\u4e48\u5c31\u6539\u6210 npm start\u3002\\n\\n\u606d\u559c\u4f60 \ud83c\udf89\uff0c\u4f60\u5df2\u7ecf\u642d\u5efa\u6210\u529f\u4e86\uff0c\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u4f60\u7684\u7f51\u7ad9\u4e86\u3002http://localhost:3000\\n\\n\u6ca1\u60f3\u5230\u5427\uff0c\u642d\u5efa\u4e00\u4e2a\u7f51\u7ad9\u662f\u8fd9\u4e48\u7b80\u5355\uff0c\u9ed8\u8ba4\u7684\u7f51\u7ad9\u662f\u8fd9\u4e2a\u6837\u5b50\u3002\\n\\n![](./img/2022-08-18-15-08.jpg)\\n\\n3. \u914d\u7f6e\u6587\u4ef6\u4fee\u6539\\n   \u9ed8\u8ba4\u7684\u754c\u9762\u5305\u62ec\u6587\u6863\u90e8\u5206\u548c\u535a\u5ba2\u90e8\u5206\uff0c\u5982\u679c\u4f60\u53ea\u9700\u8981\u5176\u4e2d\u7684\u67d0\u4e00\u4e2a\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 `docusaurus.config.js` \u4e2d\u4fee\u6539\u3002\\n\\n```js\\nmodule.exports = {\\n  // ...\\n  presets: [\\n    [\\n      \\"@docusaurus/preset-classic\\",\\n      {\\n        docs: false, // \u53ef\u9009\uff1a\u7981\u7528\u6587\u6863\u63d2\u4ef6\\n        blog: {\\n          routeBasePath: \\"/\\", // \u628a\u535a\u5ba2\u653e\u5728\u7ad9\u70b9\u6839\u90e8\\n          /* \u5176\u4ed6\u535a\u5ba2\u9009\u9879 */\\n        },\\n      },\\n    ],\\n  ],\\n};\\n```\\n\\n\u6211\u914d\u7f6e\u4e86\u4ec5\u535a\u5ba2\u6a21\u5f0f\uff0c\u6240\u4ee5\u6211\u628a\u6587\u6863\u90e8\u5206\u7981\u7528\u4e86\u3002\\n\\n`docusaurus.config.js` \u4e2d\u5177\u4f53\u7684\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003[\u8fd9\u91cc](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)\u3002\\n\\n4. \u66f4\u6539\u9ed8\u8ba4\u535a\u5ba2\u9875\u9762\u5e03\u5c40\\n   \u535a\u5ba2\u9ed8\u8ba4\u754c\u9762\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\uff0c\u5982\u679c\u4e0d\u559c\u6b22\u8fd9\u4e2a\u5e03\u5c40\u7684\u8bdd\u53ef\u4ee5\u8fdb\u884c\u66f4\u6539\u3002\\n\\n![](./img/2022-08-18-15-18.jpg)\\n\\n\u535a\u5ba2\u90e8\u5206\u7684\u5177\u4f53\u914d\u7f6e\u662f\u4f7f\u7528\u4e86 `plugin-content-blog` \u8fd9\u4e2a\u63d2\u4ef6\u3002\u8fd9\u4e2a\u63d2\u4ef6\u9ed8\u8ba4\u96c6\u6210\u5728\u4e86 `@docusaurus/preset-classic` \u91cc\uff0c\u6211\u4eec\u4e0d\u7528\u8fdb\u884c\u4e0b\u8f7d\u3002\u5173\u4e8e\u63d2\u4ef6\u7684\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003[\u8fd9\u91cc](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog)\u3002\\n\\n\u914d\u7f6e\u63a5\u53d7\u8fd9\u4e24\u4e2a\u5b57\u6bb5\uff0c`blogListComponent` \u548c `blogPostComponent`\u3002\\n\\n![](./img/2022-08-18-15-23.jpg)\\n\\n\u4ee5 `blogListComponent` \u4e3a\u4f8b\u5b50\uff0c\u9ed8\u8ba4\u662f `@theme/BlogListPage`\uff0c \u6211\u4eec\u53ea\u9700\u8981\u5728 `src/` \u4e0b\u65b0\u5efa\u4e00\u4e2a `theme/BlogListPage/index.js` \u7136\u540e\u4fee\u6539\u6210\u81ea\u5df1\u60f3\u8981\u7684\u6837\u5f0f\u5e03\u5c40\u5373\u53ef\u3002\\n\\n> \u65b0\u5efa\u6587\u4ef6\u4e4b\u540e\u4e00\u5b9a\u8981\u91cd\u65b0 `yarn start` \u5426\u5219\u4e0d\u4f1a\u751f\u6548\uff0c\u52a0\u8f7d\u7684\u8fd8\u662f `@docusaurus/preset-classic` \u4e2d\u7684\u5bf9\u5e94\u6587\u4ef6\u3002\\n> \u5148\u627e\u5230\u9ed8\u8ba4 `BlogListPage` \u8fd9\u4e2a\u6587\u4ef6\uff0c\u628a\u6e90\u7801\u590d\u5236\u5230\u65b0\u5efa\u7684\u6587\u4ef6\u4e2d\uff0c\u8fd9\u91cc\u9762\u5305\u542b\u7740\u62ff\u5230\u535a\u5ba2\u6587\u7ae0\u7b49\u4e00\u4e9b\u5176\u4ed6\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u6839\u636e\u6e90\u7801\u8fdb\u884c\u4e00\u4e9b\u5176\u5b83\u7684\u6837\u5f0f\u65b9\u9762\u7684\u4fee\u6539\u3002\\n\\n## \u5f85\u7eed\\n\\n\u4ee5\u4e0a\u5c31\u662f\u6211\u76ee\u524d\u642d\u5efa\u535a\u5ba2\u7684\u4e00\u4e2a\u57fa\u672c\u6b65\u9aa4\uff0c\u4f46\u662f\u5927\u90e8\u5206\u90fd\u662f\u53c2\u8003\u5b98\u65b9\u6587\u6863\u548c\u5cf0\u534e\u5927\u4f6c\u7684\u6e90\u7801\u8fdb\u884c\u914d\u7f6e\u7684\u3002\u5982\u679c\u53ea\u662f\u5355\u7eaf\u7684\u535a\u5ba2\u5bf9\u754c\u9762\u6ca1\u6709\u8981\u6c42\u7684\u5c0f\u4f19\u4f34\u4eec\uff0c\u53ef\u4ee5\u53bb\u5199\u8d77\u6765\u4e86\u3002\u4e0b\u4e00\u6b65\u662f\u66f4\u65b0\u8fd9\u4e2a\u535a\u5ba2\u7684\u754c\u9762\u548c\u4e00\u4e9b\u5176\u5b83\u914d\u7f6e\uff0c\u6211\u4f1a\u66f4\u65b0\u5728\u8fd9\u7bc7\u535a\u5ba2\u4e2d\u3002\\n\\n\u6709\u4ec0\u4e48\u60f3\u4ea4\u6d41\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u8054\u7cfb\u6211\u54e6 **skyler151096@gmail.com**"},{"id":"first-blog","metadata":{"permalink":"/skyler-blog/zh-Hans/first-blog","source":"@site/demoblog/2022-08-18-first-blog.md","title":"\u4e2a\u4eba\u4ecb\u7ecd","description":"Hello\uff0c\u5927\u5bb6\u597d\u554a\uff0c\u6211\u662fskyler\uff0c\u4e00\u4e2a\u6b63\u5728\u52aa\u529b\u5b66\u4e60\u7684\u524d\u7aef\u5c0f\u83dc\u9e21","date":"2022-08-18T00:00:00.000Z","formattedDate":"2022\u5e748\u670818\u65e5","tags":[{"label":"\u95f2\u8a00\u788e\u8bed","permalink":"/skyler-blog/zh-Hans/tags/\u95f2\u8a00\u788e\u8bed"}],"readingTime":1.94,"hasTruncateMarker":true,"authors":[{"name":"\u5218\u5929","title":"\u524d\u7aef\u5de5\u7a0b\u5e08","url":"https://github.com/Skylerliutian","email":"skyler151096@gmail.com","imageURL":"https://imgse.com/i/vsp7kV","key":"skyler"}],"frontMatter":{"slug":"first-blog","title":"\u4e2a\u4eba\u4ecb\u7ecd","authors":"skyler","tags":["\u95f2\u8a00\u788e\u8bed"]},"prevItem":{"title":"Docusaurus\u642d\u5efa\u535a\u5ba2\u7f51\u7ad9","permalink":"/skyler-blog/zh-Hans/create-own-blog-website"}},"content":"Hello\uff0c\u5927\u5bb6\u597d\u554a\uff0c\u6211\u662fskyler\uff0c\u4e00\u4e2a\u6b63\u5728\u52aa\u529b\u5b66\u4e60\u7684\u524d\u7aef\u5c0f\u83dc\u9e21\\n\\n\x3c!--truncate--\x3e\\n## \u4e2a\u4eba\u4ecb\u7ecd\\n\\nHello\uff0c\u6211\u662fskyler\uff0c\u6bd5\u4e1a\u4e8e\u6fb3\u5927\u5229\u4e9a\u65b0\u5357\u5a01\u5c14\u58eb\u5927\u5b66\uff0c\u73b0\u5728\u5728\u5317\u4eac\u5c31\u804c\u4e8e\u67d0\u4e92\u8054\u7f51\u516c\u53f8\uff0c\u62c5\u4efb\u524d\u7aef\u5f00\u53d1\u7684\u5c97\u4f4d\u3002\\n\\n## \u5efa\u7acb\u8fd9\u4e2a\u535a\u5ba2\u7684\u76ee\u7684\\n\\n\u5efa\u7acb\u8fd9\u4e2a\u535a\u5ba2\u7684\u76ee\u7684\u7684\u539f\u56e0\u4e3b\u8981\u662f\u60f3\u628a\u81ea\u5df1\u5728\u5e73\u65f6\u5de5\u4f5c\u4e2d\u6216\u751f\u6d3b\u4e2d\u5b66\u5230\u7684\u4e00\u4e9b\u77e5\u8bc6\u5f62\u6210\u6587\u6863\u6c89\u6dc0\u4e0b\u6765\u3002\u4ee5\u524d\u5c31\u662f\u5355\u7eaf\u7684\u8bb0\u5f55\u5728\u7535\u8111\u672c\u5730\u4e2d\uff0c\u60f3\u8d77\u6765\u5c31\u4f1a\u8bb0\u5f55\u4e00\u4e0b\uff0c\u60f3\u4e0d\u8d77\u6765\u4e5f\u5c31\u4f1a\u5fd8\u8bb0\u4e86\uff0c\u4f1a\u9519\u8fc7\u5f88\u591a\u7684\u77e5\u8bc6\u70b9\uff1b\u518d\u52a0\u4e0a\u53ef\u80fd\u60f3\u8bb0\u5f55\u7684\u4e1c\u897f\u7684\u7c7b\u522b\u6bd4\u8f83\u591a\uff0c\u901a\u5e38\u4f1a\u8bb0\u5f55\u5728\u4e0d\u540c\u7684\u6587\u6863\u4e2d\uff0c\u4e5f\u6bd4\u8f83\u9ebb\u70e6\uff1b\u6709\u65f6\u5019\u4f1a\u5728\u4e0d\u7ecf\u610f\u7684\u65f6\u5019\u7a81\u7136\u6709\u4e00\u4e2a\u7075\u611f\uff0c\u4f46\u662f\u5f53\u4e0b\u6709\u5de5\u4f5c\u9700\u8981\u5904\u7406\uff0c\u4f1a\u5306\u5306\u7684\u8bb0\u5f55\u5728\u4e00\u4e2a\u5730\u65b9\uff0c\u4e8b\u540e\u5c31\u4f1a\u629b\u4e4b\u8111\u540e\uff1b\u5efa\u7acb\u8fd9\u4e2a\u535a\u5ba2\u9664\u4e86\u628a\u81ea\u5df1\u7684\u5b66\u5230\u7684\u77e5\u8bc6\u6c89\u6dc0\u4e0b\u6765\u4e4b\u5916\uff0c\u8fd8\u6709\u5c31\u662f\u901a\u8fc7\u4e0d\u65ad\u7684\u7801\u5b57\u5e0c\u671b\u53ef\u4ee5\u63d0\u5347\u81ea\u5df1\u7684\u5199\u4f5c\u80fd\u529b\uff0c\u4e5f\u662f\u901a\u8fc7\u7801\u5b57\u6765\u8ba9\u81ea\u5df1\u5728\u7a7a\u95f2\u65f6\u95f4\u5fd9\u8d77\u6765\u4e0d\u80fd\u6c89\u8ff7\u4e8e\u6e38\u620f\u3002\\n\\n## \u6700\u540e\\n\u4eca\u5929\u662f2022.8.18\u65e5\uff0c\u535a\u5ba2\u7f51\u7ad9\u8fd8\u6ca1\u6709\u642d\u5efa\u8d77\u6765\uff0c\u4e4b\u540e\u4f1a\u628a\u8fd9\u4e2a\u7f51\u7ad9\u90e8\u7f72\u5230\u4e91\u670d\u52a1\u5668\u4e0a\uff0c\u540c\u65f6\u81ea\u5df1\u4e5f\u4f1a\u628a\u642d\u5efa\u535a\u5ba2\u7684\u6d41\u7a0b\u548c\u90e8\u7f72\u5230\u4e91\u670d\u52a1\u5668\u7684\u6d41\u7a0b\u90fd\u8bb0\u5f55\u4e0b\u6765\u7684\u3002\u5c3d\u60c5\u671f\u5f85\uff01"}]}')}}]);