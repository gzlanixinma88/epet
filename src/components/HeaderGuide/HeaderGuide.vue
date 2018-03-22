<template>
  <div class="header">
    <div class="header-content">
      <i class="iconfont icon1 icon-jiantou2" @click="$router.replace('/category/brand')"></i>
      <span>全部品牌</span>
      <i class="iconfont icon2 icon-fenlei"></i>
    </div>
  </div>
</template>
<script type="text/javascript">

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixins.styl"
  .header
     background #fff
     bottom-border-1px(#e4e4e4)
    .header-content
      z-index 1000
      line-height 50px
      height 50px
      padding 0 10px
      box-sizing border-box
      display flex
      justify-content center
      text-align center
      bottom-border-1px(#e4e4e4)
      .icon1
        font-size 24px
        flex 1
      span
        font-size 18px
        flex 7
      .icon2
        flex 1
        font-size 24px
</style>
