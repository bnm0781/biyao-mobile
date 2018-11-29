import styled from 'styled-components'

const Footer = styled.div `
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .96rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .gl-other-wrap {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .customer-service {
      position: relative;
      width: .97rem;
      height: 100%;
      text-align: center;
      .gl-icon {
        display: block;
        font-size: .4rem;
        margin-top: .1rem;
        .icon {
          width: 1em;
          height: 1em;
          vertical-align: .15em;
          fill: currentColor;
          overflow: hidden;
        }
      }
      .gl-service-text {
        color: #353535;
        cursor: pointer;
      }
    }
    .customer-service::after {
      content: "";
      position: absolute;
      right: 0;
      border-right: 1px solid #ccc;
      top: 0;
      width: 1px;
      height: .96rem;
      transform: scaleX(0.5);
    }
  }
  .gl-other-wrap::after {
    content: "";
    position: absolute;
    top: -.5px;
    left: 0;
    height: 1px;
    width: 100%;
    border-top: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  .choose-gl-btn {
    height: 100%;
    line-height: .96rem;
    text-align: center;
    background-color: #8443a4;
    color: #fff;
    font-size: .3rem;
    flex-grow: 1;
    font-family: PingFang-SC-Medium;
    .choose-bottom-btn-wrap {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        font-family: PingFang-SC-Medium;
        font-size: .28rem;
        position: relative;
        flex-grow: 1;
        width: 50%;
        height: .96rem;
        cursor: pointer;
      }
      .buy-shopcar {
        background: #fff;
        color: #666;
      }
      .group-buy {
        color: #fff;
        background-color: #7e4395;
      }
    }
  }
`

export {
  Footer
}