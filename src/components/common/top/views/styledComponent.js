import styled from 'styled-components'

const Top = styled.div `
  opacity: ${props => props.isShow ? '1' : '0'};
  z-index: 5;
  border: 2px solid #ccc;
  position: fixed;
  right: .2rem;
  bottom: 1.28rem;
  cursor: pointer;
  width: .8rem;
  height: .8rem;
  font-size: .8rem;
  line-height: .8rem;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: content-box;
  transition-timing-function: linear;
  transition-duration: .5s;
  overflow: hidden;
  /* [data-dpr="2"] .border {
    border: 2px solid #ccc;
  }
  [data-dpr="3"] .border {
    border: 3px solid #ccc;
  } */
  .icon-back-top {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    box-sizing: content-box;
    position: relative;
    top: -.02rem;
    fill: currentColor;
    overflow: hidden;
  }
`

export {
  Top
}