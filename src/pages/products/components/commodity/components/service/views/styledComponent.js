import styled from 'styled-components'

const Service = styled.div `
  padding: 0 .2rem;
  height: .8rem;
  width: 100%;
  line-height: .8rem;
  background-color: #fafafa;
  .gl-service-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    li {
      color: #828282;
      .gl-service-icon {
        width: .24rem;
        height: .24rem;
        margin-right: .06rem;
        vertical-align: -.15em;
        fill: currentColor;
        overflow: hidden;
      }
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
`

export {
  Service
}