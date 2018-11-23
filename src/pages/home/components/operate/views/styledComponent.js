import styled from 'styled-components'

const Operate = styled.div `
    font-size: 0;
    background-color: #fff;
    padding: .44rem .15rem;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      overflow: hidden;
      text-align: center;
      width: 20%;
    }
    li:nth-child(n+6) {
      margin-top: .34rem;
    }
    img {
      display: block;
      width: .48rem;
      height: .48rem;
      margin: 0 auto .08rem;
    }
    span {
      font-family: PingFangSC-Regular;
      font-size: .22rem;
      color: #666;
      line-height: .3rem;
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &::after {
      display: table;
      content: "";
    }
`

export {
  Operate
}