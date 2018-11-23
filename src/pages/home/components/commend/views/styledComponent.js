import styled from 'styled-components'

const Commend = styled.div `
  margin-top: .28rem;
`

const CommendList = styled.ul `
  display: flex;
  flex-wrap: wrap;
  li {
    width: 100%;
    background: #FFF;
    margin-bottom: .08rem;
  }
`
const ItemImg = styled.div `
  width: 7.5rem;
  height: 3.85rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`

const ItemDes = styled.div `
  padding: .16rem .24rem .32rem;
  position: relative;
`

const SingleWrap = styled.div `
  display: flex;
`

const ItemPrice = styled.p `
  font-family: PingFangSC-Medium;
  font-size: .32rem;
  color: #F7A701;
  line-height: .45rem;
  margin-right: .24rem;
  i {
    font-size: .2rem;
  }
`

const ItemLabels = styled.p `
  width: 90%;
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  span {
    display: inline-block;
    /* height: .2rem; */
    line-height: .2rem;
    margin-right: .08rem;
    font-family: PingFangSC-Regular;
    font-size: .18rem;
    color: #FFF;
    padding: .03rem .04rem;
    border-radius: .02rem;
    border: 1px solid #fff;
    margin-bottom: .12rem;
  }
`

const ItemBck = styled.p `
  font-family: PingFangSC-Regular;
  line-height: .33rem;
  color: #BF9E6B;
  font-size: .24rem;
  margin-top: .12rem;
  width: 3.18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ItemTitle = styled.span `
  font-family: PingFangSC-Regular;
  display: inline-block;
  width: 4rem;
  font-size: .28rem;
  color: #4A4A4A;
  line-height: .4rem;
  margin-top: .12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ItemPraiseWrap = styled.div `
  position: absolute;
  bottom: .32rem;
  right: .24rem;
  p {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    line-height: .4rem;
    color: #BBB;
    max-width: 2.64rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export {
  Commend,
  CommendList,
  ItemImg,
  ItemDes,
  SingleWrap,
  ItemPrice,
  ItemLabels,
  ItemBck,
  ItemTitle,
  ItemPraiseWrap
}