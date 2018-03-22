<template>
  <div class="footer">
    <div class="footer-contenr">
      <div @click="goto('/home')"  class="footer-link" :class="{on:isCurrent('/home')}">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div @click="goto('/category')"  class="footer-link"
           :class="{on:isCurrent('/category/class')||isCurrent('/category/brand')||isCurrent('/allBrand')}">
        <i class="iconfont icon-icon04"></i>
        <span>分类</span>
      </div>
      <div @click="goto('/cart')" class="footer-link" :class="{on:isCurrent('/cart')}">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div @click="goto('/profile')" class="footer-link" :class="{on:isCurrent('/profile')}">
        <i class="iconfont icon-xiaolian-"></i>
        <span>我的E宠</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path)
    },
    isCurrent(path){
      return this.$route.path === path
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    z-index 10000
    background #fff
    height 45px
    width 100%
    border-top: 1px solid #e7e7e7;
    position fixed
    bottom 0
    left 0
    right 0
    margin-top 45px
    .footer-contenr
      height 45px
      display:flex
      text-align center
      align-items  center
      .footer-link
        flex 1
        display flex
        flex-direction column
        align-items center
        &.on
          color greenyellow
        i
          font-size 20px
        span
          font-size 12px


</style>
