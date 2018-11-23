import styled from 'styled-components'

const Title = styled.div `
  background: #fff;
  text-align: center;
  padding: 0 .28rem;
  span {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  h3 {
    display: inline-block;
    max-width: 90%;
    vertical-align: middle;
    font-family: PingFangSC-Medium;
    color: ${props => props.titleColor};
    font-size: .28rem;
    position: relative;
    height: .4rem;
    line-height: .4rem;
    margin-top: .28rem;
    margin-bottom: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  i {
    display: inline-block;
    width: 100%;
    border-bottom: .02rem solid ${props => props.borderColor};
    position: absolute;
    left: 0;
    bottom: 0;
  }
`

export {
  Title
}