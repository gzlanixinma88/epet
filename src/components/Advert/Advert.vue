<template>
  <div class="advert">
    <img src="../../common/images/App.jpg" v-show="isShow">
    <i class="iconfont icon-error-1" @click="hidden"></i>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      hidden(){
        this.isShow = !this.isShow

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .advert
    position relative
    img
      width 100%
      display block
    .iconfont
      position absolute
      top 10px
      font-size 18px
      color #fff
      left 10px
      &.on
        display block
</style>
