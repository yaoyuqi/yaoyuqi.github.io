+++
title = "Use Hugo With Github Page"
description = ""
date = 2021-12-11T15:37:34+08:00
featured = false
draft = false
comment = false
toc = false
reward = false
categories = [
  "工具"
]
tags = [
  ""
]
series = []
images = []
+++

一直觉得自己总该写些什么，特别是在网上浏览别人的文档时，总会不自觉的被各种分享所吸引。 模糊中记得一句话，作为一个IT从业人员，重要的一点就是在网上留下自己的印记。好吧， 是否留下印记无所谓， 不过想想将来有一天翻看这些文档，犹如自己翻看曾经的日记，感觉也是挺美妙的。

大概两年前就打算这样弄过， 但是懒总是阻碍人类前进的一大阻力。 在github上开通了git page, 写下自己的大名之后，时间就静止了，一晃两年过去。

继续两年未竟之事业 —— 大约等于从头开始。

### 选择Host
当然是选择免费的，github提供了page。 如果是用码云的，似乎也有相应的page,道理类似。
 
所谓git page, 是github为每个人保留了一个特殊的repo, 就是你的用户名+ github.io. 创建好这个repo, 例如我的 yaoyuqi.github.io. 在里面更新静态html, 就可以访问：如http://yaoyuqi.github.io

### 建站方式
由于是静态页面，所以我们需要一个方案来将我们的文档有组织有结构的生成html。

手写是不可能的，这辈子都不可能的。

翻了翻，大约流行的是这三个jekyll, hexo, hugo. 这三个都是比较完整的框架，内置server, 也就是说可以运行后在本地通过浏览器访问本地的网页，同样也支持各种插件安装。最后生成需要上传的页面

#### 简单比较
| 方案 | 语言 | 特点 |
| ----- | ----- | ----------- |
| jekyll |  Ruby | 应该很老牌，github默认建git page时就推荐用这个。 应该各种插件之类很全。 编译速度慢一点 |
| hexo | Node |  用node搞的，好像是台湾的达人弄的，所以中文文档丰富 |
| hugo | go | 编译速度快。 看了看文档页，目测文档数量是hexo的两倍 ——  复杂 |

我本打算选用jekyll, 可以按照官方文档安装后运行报错， 搜了一下，应该是mac的m1芯片在调用sass的一个解析器时出错。对于这种错误，如果没有很快速的搜到解决方案，那就放弃，折腾起来太费时间 

——所以Jekylly被我放弃了。

于是我拥抱了hugo

### hugo构建
很简单
1. 将repo clone下来
1. 按照hugo文档安装。
1. 创建一个页面，运行`hugo server -D` ，即可在本地查看预览
1. 推送上去就能访问了

突然发现我的这个guide很水。。。 😄😄😄😄

其实最后一点不准确，推送上去是看不到刚才创建的文章的，甚至连网页都打不开，因为整个repo都变成了包含hugo的一整套库，git page是不认识的，记得吗，人家只认静态页面。 

我们推送的应该是hugo编译好的结果的文件。例如xxx.html/ xxx.js/ xxxx.cs


这些文件在哪里呢？ 其实在public目录下，运行`hugo` 就会生成，因此我们要上传的其实是这个public文件夹。

### 更进一步
参考hugo的部署文档，发现里面指导使用github的actions来发布。
关于github的actions, 可以参考[这篇文章](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

简单的说，这个actions就类似jenkins, github提供了一些虚拟机环境，你可以通过配置脚本在执行一些操作。

以我们发布文章来说，我们需要当提交整个repo后，github能够帮我们编译生成静态页面，然后将其放到我们git page的页面里。
这里再说一下，github为这类提供了一个专用分支，gh-page, 也就是说按照部署文档来最后我们可以看到repo多了一个gh-page分支，里面就是public的内容。

使用github的actions很单间，就是在repo下创建一个.workflows目录，再放一个xx.yml，这个xx.yml就是配置文件。每次提交，github就会触发这个action

万事具备，于是这篇文章就诞生了。

