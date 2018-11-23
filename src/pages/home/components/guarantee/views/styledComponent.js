import styled from 'styled-components'

const Guarantee = styled.div `
  height: .723rem;
  border-bottom: 1px solid #F4F4F4;
  background-color: #fff;
  padding: 0 .3rem;
  p {
    display: flex;
    justify-content: space-between;
  }
  span {
    display: inline-block;
    line-height: .72rem;
    color: #7f4395;
    font-size: .24rem;
    background: url(https://static.biyao.com/m/img/master/index/checked.png?v=biyao_7e6fbbe) no-repeat left center;
    background-size: .24rem .24rem;
    text-align: left;
    padding-left: .36rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export {
  Guarantee
}