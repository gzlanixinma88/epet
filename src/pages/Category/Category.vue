<template>
  <div class="category">
    <div class="category-header">
      <div class="tabs">
        <span @click="goto('/category/class')" :class="{on:isCurrent('/category/class')}">分类</span>
        <span @click="goto('/category/brand')" :class="{on:isCurrent('/category/brand')}">品牌</span>
      </div>
      <div class="search">
        <i class="iconfont icon1 icon-sousuo"></i>
      </div>
    </div>
    <router-view/>
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
  .category
    background #fff
    box-sizing border-box
    padding 0 0 50px 0
    height 100%
    .category-header
      background #fff
      text-align center
      height 40px
      width 100%
      line-height 40px
      position fixed
      top 0
      left 0
      bottom 0
      z-index 1000
      border-bottom 1px solid #aaa
      .tabs
        height 100%
        text-align center
        font-size 14px
        span
          padding 0 8px 10px
          margin 0 10px
        .on
          color #ff0000
          box-shadow 0 -2px 0 #ff0000 inset
          font-weight 500
      .search
        position absolute
        right 10px
        top 2px
        .iconfont
          color #bbb
          font-size 20px

</style>
