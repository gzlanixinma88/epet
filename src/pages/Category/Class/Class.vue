<template>
  <div class="category-content">
    <div class="category-tabs swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide on">为您推荐</li>
        <li class="swiper-slide">e宠国际</li>
        <li class="swiper-slide">狗狗主粮</li>
        <li class="swiper-slide">狗狗零食</li>
        <li class="swiper-slide">狗狗服饰</li>
        <li class="swiper-slide">为您推荐</li>
        <li class="swiper-slide">e宠国际</li>
        <li class="swiper-slide">狗狗主粮</li>
        <li class="swiper-slide">狗狗零食</li>
        <li class="swiper-slide">狗狗服饰</li>
        <li class="swiper-slide">为您推荐</li>
        <li class="swiper-slide">e宠国际</li>
        <li class="swiper-slide">狗狗主粮</li>
        <li class="swiper-slide">狗狗零食</li>
        <li class="swiper-slide">狗狗服饰</li>
        <li class="swiper-slide">e宠国际</li>
        <li class="swiper-slide">狗狗主粮</li>
        <li class="swiper-slide">狗狗零食</li>
        <li class="swiper-slide">狗狗服饰</li>
      </ul>
    </div>
    <div class="category-tab">
      <div class="category-list">
        <h2>热门分类</h2>
        <ul>
          <li><a href="javascript:;">
            <img src="../../../common/images/tab.jpg" alt="">
            <p>进口狗粮</p>
          </a></li>
          <li><a href="javascript:;"><img src="../../../common/images/tab1.jpg" alt=""><p>进口狗粮</p></a></li>
          <li><a href="javascript:;"><img src="../../../common/images/tab3.jpg" alt=""><p>进口狗粮</p></a></li>
          <li><a href="javascript:;"><img src="../../../common/images/tab.jpg" alt=""><p>进口狗粮</p></a></li>
          <li><a href="javascript:;"><img src="../../../common/images/tab1.jpg" alt=""><p>进口狗粮</p></a></li>
          <li><a href="javascript:;"><img src="../../../common/images/tab3.jpg" alt=""><p>进口狗粮</p></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../../../static/css/swiper.css'
  import Swiper from 'swiper'
  export default {
    name: "class",
    mounted(){
      new Swiper('swiper-container',{
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode:false,
        spaceBetween: 10,
        mousewheel: true,
      })
    }
  }

  var vm = new Vue({
    el:''
  })
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category-content
    overflow hidden
    height calc(100% - 0px)
    .category-tabs
      padding-top 40px
      float left
      width 70px
      ul
        display flex
        flex-direction column
        li
          border-right 1px solid #7e8c8d
          text-align center
          line-height 50px
          width 70px
          height 50px
          font-size 14px
          &.on
            color #ff0000
            background #f3f4f5
    .category-tab
      overflow hidden
      float right
      margin-left 70px
      position absolute
      top 0
      right 0
      bottom 0
      .category-list
        padding 40px 5px 20px
        h2
          margin 20px 0 10px 5px
          font-size 12px
          color #999
        ul
          display flex
          flex-wrap wrap
          li
            box-sizing border-box
            margin-top 10px
            padding 0 5px
            width 33.33333%
            a
              img
                display block
                width 100%
              p
                color #333
                margin-top 10px
                font-size 12px
                text-align center


</style>
