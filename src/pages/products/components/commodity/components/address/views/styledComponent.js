import styled from 'styled-components'

const Address = styled.div `
  padding: 0 .2rem;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #distribution-location {
    width: 5.1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #353535;
  }
  .padding {
    padding: .12rem 0 .1rem;
    .my-send {
      font-size: 0;
      b {
        display: inline-block;
        font-family: PingFang-SC-Medium;
        font-size: .24rem;
        color: #828282;
        line-height: 1;
        overflow: hidden;
        font-weight: inherit;
      }
      .gl-location {
        font-size: .32rem;
        color: gray;
        padding-right: .1rem;
        img {
          width: .24rem;
          height: .24rem;
          position: relative;
          top: -.02rem;
        }
      }
    }
    .location-til {
      b {
        font-size: .3rem;
        color: #333;
        line-height: 1;
        opacity: 0;
      }
      span {
        color: #f33;
        font-size: .22rem;
        line-height: 1;
        margin-left: .1rem;
      }
    }
  }
  .gl-more {
    font-size: .24rem;
    color: gray;
    line-height: .9rem;
  }
  .icon {
    height: .24rem;
    width: .24rem;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
`

export {
  Address
}