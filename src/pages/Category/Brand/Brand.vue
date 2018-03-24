<template>
  <div id="brand" ref="brand">
    <div class="brand-list">
      <div class="brand-li" v-for="(b,index) in brand" :key="index">
        <h2>-- {{b.title}} --</h2>
        <ul>
          <li v-for="(item, index) in b.list " :key="index">
            <a href="javascript:;">
              <div class="wrap">
                <img :src="item.logo" alt="">
              </div>
              <p class="wrap-p">{{item.name}}</p>
              <p>{{item.address}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="brand-pon" @click="goToAllBrand">
      <div><a href="javascript:;">全部</a></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "class",
    computed:{
      ...mapState(['brand']),
    },
    mounted(){
      this.$store.dispatch('getBrand', ()=>{
        this.$nextTick(()=>{
          if(!this.next){
            this.next = new BScroll(this.$refs.brand,{
              click:true
            })
          }else{
            this.next.refresh()
          }
        })
      })
    },
    methods:{
      goToAllBrand(){
        this.$router.push('/allBrand')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #brand
    /*position fixed
    top 0
    bottom 0*/
    height 100%
    .brand-list
      padding-top 45px
      position relative
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
          justify-content flex-start
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
    .brand-pon
      background: rgba(0,0,0,0.5);
      border-radius 50%
      width 40px
      height 40px
      position absolute
      bottom 50px
      right 10px
      div
        text-align center
        a
          color #fff
          line-height 40px
          font-size 14px
</style>
