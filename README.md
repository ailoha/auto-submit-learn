# auto-submit-learn

「xfks-study」的半自动学习浏览器插件

## 原理

利用「xfks-study」网站在浏览器F12控制台输入`submitLearn()`即可快速完成课程文档学习获得学分的“方法”，创建一个进入「xfks-study」页面便自动输入`submitLearn()`的插件，快速完成学习任务。

## 使用方法

1. 在电脑本地任意位置新建一个文件夹，命名随意，例如`auto-submit-learn`（插件名）；
2. 把本仓库的`content.js`、`inject.js`、`manifest.json`这三个文件下载至这个文件夹；
3. 在Chrome浏览器，输入地址`chrome://extensions/`；
4. 右上角打开「开发者模式」；
5. 左上角点击「加载未打包的扩展程序」；
6. 确保这个新插件开关已开；
7. 然后进去「xfks-study」的课程文档马上就能完成学习了；
8. 快速点击「下一页」的按钮完成学习。
