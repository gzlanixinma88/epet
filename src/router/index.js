import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Cart from '../pages/Cart/Cart'
import AllBrand from '../pages/AllBrand/AllBrand'
import Profile from '../pages/Profile/Profile'
import Brand from '../pages/Category/Brand/Brand'
import Class from '../pages/Category/Class/Class'
import Register from '../pages/Profile/Register/Register'


export default new Router({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/category',
      component:Category,
      meta:{
        showFooter: true
      },
      children:[
        {
          path:'/category/class',
          component:Class,
          meta:{
            showFooter: true
          },
        },
        {
          path:'/category/brand',
          component:Brand,
          meta:{
            showFooter: true
          },
        },
        {
          path:'',
          redirect:'/category/class'
        }
      ]
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/allBrand',
      component:AllBrand,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/',
      redirect:'home'
    }
  ]
})
