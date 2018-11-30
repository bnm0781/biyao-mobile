import styled from 'styled-components'

const Range = styled.div `
  padding: 0 .2rem;
  position: relative;
  height: .9rem;
  width: 100%;
  line-height: .9rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: .24rem;
  font-family: PingFang-SC-Medium;
  color: #828282;
  .standard {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    span {
      color: #828282;
      font-size: .24rem;
    }
    .choosed-size-Exhibition {
      color: #353535;
      font-size: .24rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .gl-more {
    font-size: .24rem;
    color: #828282;
    line-height: .9rem;
    .icon {
      height: .24rem;
      width: .24rem;
      display: inline-block;
      vertical-align: middle;
      svg {
        fill: #828282;
      }
    }
  }
`

export {
  Range
}