import styled from 'styled-components'

const NavSecondCate = styled.div `
  padding: 0 .25rem;
  overflow: hidden;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  div:nth-child(1) {
    width: 5.5rem;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
  }
  ul {
    height: .89rem;
    display: inline-block;
  }
  .nav-secondCate-line {
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    height: .6rem;
    width: .01rem;
    margin-top: -.3rem;
    background: #D8D8D8;
  }
  .together {
    margin-left: .21rem;
    width: 1.28rem;
    height: .48rem;
    font-size: .24rem;
    display: flex;
    color: #d8d8d8;
    border: .01rem solid #7E4395;
    align-items: center;
    color: #7E4395;
    .img {
    margin-left: .13rem;
    display: block;
    width: .18rem;
    height: .24rem;
    background: url(https://static.biyao.com/m/img/base/yiqipin_screen_purple@2x.png?v=biyao_dba4434) no-repeat;
    background-size: 100%;
    }
    .title {
    margin-left: .1rem;
    }
  }
`

const NavSecondCateLi = styled.li`
  display: inline-block;
  padding: .2rem .2rem 0 0;
  i {
    display: block;
    height: .46rem;
    padding: 0 .2rem;
    border: .01rem solid ${props => props.active ? 'transparent' : '#7f4395'};
    border-radius: .28rem;
    line-height: .46rem;
    text-align: center;
    font-size: .24rem;
    min-width: 1.15rem;
    color: ${props => props.active ? '#fff' : '#7f4395'};
    background: ${props => props.active ? '#7f4395' : 'transparent'}
  }
`

export {
  NavSecondCate,
  NavSecondCateLi
}