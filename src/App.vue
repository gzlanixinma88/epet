<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

    <FooderGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooderGuide from './components/FooderGuide/FooderGuide'
  export default {
    components:{
      FooderGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
    width 100%
    position relative
    background #f5f5f5
</style>
