import styled from 'styled-components'

const GroupBuying = styled.div `
  display: block;
  z-index: 3;
  overflow: hidden;
  position: fixed;
  bottom: 1.28rem;
  left: 50%;
  margin-left: -37.05%;
  background: rgba(0, 0, 0, .7);
  width: 5.56rem;
  height: .64rem;
  color: #fff;
  transition: bottom .5s linear;
  border-radius: .5rem;
  letter-spacing: .03rem;
  font-size: .24rem;
  .goGroupBuying {
    position: absolute;
    right: 0;
    span {
      display: flex;
      align-items: center;
    }
    img {
      width: .24rem;
      height: .24rem;
      margin-right: .08rem;
      margin-left: .01rem;
    }
  }
  .am-wingblank.am-wingblank-lg {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex !important;
    align-items: center !important;
    /* justify-content: space-between !important; */
  }
  .my-carousel {
    height: 100% !important;
  }
  .slider-frame {
    width: 5.56rem !important;
    height: .64rem !important;
  }
  .slider-list {
    height: 100% !important;
    position: relative !important;
    left: 0 !important;
  }
  .slider-slide {
    display: flex !important;
    height: 100% !important;
    align-items: center !important;
  }
  .v-item {
    display: flex;
    align-items: center;
    height: 100% !important;
    img {
      margin-left: .08rem;
      margin-right: .14rem;
      width: .48rem;
      height: .48rem;
      border-radius: 50%;
    }
    .nickname {
      width: 1.64rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title {
      white-space: nowrap;
      margin-left: .05rem;
    }
  }
`

export {
  GroupBuying
}