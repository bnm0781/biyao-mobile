import styled from 'styled-components'

const Header = styled.div `
  position: relative;
  .title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 7.5rem;
    height: .84rem;
    overflow: hidden;
    background: #fff;
    border-bottom: .01rem solid #ccc;
    box-shadow: 0.01rem 0.01rem 0.05rem rgba(7,0,2,.2);
  }
  span {
    position: absolute;
    top: .13rem;
    left: .2rem;
    z-index: 2;
    display: block;
    width: .6rem;
    height: .6rem;
    font-size: .45rem;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;
  }
  p {
    line-height: .84rem;
    width: 4.8rem;
    margin: 0 auto;
    font-size: .32rem;
    text-align: center;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export {
  Header
}