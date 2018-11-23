import React, { Component } from 'react';

import { Operate } from './styledComponent'

class OperateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operateList: [
        {
          operateTitle: '一起拼',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/6A/DC/rBACYVvk7h-Aa68gAAAHw8Vgm3o159.png',
          topicId: 86
        },
        {
          operateTitle: '品质男装',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/47/67/rBACVFtjwZiAJtKAAAAGs0jCTj8552.png',
          categoryId: 279
        },
        {
          operateTitle: '花漾女神',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/3D/DF/rBACVFsw9MCAHV7xAAAKQ54JbXs007.png',
          categoryId: 294
        },
        {
          operateTitle: '美妆个护',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/49/BA/rBACVFttOGSANsoXAAAFQ0oDVKA649.png',
          categoryId: 119
        },
        {
          operateTitle: '厨具水具',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/6A/E4/rBACW1vk7eSAFowfAAAKiNkazyg993.png',
          categoryId: 51
        },
        {
          operateTitle: '休食茶饮',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/5A/E5/rBACVFusjiKADfP5AAASP9g1was575.png',
          categoryId: 627
        },
        {
          operateTitle: '家居家纺',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/6A/E4/rBACW1vk7PqABPF1AAADvhPB07w667.png',
          categoryId: 355
        },
        {
          operateTitle: '家用电器',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/6A/DC/rBACYVvk7caAZUezAAADIxT8I8U946.png',
          categoryId: 334
        },
        {
          operateTitle: '男女鞋靴',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/5C/51/rBACYVurZQ6AM2rHAAAMi2h5ylo955.png',
          categoryId: 35
        },
        {
          operateTitle: '户外运动',
          operateImgUrl: 'https://bfs.biyao.com/group1/M00/6A/E4/rBACW1vk7geAeYoJAAAI_cU2Q7Y537.png',
          categoryId: 39
        }
      ]
    }
  }

  render() {
    return (
      <Operate>
        <ul>
        {
          this.state.operateList.map(item => (
            <li key={item.topicId ? item.topicId : item.categoryId}>
              <a href="javascript:void(0)">
                <img src={`${item.operateImgUrl}`} alt=""/>
                <span>{item.operateTitle}</span>
              </a>
            </li>
          ))
        }
        </ul>
      </Operate>
    );
  }
}

export default OperateContainer;