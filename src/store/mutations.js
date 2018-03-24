
import {
  RECEIVE_MENU,
  RECEIVE_CATEGORY,
  RECEIVE_BRAND,
  RECEIVE_ALLBRANDS
} from './mutation-types'

export default {
  [RECEIVE_MENU](state,{homepage}){
    state.homepage = homepage
  },
  [RECEIVE_CATEGORY](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_ALLBRANDS](state,{allbrands}){
    state.allbrands = allbrands
  }
}
