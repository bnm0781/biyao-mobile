import styled from 'styled-components'

const Supplier = styled.div `
  padding-left: .2rem;
  background-color: #fff;
  .supplier-top-wrap {
    padding: .2rem 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #bbb;
    .supplier-img-title {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .supplier-img {
        width: 1.06rem;
        height: 1.06rem;
        border: 1px solid #ccc;
      }
      .supplier-title {
        font-family: PingFang-SC-Medium;
        font-size: .32rem;
        margin-left: .18rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 4rem;
        color: #353535;
        align-self: center;
      }
    }
    .supplier-onsale {
      position: relative;
      text-align: center;
      padding-left: .2rem;
      padding-right: .2rem;
      height: .96rem;
      .supplier-onsale-num {
        font-family: PingFang-SC-Medium;
        font-size: .32rem;
        color: #e7b32b;
        padding-bottom: .1rem;
        line-height: .5rem;
      }
      .supplier-onsale-text {
        font-family: PingFang-SC-Medium;
        color: #828282;
        font-size: .24rem;
      }
    }
  }
  .sipplier-img-wrap {
    padding: .24rem 0;
    overflow-x: auto;
    overflow-y: hidden;
    ul {
      display: flex;
      display: box;
      justify-content: flex-start;
      box-pack: start;
      align-items: center;
      box-align: center;
      li {
        width: 2rem;
        margin-right: .1rem;
        position: relative;
        .commend-list-a {
          text-align: left;
          display: block;
          width: 100%;
          .recommend-pic {
            width: 1.9rem;
            height: 1.9rem;
            img {
              display: block;
              width: 100%;
            }
          }
          .recommend-tit {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: .31rem;
            font-size: .24rem;
            color: #4A4A4A;
            margin: .12rem 0;
          }
          .item-labels {
            line-height: .26rem;
            overflow: hidden;
            span {
              display: inline-block;
              line-height: .2rem;
              margin-right: .08rem;
              font-family: PingFangSC-Regular;
              font-size: .18rem;
              color: #FFF;
              padding: .03rem .04rem;
              border-radius: .02rem;
              border: 1px solid #fff;
              margin-bottom: .12rem;
            }
          }
          .item-price {
            font-family: PingFangSC-Medium;
            font-size: 0;
            color: #F7A701;
            i {
              font-size: .2rem;
            }
            .item-only-int {
              font-size: .28rem;
              display: inline-block;
            }
          }
        }
      }
    }
  }
`

export {
  Supplier
}