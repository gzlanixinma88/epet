<template>
  <div class="brand-list">
    <div class="brand-li">
      <h2>-- 推荐品牌 --</h2>
      <ul>
        <li>
          <a href="javascript:;">
            <div class="wrap">
              <img src="../../../common/images/brand.jpg" alt="">
            </div>
            <p class="wrap-p">冠能</p>
            <p>美国</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div class="wrap">
              <img src="../../../common/images/brand1.jpg" alt="">
            </div>
            <p class="wrap-p">冠能</p>
            <p>美国</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div class="wrap">
              <img src="../../../common/images/brand2.jpg" alt="">
            </div>
            <p class="wrap-p">冠能</p>
            <p>美国</p>
          </a>
        </li>
        <li>
        <a href="javascript:;">
          <div class="wrap">
            <img src="../../../common/images/brand.jpg" alt="">
          </div>
          <p class="wrap-p">冠能</p>
          <p>美国</p>
        </a>
      </li>
        <li>
        <a href="javascript:;">
          <div class="wrap">
            <img src="../../../common/images/brand2.jpg" alt="">
          </div>
          <p class="wrap-p">冠能</p>
          <p>美国</p>
        </a>
      </li>
        <li>
          <a href="javascript:;">
            <div class="wrap">
              <img src="../../../common/images/brand1.jpg" alt="">
            </div>
            <p class="wrap-p">冠能</p>
            <p>美国</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "class"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand-list
    padding-top 45px
    .brand-li
      margin 0 5px
      h2
        padding 20px 0 0
        color #999
        text-align center
        font-size 12px
      ul
        display flex
        flex-wrap wrap
        margin-top 15px
        justify-content center
        li
          box-sizing border-box
          margin-top 10px
          padding 0 5px
          width 33.33333%
          a
            .wrap
              border: 1px solid #e2e2e2;
              text-align: center;
              padding: 10px;
              box-sizing border-box
              img
                max-width 90%
                height 40px
            span
              margin-top 10px
              font-size 14px
              color #333
            p
              color #999
              margin-top 10px
              font-size 12px
              text-align center
              &.wrap-p
                color #333
                font-size 14px
</style>
