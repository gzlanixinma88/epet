<template>
  <header class="header">
    <a href="" class="header_jiantou">
      <i class="iconfont icon1 icon-jiantou2"></i>
    </a>
    <a class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <a href="" class="header_fenlei">
      <i class="iconfont icon2 icon-fenlei"></i>
    </a>
  </header>
</template>
<script language="JavaScript">

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixins.styl"
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_jiantou
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      margin-left -5%
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_fenlei
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
