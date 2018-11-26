import styled from 'styled-components'

const FourModule = styled.div `
  padding: 0 .28rem;
  background: #fff;
  display: flex;
  position: relative;
  .doubledup-item {
    border-right: .02rem solid #F4F4F4;
    margin-bottom: .12rem;
    margin-top: .1rem;
  }
  .module-titles {
    padding-left: .1rem;
  }
  .doubledup-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    color: #4A4A4A;
  }
  .doubledup-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    margin-bottom: .12rem;
  }
  .doubledup-img {
    display: flex;
    img {
      /* width: 1.48rem; */
      height: 1.48rem;
      padding: 0 .13rem;
      vertical-align: middle;
      max-width: 100%;
    }
  }
  > .doubledup-item:last-of-type {
    border-right: 0;
  }
  .bd-bottom {
    position: absolute;
    border-bottom: .02rem solid #F4F4F4;
    width: 6.94rem;
    left: .28rem;
    bottom: 0;
    z-index: 2;
  }
`

export {
  FourModule
}