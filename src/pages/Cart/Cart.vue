<template>
  <div class="Cart-header">
    <div class="header">
      <div class="header-content">
        <i class="iconfont icon1 icon-jiantou2" @click="$router.replace('/category')"></i>
        <span>购物车</span>
        <i class="iconfont icon2 icon-fenlei" @click="toggleDetail"></i>
      </div>
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
    </div>
    <div class="Cart-box">
      <div  class="Cart-head">
        <div class="Cart-Img">
          <span></span>
        </div>
        <div class="Cart-empty">
          <span>购物车是空的</span>
        </div>
        <div class="Cart-text">
          <div class="Cart-go"><a href="javascript:;">去逛逛</a></div>
          <div class="Cart-go"><a href="javascript:;">我的收藏</a></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isShow:false
      }
    },
    methods:{
      toggleDetail(){
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixins.styl"
  .Cart-header
    background #fff
    .header
      bottom-border-1px(#e4e4e4)
      .header-content
        z-index 1000
        line-height 50px
        height 45px
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
      .footer-contenr
        bottom-border-1px(#e4e4e4)
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
  .Cart-box
    .Cart-head
      box-sizing border-box
      padding-bottom 50px
      .Cart-Img
        width 100%
        text-align center
        span
          width 100px
          height  100px
          display inline-block
          margin 50px auto 20px
          background url("./cart-ico.png") no-repeat 0 -160px
          background-size 105px auto

    .Cart-empty
      height 20px
      text-align center
      width 100%
      span
        color #dbdbdb
        font-size 18px
    .Cart-text
      margin 0 auto
      width 100%
      line-height 40px
      text-align center
      .Cart-go
        display inline-block
        text-align center
        margin-top 20px
        border 1px solid #dbdbdb
        width 100px
</style>
