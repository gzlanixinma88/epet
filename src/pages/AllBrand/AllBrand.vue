<template>
  <div id="all">
    <header-guild/>
    <div class="allBrand">
      <div class="allBrand-item">
        <div class="allBrand-list" ref="box">
          <div v-for="(item, index) in allbrands.brand" :key="index">
            <h2>{{item.order}}</h2>
            <div>
              <div class="allBrand-tabs" v-for="(li,index) in item.list" :key="index">
                <a href="javascript:;">
                  <div class="allBrand-tab">
                    <div>
                      <img v-lazy="li.logo" alt="">
                    </div>
                  </div>
                  <div class="allBrand-test">
                    <span>{{li.name}}</span>
                    <p>{{li.address}}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="allBrand-right">
      <ul class="list">
        <li :class="{active:currentIndex===index}" v-for="(item, index) in allbrands.brand"
            :key="index" @click="handle(index)">{{item.order}}</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import loading from '../../common/images/loading.gif'
  Vue.use(VueLazyload,{
    loading
  })
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import HeaderGuild from '../../components/HeaderGuide/HeaderGuide'
  export default {
    name: "all-brand",
    data(){
      return{
        height:[],
        scrollY:0,
      }
    },
    components:{
      HeaderGuild
    },
    computed:{
      ...mapState(['allbrands']),
      currentIndex(){
        const {scrollY,height} = this
        return height.findIndex((h,index)=>{
          return height[index]<=scrollY&&height[index+1]>scrollY;
        })
      }
    },
    methods:{
      handle(index){
        const scrollY = this.height[index]
        this.allBrandItem.scrollTo(0,-scrollY,500)
      },
    },
    mounted(){
      this.$store.dispatch('getAllBrands',()=>{
        this.$nextTick(()=>{
          if(!this.allBrandItem){
            this.allBrandItem = new BScroll ('.allBrand-item',{
              click:true,
              probeType:3,
            })
            this.allBrandItem.on('scroll',(p)=>{
             this.scrollY = Math.abs(p.y);
            });
          }else{
            this.allBrandItem.refresh()
          }
          //创建height arr
          var arr = [];
          var top = 0
          arr.push(top)
          var box = this.$refs.box
          var boxes = [].slice.call(box.children);
          boxes.forEach(box =>{
            top += box.clientHeight
            arr.push(top)
          })
          /*boxes.reduce((preTotal,box)=>{
            preTotal += box.clientHeight
            arr.push(preTotal);
            return preTotal;
          },0);*/
          this.height = arr;
        })
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixins.styl"
  #all
    height 100%
  .Cart-header
    background #fff
    .header
      bottom-border-1px(#e4e4e4)
      .header-content
        z-index 1000
        line-height 50px
        height 45px
        padding 0 10px
        box-sizing border-box
        display flex
        justify-content center
        text-align center
        bottom-border-1px(#e4e4e4)
        .icon1
          font-size 24px
          flex 1
        span
          font-size 18px
          flex 7
        .icon2
          flex 1
          font-size 24px
      .footer-contenr
        bottom-border-1px(#e4e4e4)
        height 75px
        display:flex
        text-align center
        align-items  center
        .footer-link
          height 50px
          flex 1
          display flex
          flex-direction column
          align-items center
          justify-content center
          i
            font-size 25px
            color #dbdbdb
          span
            margin-top 5px
            font-size 14px
            color  #7e8c8d
        &.collapse-enter,&.collapse-leave-to
          height 0
        &.collapse-enter-active,&.collapse-leave-active
          transition height .5s linear
  .allBrand
    height calc(100% - 95px)
    overflow hidden
    .allBrand-item
      height 100%
      .allBrand-list
        padding-bottom 106px
        h2
          text-indent 15px
          color #999
          font-weight 400
          line-height 24px
          font-size 12px
        .allBrand-tabs
          bottom-border-1px(#dbdbdb)
          background #fff
          a
            .allBrand-tab
              vertical-align middle
              padding 10px
              display inline-block
              div
                height 50px
                width 100%
                display inline-block
                border 1px solid #f3f4f5
              img
                margin 5px auto
                display block
                height 40px
            .allBrand-test
              vertical-align middle
              display inline-block
              margin 5px 0 5px 10px
              span
                color #333
                font-size 14px
                margin 0  0 10px 0
              p
                margin-top 10px
                font-size 12px

    .allBrand-right
      position relative
      ul
        position fixed
        z-index 10
        margin 50px 0
        right 0
        top 0
        bottom 0
        width 20px
        display flex
        flex-flow column
        justify-content center
        text-align center
        li
          color #999
          margin 2px 0
          font-size 12px
          &.active
            color red
            font-weight bold

</style>
