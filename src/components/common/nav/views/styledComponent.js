import styled from 'styled-components'

const Nav = styled.div `
  position: relative;
  height: .74rem;
  span {
    position: absolute;
    top: .2rem;
    right: .5rem;
    width: .24rem;
    height: .15rem;
    padding: .15rem .1rem;
    background-repeat: no-repeat;
    background-image: url(https://static.biyao.com/m/img/master/index/icon_down@2x.png?v=biyao_c5aeb76);
    background-repeat: no-repeat;
    background-position: center center;
  }
`
const NavFirstCate = styled.div `
  margin-right: 1.04rem;
  height: 100%;
`

const CategoryList = styled.div `
  width: 100%;
  height: 100%;
  white-space: nowrap;
  /* overflow: hidden; */
  overflow-y: scroll;
  ul {
    height: 100%;
    display: inline-block;
    padding-left: .2rem;
  }
  li {
    display: inline-block;
  }
  a {
    display: inline-block;
    height: .74rem;
    padding: 0 .2rem;
    border-bottom: .04rem solid transparent;
    line-height: .74rem;
    text-align: center;
    font-size: .3rem;
    color: gray;
  }
`

export {
  Nav,
  NavFirstCate,
  CategoryList
}