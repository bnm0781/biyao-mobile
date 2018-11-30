import styled from 'styled-components'

const Slider = styled.div `
  width: 100%;
  height: 7.5rem;
  overflow: hidden;
  .am-wingblank.am-wingblank-lg {
    margin-left: 0;
    margin-right: 0;
    position: relative;
  }
  .banner-item {
    position: absolute;
    right: .2rem;
    bottom: .2rem;
    width: 1.12rem;
    height: .44rem;
    line-height: .44rem;
    background-color: rgba(0,0,0,.3);
    color: #fff;
    text-align: center;
    border-radius: .22rem;
    z-index: 99999;
    transform: translateZ(0);
  }
`

export {
  Slider
}