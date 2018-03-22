
import {
  reqMenuList,
  reqCategoryList,
  reqBrand,
  reqAllBrand
} from '../api'
import {
  RECEIVE_MENU,
  RECEIVE_CATEGORY,
  RECEIVE_BRAND,
  RECEIVE_ALLBRANDS
} from './mutation-types'
export default {
  async getMenu ({commit},callback){
    const result = await reqMenuList()
    commit(RECEIVE_MENU,{menus:result.data})
    callback && callback();
  },

  async getCategory ({commit},callback){
    const result = await reqCategoryList()
    commit(RECEIVE_CATEGORY,{categorys:result.data})
    callback && callback()
  },

  async getBrand ({commit}, callback){
    const result = await reqBrand()
    commit(RECEIVE_BRAND,{brand:result.data})
    callback && callback()
  },

  async getAllBrands ({commit},callback){
    const result =await reqAllBrand()
    commit(RECEIVE_ALLBRANDS,{allbrands:result.data})
    callback && callback()
  }
}
