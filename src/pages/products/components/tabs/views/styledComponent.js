import styled from 'styled-components'

const Tabs = styled.ul `
  position: fixed;
  top: 0;
  /* opacity: 0; */
  width: 100%;
  z-index: 101;
  height: .7rem;
  line-height: .7rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 .2rem;
  box-shadow: 0 0 6px #dcc0de;
  /* transform: scaleY(0); */
  li {
    text-align: center;
    color: #353535;
    font-size: .28rem;
    img {
      width: .24rem;
      height: .24rem;
      position: relative;
      top: -.03rem;
      right: .06rem;
    }
  }
`

export {
  Tabs
}