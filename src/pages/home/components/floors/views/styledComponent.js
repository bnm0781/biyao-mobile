import styled from 'styled-components'

const DailyNew = styled.div `
  margin-top: .28rem;
  .module-singleline {
    padding: .28rem;
    background: #fff;
  }
  .singleline-item {
    display: block;
    vertical-align: middle;
  }
  .singleline-img {
    width: 100%;
    height: 3.56rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
`

const Manufacturers = styled.div `
  margin-top: .28rem;
`

const FourModule = styled.div `
  padding: 0 .28rem;
  background: #fff;
  display: flex;
  position: relative;
  .doubledup-item {
    border-right: .02rem solid #F4F4F4;
    margin-bottom: .12rem;
    margin-top: .1rem;
  }
  .module-titles {
    padding-left: .1rem;
  }
  .doubledup-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    color: #4A4A4A;
  }
  .doubledup-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    margin-bottom: .12rem;
  }
  .doubledup-img {
    display: flex;
    img {
      /* width: 1.48rem; */
      height: 1.48rem;
      padding: 0 .13rem;
      vertical-align: middle;
      max-width: 100%;
    }
  }
  > .doubledup-item:last-of-type {
    border-right: 0;
  }
  .bd-bottom {
    position: absolute;
    border-bottom: .02rem solid #F4F4F4;
    width: 6.94rem;
    left: .28rem;
    bottom: 0;
    z-index: 2;
  }
`

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

const Peach = styled.div `
  margin-top: .28rem;
  .module-singleline {
    padding: .28rem;
    background: #fff;
  }
  .singleline-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    padding-top: .04rem;
    color: #BF9E6B;
  }
  .singleline-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    color: #BBBBBB;
    margin-bottom: .16rem;
}
  }
  .singleline-img {
    width: 100%;
    height: 3.56rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
`

const Ranking = styled.div `
  margin-top: .28rem;
  .module-blockline {
    background: #FFF;
    height: 0.2rem;
    width: 100%;
  }
  .module-doubleleft {
    padding: 0 .28rem;
    background: #fff;
    display: flex;
    position: relative;
  }
  .module-titles {
    padding-left: .1rem;
  }
  .doubleleft-item {
    border-right: .02rem solid #F4F4F4;
    margin-top: .1rem;
    margin-bottom: .15rem;
  }
  .doubleleft-item:last-of-type {
      border-right: 0;
  }
  .doubleleft-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    color: #CC967A;
  }
  .doubleleft-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    margin-bottom: .15rem;
  }
  .doubleleft-img {
    display: flex;
    img {
      /* width: 2rem; */
      height: 2rem;
      padding: 0 .16rem;
      vertical-align: middle;
    }
  }
  .bd-bottom {
    position: absolute;
    border-bottom: .02rem solid #F4F4F4;
    width: 6.94rem;
    left: .28rem;
    bottom: 0;
    z-index: 2;
  }
  .module-triple {
    padding: 0 .28rem;
    background: #fff;
    display: -webkit-flex;
    display: flex;
    position: relative;
  }
  .triple-item {
    border-right: .02rem solid #F4F4F4;
    margin-top: .1rem;
    margin-bottom: .15rem;
  }
  .triple-item:last-of-type {
    border-right: 0;
  }
  .module-titles {
    padding-left: .1rem;
  }
  .triple-title {
    font-family: PingFangSC-Medium;
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    color: #4A4A4A;
  }
  .triple-sub-title {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .28rem;
    height: .28rem;
    overflow: hidden;
    color: #BBB;
    margin-bottom: .15rem;
  }
  .triple-img {
    /* width: 2rem; */
    height: 2rem;
    padding: 0 .15rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
`

export {
  DailyNew,
  Manufacturers,
  FourModule,
  TwoModule,
  Peach,
  Ranking
}