import styled from 'styled-components'

const ThreeModule = styled.div `
  padding: 0 .28rem;
  background: #fff;
  display: flex;
  position: relative;
  .triplegap-item {
    flex: 1;
    border-right: .05rem solid #F4F4F4;
    margin-top: .1rem;
    margin-bottom: .14rem;
  }
  .triplegap-item:last-of-type {
    border-right: 0;
  }
  span {
    display: block;
    vertical-align: middle;
  }
  .module-titles {
    padding-left: .1rem;
  }
  .triplegap-img {
    padding: 0 .14rem;
    /* width: 2rem; */
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .triplegap-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    color: #4A4A4A;
  }
  .triplegap-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    margin-bottom: .15rem;
  }
`

export {
  ThreeModule
}