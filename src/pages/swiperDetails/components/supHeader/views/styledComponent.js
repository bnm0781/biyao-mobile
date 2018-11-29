import styled from 'styled-components'

const SupHeader = styled.div `
  .supplierDes {
    position: relative;
    height: 1.2rem;
    padding-left: .4rem;
    line-height: 1.2rem;
    box-shadow: 1px 1px 5px rgba(7,0,2,.2);
    background: #fff;
    z-index: 2;
    span {
      color: #523568;
      font-size: .32rem;
      display: inline-block;
      width: 6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      float: right;
      width: 1rem;
      height: 1rem;
      margin-top: .1rem;
      line-height: 1rem;
      font-size: 1rem;
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
  .supplier-commend {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 100%;
      margin-top: 0;
      position: relative;
      border-bottom: .02rem solid #F4F4F4;
      border-right: .02rem solid #F4F4F4;
      background: #fff;
      img {
        height: 3.85rem;
        width: 7.5rem;
        background: url(https://static.biyao.com/m/img/master/base/depic.png?v=biyao_00fa500) no-repeat center;
        max-width: 100%;
      }
      .item-des {
        position: relative;
        height: auto;
        line-height: 1;
        padding: .16rem .24rem .28rem;
        box-shadow: 1px 1px 5px rgba(7,0,2,.2);
        background: #fff;
        z-index: 2;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .item-labels {
          line-height: .26rem;
          overflow: hidden;
          span {
            display: inline-block;
            /* height: .2rem; */
            line-height: .2rem;
            margin-right: .08rem;
            font-family: PingFangSC-Regular;
            font-size: .18rem;
            color: #FFF;
            padding: .03rem .04rem;
            border-radius: .02rem;
            border: 1px solid #fff;
            margin-bottom: .12rem;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span:last-of-type {
            margin-right: 0;
          }
        }
        .item-bck {
          font-family: PingFangSC-Regular;
          width: 100%;
          line-height: .33rem;
          color: #BF9E6B;
          font-size: .24rem;
          margin-bottom: .08rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-title {
          font-family: PingFangSC-Regular;
          color: #4A4A4A;
          font-size: .32rem;
          line-height: .45rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-salepoint {
          font-family: PingFangSC-Regular;
          font-size: .24rem;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          white-space: normal;
          margin-top: .12rem;
          line-height: .3rem;
        }
      }
    }
    li:nth-of-type(-n+2) {
      border-top: .02rem solid #F4F4F4;
    }
  }
`

export {
  SupHeader
}