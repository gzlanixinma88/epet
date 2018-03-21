<template>
  <div class="register">
    <div class="register-tep">
      <ul>
        <li>
          <i class="iconfont icon-shouji"></i>
          <input type="text" placeholder="请输入手机号">
        </li>
      </ul>
      <div class="register-down ">
        <span class="span">下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/mixins.styl"
  .register
    background #fff
    height 100%
    .register-tep
      ul
        bottom-border-1px(#dbdbdb)
        margin-left 5px
        li
          padding 20px 0 20px 20px
          font-size 14px
          i
            font-size 20px
            margin-right 5px
            vertical-align top
          input
            outline none
      .register-down
        padding-top 20px
        margin-top 40px
        .span
          display block
          margin 0 10%
          border-radius 30px
          background #d7d7d7
          font-size 15px
          padding 5px 0
          color #fff
          text-align center
          &.on
            background #f03131

</style>
