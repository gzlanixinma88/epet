<template>
  <div class="profile_header">
    <div class="profile">
      <div class="profile-icon">
        <i class="iconfont icon-jiantou2" @click="$router.replace('/category')"></i>
        <a href="javascript:;" @click="$router.replace('/register')">注册</a>
      </div>
      <div class="profile-epet">
        <div class="epet-img">
          <img src="./logo.png" alt="">
        </div>
      </div>
      <div class="profile-login">
        <div class="login">
          <ul>
            <li>
              <a href="javascript:;">普通登录</a>
              <i class="iconfont icon-xiaosanjiaoup"></i>
            </li>
            <li>
              <a href="javascript:;">手机动态密码登录</a>
              <i class="iconfont icon-xiaosanjiaoup"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="profile-input">
        <div class="profile-content">
          <div style="display: none" class="profile-form">
            <div class="name">
              <i class="iconfont icon-dengluyemianyonghuming"></i>
              <input type="text" placeholder="手机号/邮箱/用户名">
            </div>
            <div class="pwd">
              <i class="iconfont icon-mimasuo"></i>
              <input type="password" placeholder="输入密码">
            </div>
          </div>
          <div class="profile-form2">
            <div class="name">
              <i class="iconfont icon-shouji"></i>
              <input type="text" placeholder="已注册的手机号">
            </div>
            <div class="pwdd">
              <i class="iconfont icon-mimasuo"></i>
              <input type="text" placeholder="请输入图片的内容">
            </div>
            <div class="pwd">
              <i class="iconfont icon-mimasuo"></i>
              <input type="text" placeholder="动态密码">
              <span>获取动态密码</span>
            </div>
          </div>
        </div>
        <div class="profile-pass">
          <a href="javascript:;">忘记密码 ?</a>
        </div>
        <div class="loginInput">
          <a class="btn" href="javascript:;">登 &nbsp;&nbsp;录</a>
        </div>
      </div>
      <div class="empty"></div>
      <div class="other-login">
        <div class="login-text">
          <span>合作网站登录</span>
        </div>
        <ul class="login-seller">
          <li>
            <a href="javascript:;">
              <img src="./login_ico2.png" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./login_ico4.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixins.styl"
  .profile_header
    height 100%
    background #e4e4e4;
    .profile
      height 178px
      background: url("./profile.png") no-repeat;
      background-size 100% 100%
      position relative
      .profile-icon
        height 45px
        position relative
        i
          font-size 28px
          color #fff
          position absolute
          top 15px
          left 10px
        a
          font-size 16px
          color #fff
          position absolute
          top 20px
          right 10px
      .profile-epet
        padding 17px 0 23px 0
        height 50px
        .epet-img
          line-height 50px
          height 50px
          text-align center
          img
            height 50px
      .profile-login
        position absolute
        bottom 0
        width 100%
        background-color rgba(255,255,255,0.3)
        height 44px
        line-height 44px
        .login
          ul
            display flex
            li
              text-align center
              flex 1
              a
                color #fff
              .iconfont
                position absolute
                top 14px
                left 73px
                color #fff
                font-size 40px
    .down
      background: #fff;
      .profile-input
        background: #fff;
        .profile-content
          margin 0 20px 10px 20px
        .profile-form
          position relative
          .name
            bottom-border-1px(#d0d0d0)
            i
              position absolute
              top 15px
              left 4px
              font-size 18px
          .pwd
            bottom-border-1px(#d0d0d0)
            i
              position absolute
              bottom 15px
              left 4px
          input
            padding-left 30px
            width 100%
            font-size 14px
            height 46px
            outline none
          input::-webkit-input-placeholder
            color #999
        .profile-form2
          position relative
          input
            padding-left 30px
            width 100%
            font-size 14px
            height 46px
            outline none
          .name
            bottom-border-1px(#d0d0d0)
            i
              position absolute
              top 15px
              left 4px
              font-size 18px
          .pwdd
            bottom-border-1px(#d0d0d0)
            i
              position absolute
              bottom 15px
              left 4px
          .pwd
            bottom-border-1px(#d0d0d0)
            i
              position absolute
              bottom 15px
              left 4px
              top: 16px;
            span
              position absolute
              top 10px
              right 0
              font-size 12px
              width 100px
              border 1px solid #ff0000
              text-align center
              line-height 30px
              border-radius 5px
              color #ff0000
        .profile-pass
          height 20px
          a
            font-size 14px
            float right
            color black
            font-weight 100
            line-height 20px
            margin-right 30px
        .loginInput
          width 92%
          height 35px
          margin 10px auto
          border-radius 5px
          background #2ec975;
          line-height 35px
          text-align center
          .btn
            text-align center
            font-size 16px
            color #fff


      .empty
        height 110px
      .other-login
        .login-text
          height 25px
          line-height 25px
          text-align center
          span
              color #dcdcdc
              font-size 18px

        .login-seller
          height 60px
          display flex
          justify-content center
          padding 20px
          li
            flex 1
            display flex
            justify-content center
            a
              img
                width 60px
</style>
