import ajax from './ajax'

export const reqMenuList = () => ajax('/homemenu')

export const reqCategoryList = () => ajax('/categorysList')

export const reqBrand = () => ajax('/brand')

export const reqAllBrand = () => ajax('/allBrand')

