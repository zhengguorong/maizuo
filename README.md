# 模仿卖座网

> 使用vue/vuex/redux开发的卖座网

## 为什么要做这个项目?

> 最近在做技术选型,分别是vuejs和reactjs实现相同的逻辑,方便对比其开发效率,开发体验和代码维护难度.

## 该项目涉及的技术

> vueMaizuo: webpack + vuejs + vue-resource + vue-router

> vuexMaizuo: webpack + vuejs + vuex + vue-resource + vue-router

> vuexMaizuo2: webpack + vuejs2.0 + vuex2.0 + vue-resource + vue-router2.0

> reduxMaizuo: webpack + reactjs +redux + react-router-redux + fetch Api

## 关于使用vue2.0重构

> vue2.0 10月初发布正式版了，官方的插件，vuex,vue-router同样升级到2.0了，据说2.0性能比react性能高。

> 重构过程比较顺利，没什么困难，最主要是生命周期名变更，还有vuex的小变动，可以使用vue-migration-helper帮助升级，有比较友好的提示。

> vue2.0如果性能如网上所说的那么快，我建议使用vue,我比较喜欢vue的语法。

## vue2.0参考资料

> 官方文档http://vuejs.org/guide/ 中文翻译http://vuefe.cn/
> vue-router2文档 http://router.vuejs.org/zh-cn/index.html
> vuex2.0文档 http://vuex.vuejs.org/en/index.html
> vue-resourece https://github.com/vuejs/vue-resource
> 滑动广告插件 https://github.com/surmon-china/vue-awesome-swiper

## 个人感受

> 1.在大型项目中,建议使用vuex或者redux,不使用在状态管理上会很麻烦.

> 2.总体开发效率上,vue比较快,而且概念相对容易理解,开发文档也相对友好.

> 3.reactjs的好处就是,可以延伸到react-native还有他的生态比较好,第三方组件的完整度比较高.

##跨域问题

> 跨域可以使用谷歌的插件解决:https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

> 或者谷歌开启允许跨域,参考 http://camnpr.com/archives/chrome-args-disable-web-security.html

##演示效果
![](vue卖座网.gif)