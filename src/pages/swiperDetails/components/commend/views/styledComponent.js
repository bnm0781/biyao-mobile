import styled from 'styled-components'

const Commend = styled.ul `
  display: flex;
  flex-wrap: wrap;
  li:nth-of-type(-n+2) {
    border-top: .02rem solid #F4F4F4;
  }
  li:nth-of-type(2n) {
    border-right: 0;
  }
`
const CommendLi = styled.li `
  position: relative;
  width: 3.74rem;
  border-bottom: .02rem solid #F4F4F4;
  border-right: .02rem solid #F4F4F4;
  background: #fff;
  .item-img {
    width: 3.7rem;
    height: 3.74rem;
    box-sizing: border-box;
    img {
      height: 100%;
      display: inline-block;
      max-width: 100%;
    }
  }
  .item-des {
    padding: .16rem .24rem .28rem;
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
      }
    }
    .item-bck {
      font-family: PingFangSC-Regular;
      width: 3.18rem;
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
      font-size: .24rem;
      color: #4A4A4A;
      line-height: .33rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-praise {
      font-family: PingFangSC-Regular;
      font-size: .2rem;
      color: #BBB;
      margin-top: .08rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .isShowIcon {
      display: ${props => props.isShowIcon ? 'block' : 'none'};
      width: .56rem;
      height: .56rem;
      position: absolute;
      left: .2rem;
      top: .22rem;
      background: url(https://static.biyao.com/m/img/master/index/icon_new@2x.png?v=biyao_9fbde87) no-repeat center;
      background-size: 100%;
    }
  }
`

export {
  Commend,
  CommendLi
}