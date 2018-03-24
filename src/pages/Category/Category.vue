<template>
  <div class="category">
    <div class="category-header">
      <div class="tabs">
        <router-link class="span" to="/category/class"  :class="{on:isCurrent('/category/class')}">分类</router-link>
        <router-link class="span" to="/category/brand"  :class="{on:isCurrent('/category/brand')}">品牌</router-link>
      </div>
      <div class="search">
        <i class="iconfont icon1 icon-sousuo"></i>
      </div>
    </div>
    <!--复用路由组件对象, 复用路由组件获取的后台数据-->
    <keep-alive>
      <router-view/>
    </keep-alive>
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
    padding 0 0 46px 0
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
        .span
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
