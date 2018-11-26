import styled from 'styled-components'

const Floor = styled.div `
  margin-top: .28rem;
  .module-titleline {
    background: #fff;
    text-align: center;
    padding: 0 .28rem;
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    vertical-align: middle;
  }
  .floorTitle {
    display: inline-block;
    max-width: 90%;
    vertical-align: middle;
    font-family: PingFangSC-Medium;
    color: #4A4A4A;
    font-size: .28rem;
    position: relative;
    height: .4rem;
    line-height: .4rem;
    margin-top: .28rem;
    margin-bottom: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    i {
      display: inline-block;
      width: 100%;
      border-bottom: .02rem solid #7F4395;
      position: absolute;
      left: 0;
      bottom: 0;
      border-color: #4A4A4A;
    }
  }
  .floorSubTitle {
    height: .33rem;
    margin-bottom: .14rem;
    margin-top: -.18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #BF9E6B;
  }
`

export {
  Floor
}