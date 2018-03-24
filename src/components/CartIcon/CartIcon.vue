<template>
  <transition name="collapse">
    <div class="footer-contenr" v-if="isShow">
      <div class="footer-link">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div class="footer-link">
        <i class="iconfont icon-icon04"></i>
        <span>分类</span>
      </div>
      <div class="footer-link">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div class="footer-link">
        <i class="iconfont icon-xiaolian-"></i>
        <span>我的E宠</span>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "cart-icon",
    data(){
      return {
        isShow:false
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-contenr
    bottom-border-1px(#e4e4e4)
    overflow hidden
    height 75px
    display:flex
    text-align center
    align-items  center
    .footer-link
      height 50px
      flex 1
      display flex
      flex-direction column
      align-items center
      justify-content center
      i
        font-size 25px
        color #dbdbdb
      span
        margin-top 5px
        font-size 14px
        color  #7e8c8d
    &.collapse-enter,&.collapse-leave-to
      height 0
    &.collapse-enter-active,&.collapse-leave-active
      transition height .5s linear
</style>
