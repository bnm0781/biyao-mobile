import styled from 'styled-components'

const Handpick = styled.div `
  margin-top: .28rem;
  .module-titleline {
    background: #fff;
    text-align: center;
    padding: 0 .28rem;
    em {
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
        border-bottom: .02rem solid #4a4a4a;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .right-arrow {
    float: right;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    position: absolute;
    top: .3rem;
    right: 0;
    color: #4A4A4A;
    i {
      display: inline-block;
      height: .14rem;
      width: .14rem;
      border-width: .02rem .02rem 0 0;
      border-color: #4A4A4A;
      border-style: solid;
      transform: matrix(0.71,.71,-.71,.71,0,0);
      position: absolute;
      top: 50%;
      right: .06rem;
      margin-top: -.09rem;
    }
  }
  .module-special {
    padding: 0 .28rem;
    background: #fff;
  }
  .special-item {
    display: block;
    vertical-align: middle;
  }
  .special-img {
    width: 6.94rem;
    height: 3.89rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .module-titles {
    padding: .16rem 0 .28rem;
    position: relative;
    i {
      font-family: PingFangSC-Regular;
      font-size: .28rem;
      line-height: .32rem;
      color: #F7A701;
      position: absolute;
      right: 0;
      top: .2rem;
    }
  }
  .special-title {
    width: 5.04rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    color: #4A4A4A;
  }
`

export {
  Handpick
}