import qs from 'qs'
import { POST_CATEGORYLIST_DATA } from './actionTypes'

export const categoryListDataSync = (categoryList) => {
  return {
    type: POST_CATEGORYLIST_DATA,
    categoryList
  }
}

export const categoryListDataAsync = (dispatch, categoryId) => {
  return () => {
    fetch('/api/classify/getProductData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
      },
      body: qs.stringify({
        categoryID: categoryId
      })
    })
      .then(response => response.json())
      .then(result => dispatch(categoryListDataSync(result.data.productList)))
  }
}