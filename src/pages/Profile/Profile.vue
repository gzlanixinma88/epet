<template>
  <div class="profile_header">
    <div class="profile">
      <div class="profile-icon">
        <i class="iconfont icon-jiantou2" @click="$router.replace('/category')"></i>
        <router-link href="javascript:;" to="/register">注册</router-link>
      </div>
      <div class="profile-epet">
        <div class="epet-img">
          <img src="./logo.png" alt="">
        </div>
      </div>
      <div class="profile-login">
        <div class="login">
          <ul>
            <li  @click="setLoginWay(true)">
              <a href="javascript:;">普通登录</a>
              <i class="iconfont pwdL icon-xiaosanjiaoup" v-show="loginWay"></i>
            </li>
            <li @click="setLoginWay(false)">
              <a href="javascript:;" >手机动态密码登录</a>
              <i class="iconfont pwdLo icon-xiaosanjiaoup" v-show="!loginWay"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="profile-input">
        <div class="profile-content">
          <div class="profile-form" v-show="loginWay">
            <div class="name">
              <i class="iconfont icon-dengluyemianyonghuming"></i>
              <input type="text" placeholder="手机号/邮箱/用户名" maxlength="11" v-model="name">
            </div>
            <div class="pwd">
              <i class="iconfont icon-mimasuo"></i>
              <input type="password" placeholder="输入密码"maxlength="10" v-model="pwd">
            </div>
          </div>
          <div class="profile-form2" v-show="!loginWay">
            <div class="name">
              <i class="iconfont icon-shouji"></i>
              <input type="text" placeholder="已注册的手机号" maxlength="11" v-model="phone" @click="getCode">
            </div>
            <div class="pwdd">
              <i class="iconfont icon-mimasuo"></i>
              <input type="text" placeholder="请输入图片的内容" @click="changeCaptcha" v-model="textImg">
              <div class="captcha">
                <img class="get_verification" src="http://localhost:3000/captcha"
                     alt="captcha" @click="changeCaptcha">
              </div>
            </div>
            <div class="pwd">
              <i class="iconfont icon-mimasuo"></i>
              <input type="text" placeholder="动态密码" v-model="code">
              <span class="right" :class="{right_phone:rightPhone}"
                    v-if="!computedTime" v-model="code" @click="getCode">获取动态密码</span>
              <span disabled="disabled" class="right" v-else>已发送{{computedTime}}s</span>
            </div>
          </div>
        </div>
        <div class="profile-pass">
          <a href="javascript:;">忘记密码 ?</a>
        </div>
        <div class="loginInput" @click="login">
          <a class="btn" href="javascript:;" >登 &nbsp;&nbsp;录</a>
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
    <alert-tip v-if="alertShow" :alertText="alertText" @click="closeTip"/>
  </div>
</template>
<script>
  import {sendCode} from '../../api'
  import AlertTip from '../../components/AlertTip/AlertTip'
  export default {
    data(){
      return {
        loginWay:true,//登录的方式 true为密码登录 false为验证码登录
        phone:'',//电话号码
        alertText:'',//提示框文本
        alertShow:false,//是否显示提示框
        code:'',//短信验证码
        name:'',//用户名
        pwd:'',//密码
        textImg:'',//图片验证
        computedTime:0,//验证时间
      }
    },
    methods:{
      setLoginWay(){
        this.loginWay = !this.loginWay
      },
      //关闭提示框
      closeTip(){
        this.alertShow = false
      },
      async getCode(){
        if(this.rightPhone){
          //开始倒计时
          this.computeTime = 60
          //启动循环定时器，每隔1s减少1
          const intervalId = setInterval(()=>{
            this.computeTime --
            if(this.computeTime===0){
              clearInterval(intervalId)
            }
          },1000)
          //发送ajax请求，向手机发验证码
          const result = await sendCode(this.phone)
          if(result.code === 1){
            clearInterval(intervalId)
            //显示提示框
            this.alertShow = true
            this.alertText = result.msg
          }
        }
      },
      // 发送登录信息
      //改变验证码的图片
      changeCaptcha(event){
        event.target.src = 'http://localhost:3000/captcha?time='+new Date()
      },
      login (){
        if(this.loginWay){
          if(!this.name){
            this.alertShow = true
            this.alertText = '请输入手机号/邮箱/用户名'
            return
          }else if(!this.pwd){
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          }
        }else{
          if (!this.phone){
            this.alertShow = true
            this.alertText = '请输入正确手机号'
            return
          }else if(!(/^\d{6}$/gi.test(this.code))){
            this.alertShow = true;
            this.alertText = '短信验证码不正确'
            return
          }
        }
      }
    },
    computed:{
      //手机号的验证
      rightPhone(){//以1开头的十一个数字
        return /^1\d{10}$/.test(this.phone)
      },
    },
    components:{
      AlertTip
    }
  }
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
              .pwdL
                position absolute
                top 14px
                left 73px
                color #fff
                font-size 40px
              .pwdLo
                position absolute
                top 14px
                right 73px
                color #fff
                font-size 40px
                &.on
                  display none
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
            .captcha
              display inline-block
              position absolute
              top 0
              right 0
          .pwd
            bottom-border-1px(#d0d0d0)
            i
              position absolute
              bottom 15px
              left 4px
              top: 16px;
            .right
              position absolute
              top 10px
              right 0
              font-size 12px
              width 80px
              border 1px solid #7e8c8d
              text-align center
              line-height 25px
              border-radius 5px
              color #7e8c8d
              &.right_phone
                border 1px solid #ff0000
                color #ff0000
          &.on
            display none
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
