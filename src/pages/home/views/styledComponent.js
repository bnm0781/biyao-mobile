import styled from 'styled-components'

const Main = styled.div `
  padding-top: 1.6rem;
`

const Category = styled.div `
  padding-top: 2.5rem;
`

const CategoryList = styled.div `
  width: 100%;
  .cateName {
    height: .87rem;
    line-height: .87rem;
    color: gray;
    font-size: .3rem;
    text-align: center;
    padding: 0 .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .productList {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    position: relative;
    width: 3.74rem;
    border-bottom: .02rem solid #F4F4F4;
    border-right: .02rem solid #F4F4F4;
    background: #fff;
  }
  li:nth-of-type(-n+2) {
    border-top: .02rem solid #F4F4F4;
  }
  li:nth-of-type(2n) {
    border-right: 0;
  }
  .item-img {
    width: 3.74rem;
    height: 3.74rem;
    box-sizing: border-box;
    img {
      height: 100%;
      display: inline-block;
    }
  }
  .item-des {
    padding: .16rem .24rem .28rem;
  }
  .item-price {
    font-family: PingFangSC-Medium;
    font-size: 0;
    color: #F7A701;
    margin-bottom: .12rem;
    i {
      font-size: .2rem;
      float: none;
      width: auto;
      height: auto;
      margin-top: 0;
      line-height: 1;
    }
    .item-price-int {
      font-size: .32rem;
      display: inline-block;
      width: auto;
      color: #F7A701;
      margin: .065rem 0;
    }
  }
  .item-labels {
    line-height: .26rem;
    overflow: hidden;
    span {
      display: inline-block;
      line-height: .2rem;
      margin-right: .14rem;
      font-family: PingFangSC-Regular;
      font-size: .18rem;
      color: #FFF;
      padding: .03rem .04rem;
      border-radius: .02rem;
      border: 1px solid #fff;
      margin-bottom: .12rem;
      width: auto;
      background: #fff;
    }
  }
  .item-bck {
    font-family: PingFangSC-Regular;
    width: 3.18rem;
    line-height: .33rem;
    color: #BF9E6B;
    font-size: .24rem;
    margin-bottom: .08rem;
  }
  .item-title {
    font-family: PingFangSC-Regular;
    font-size: .24rem;
    color: #4A4A4A;
    line-height: .33rem;
  }
  .item-praise {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    color: #BBB;
    margin-top: .08rem;
    line-height: .28rem;
  }
`

export {
  Main,
  Category,
  CategoryList
}