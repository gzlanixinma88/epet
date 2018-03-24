import Mock from 'mockjs'
import data from './data'
//首页导航
Mock.mock('/homemenu',{code:0,data:data.homepage});
//分类页
Mock.mock('/categorysList',{code:0,data:data.categorys});
//品牌
Mock.mock('/brand',{code:0,data:data.brand});
//全部品牌
Mock.mock('/allBrand',{code:0,data:data.allbrands});
