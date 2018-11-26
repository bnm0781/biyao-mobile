import styled from 'styled-components'

const TwoModule = styled.div `
  padding: 0 .28rem .32rem;
  background: #fff;
  display: flex;
  position: relative;
  .doubleunfill-item {
    margin-right: .32rem;
  }
  > .doubleunfill-item:last-of-type {
    margin-right: 0;
  }
  .module-titles {

  }
  .doubleunfill-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    overflow: hidden;
    color: #4A4A4A;
    padding-top: .34rem;
  }
  .doubleunfill-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    margin-bottom: .16rem;
    padding-top: .01rem;
  }
  .doubleunfill-img {
    width: 3.31rem;
    height: 1.7rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
`

export {
  TwoModule
}