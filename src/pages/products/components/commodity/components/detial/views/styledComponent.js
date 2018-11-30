import styled from 'styled-components'

const Detial = styled.div `
  .gl-detial-wrap {
    padding: 0 .2rem;
    background-color: #fff;
    position: relative;
    .gl-title {
      font-family: PingFang-SC-Medium;
      font-size: .32rem;
      width: 5.49rem;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 1.35;
      color: #353535;
      padding-top: .2rem;
      margin-bottom: .1rem;
    }
    .gl-salePoint {
      font-size: .24rem;
      color: #6F6F6F;
      width: 5.49rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 1.5;
      padding-bottom: .04rem;
      word-break: break-all;
    }
    .collectSign {
      position: absolute;
      top: .21rem;
      right: .24rem;
      width: 1.04rem;
      height: .88rem;
      text-align: center;
      cursor: pointer;
      z-index: 99;
      i {
        display: inline-block;
        width: .44rem;
        height: .44rem;
        background-image: url(https://static.biyao.com/m/img/product/icon_collection_default@2x.png?v=biyao_b67a04b);
        background-size: 100% 100%;
      }
      .collectText {
        font-size: .24rem;
        color: gray;
        margin-top: .1rem;
      }
    }
    .price-duration-wrap {
      display: flex;
      justify-content: space-between;
      height: .8rem;
      line-height: .8rem;
      align-items: center;
      .gl-price-duration-wrap {
        display: flex;
        align-items: center;
        .gl-price {
          font-family: PingFang-SC-Medium;
          font-size: .32rem;
          color: #f33;
          span {
            font-family: PingFang-SC-Medium;
            font-size: .46rem;
            color: #f33;
            line-height: 2;
          }
        }
      }
      .gl-duration-wrap {
        font-size: .24rem;
        color: #6F6F6F;
        line-height: .37rem;
        height: .37rem;
        .gl-duration-icon {
          display: inline-block;
          width: .24rem;
          height: .24rem;
          margin-right: .12rem;
          position: relative;
          top: -.03rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .maker-label {
    height: .66rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .labels {
      box-sizing: content-box;
      height: .32rem;
      line-height: .32rem;
      padding: .02rem .12rem;
      display: block;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background: #F7F1E8;
      border-radius: .02rem;
      font-size: .24rem;
      color: #BF9E6B;
    }
  }
`

export {
  Detial
}