<template>
  <div class="category-content">
    <div class="category-tabs">
      <ul>
        <li :class="{on:currentIndex===index}" @click.prevent="tabs(index)"
            v-for="(category,index) in menuList" :key="index">{{category}}</li>
      </ul>
    </div>
    <div id="category" ref="rightScroll">
      <div class="category-tab" >
        <div class="right-wrapper" v-for="(listItem,index) in cateList" :key="index"
             :class="{on:currentIndex===index}" ref="rightWrapper">
          <div>

            <div class="category-list" v-if="listItem[0]">
              <h2>{{listItem[0].title}}</h2>
              <ul >
                <li v-for="(item,index) in listItem[0].list" :key="index">
                  <a href="javascript:;">
                    <div>
                      <img :src="item.photo" alt="">
                      <p>{{item.name}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="category-row" v-if="listItem[1]">
              <h2>{{listItem[1].title}}</h2>
              <ul >
                <li v-for="(item,index) in listItem[1].list" :key="index">
                  <a href="javascript:;">
                    <img :src="item.logo" alt="">
                    <p>{{item.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import '../../../../static/css/swiper.css'
  import {mapState} from 'vuex'
  export default {
    name: "class",
    data(){
      return {
        currentIndex:0
      }
    },
    computed:{
      ...mapState(['categorys']),
      category(){
        const {categorys,currentIndex} = this
        if(categorys.length){
          return categorys[currentIndex]
        }
        return {}
      },
      menuList(){
        let arr = []
        arr = this.categorys.map(item => {
          return item.name
        })
        return arr
      },
      cateList (){
        let arr = []
        arr = this.categorys.map(item => {
          return item.cate_list
        })
        return arr
      }

    },
    mounted(){
      this.$store.dispatch('getCategory',()=>{
        this.$nextTick(()=>{
          const categoryTabs = new BScroll('.category-tabs',{
            click:true
          })
          if(!this.rightScroll){
            const rightScroll = new BScroll(this.$refs.rightScroll,{
              click:true
            })
          }else{

          }

        })
      })
    },
    methods:{
      tabs(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category-content
    height 100%
    .category-tabs
      height 100%
      margin-top 40px
      float left
      width 70px
      border-right 1px solid #7e8c8d
      ul
        display flex
        flex-direction column
        padding-bottom 36px
        box-sizing border-box
        li
          text-align center
          line-height 50px
          width 70px
          height 50px
          font-size 14px
          &.on
            color #ff0000
            background #f3f4f5
    #category
      box-sizing border-box
      padding-top 40px
      height 100%
      .category-tab
        float right
        position absolute
        top 40px
        right 0
        left 70px
        padding-bottom 60px
        .right-wrapper
          display none
          &.on
            display block
          .category-list
            padding 5px 5px 20px
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
                  display block
                  img
                    display block
                    height 86px
                  p
                    color #333
                    margin-top 10px
                    font-size 12px
                    text-align center
          .category-row
            padding 20px 5px 20px
            h2
              margin 20px 0 10px 5px
              font-size 12px
              color #999
            ul
              display flex
              flex-wrap wrap
              li
                text-align center
                box-sizing border-box
                margin-top 10px
                padding 0 5px
                width 50%
                a
                  img
                    height 45px
                  p
                    color #333
                    margin-top 10px
                    font-size 12px
                    text-align center


</style>
