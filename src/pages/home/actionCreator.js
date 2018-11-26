import qs from 'qs'
import { POST_COMMENDLIST_DATA, POST_COMMENDLIST_DATA_AGAIN } from './actionTypes'

export const commendListDataSync = (commendList) => {
  return {
    type: POST_COMMENDLIST_DATA,
    commendList
  }
}

export const commendListDataSyncAgain = (commendListAgain) => {
  return {
    type: POST_COMMENDLIST_DATA_AGAIN,
    commendListAgain
  }
}

export const commendListDataAsync = (dispatch, recommendScroll, pageIndex) => {
  return () => {
    fetch('/api/getHomeProductList' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: qs.stringify({
        pageIndex: pageIndex,
        pageSize: 20
      })
    })
      .then(response => response.json())
      .then(result => {
        dispatch(commendListDataSync(result.data.productList))
        recommendScroll.refresh()
      })
  }
}

export const commendListDataAsyncAgain = (dispatch, recommendScroll, pageIndex) => {
  return () => {
    fetch('/api/getHomeProductList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
      },
      body: qs.stringify({
        pageIndex: pageIndex,
        pageSize: 20
      })
    })
      .then(response => response.json())
      .then(result => {
        dispatch(commendListDataSyncAgain(result.data.productList))
        recommendScroll.refresh()
      })
  }
}