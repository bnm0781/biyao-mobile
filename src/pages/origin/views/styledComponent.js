import styled from 'styled-components'

const OriginView = styled.div `
  .am-tab-bar-bar {
    height: .98rem
  }
  .am-tab-bar-bar::before {
    content: "" !important;
    position: absolute !important;
    height: .02rem !important;
    width: 100% !important;
    left: 0 !important;
    top: 0 !important;
    background: #ccc !important;
    transform-origin: 0 0 !important;
    transform: scaleY(0.5) !important;
    -webkit-transform-origin: 0 0 !important;
    -webkit-transform: scaleY(0.5) !important;
  }
  .am-tab-bar-tab {
    height: 100%;
  }
  .am-tab-bar-tab-title {
    font-size: .24rem !important;
    margin-top: 10px !important;
  }
  .am-tabs-pane-wrap {
    overflow: hidden;
  }
`

export {
  OriginView
}