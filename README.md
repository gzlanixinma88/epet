##vue项目的准备工作
  用vue-cli下载模板项目
  搭建路由
  
###静态页面
  首页
  分类页
  遇到的问题：
    分类页左侧滑动不了，一级路由跳转到二级路由底下的样式on丢掉了
  解决的办法：
   :class="{on:isCurrent('/category')"
   :class="{on:isCurrent('/category/class')||isCurrent('/category/brand')}"
