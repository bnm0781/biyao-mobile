import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
import qs from 'qs'

import { NavSecondCate, NavSecondCateLi } from './styledComponent'

class NavSecondCateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 与上层对应的下层页签列表
      categoryNavList: {
        622: [{category: '咖啡',categoryId: 622}],
        628: [{category: '休食',categoryId: 628},{category: '茶饮/冲调',categoryId: 629}],
        295: [{category: '男士外套',categoryId: 295},{category: '男士内搭',categoryId: 280},{category: '男士下装',categoryId: 289}],
        300: [{category: '外衣/套装',categoryId: 300},{category: '女士内搭',categoryId: 299},{category: '女士下装',categoryId: 301},{category: '特色女装',categoryId: 303}],
        668: [{category: '隐形眼镜',categoryId: 668},{category: '近视眼镜',categoryId: 590},{category: '太阳镜',categoryId: 604},{category: '运动眼镜',categoryId: 599},{category: '防蓝光护目镜',categoryId: 596},{category: '老花镜',categoryId: 593},{category: '儿童眼镜',categoryId: 608},],
        340: [{category: '内衣',categoryId: 340},{category: '袜子',categoryId: 341},{category: '手表',categoryId: 647},{category: '配饰',categoryId: 342}],
        394: [{category: '童装童靴',categoryId: 394},{category: '儿童用品',categoryId: 395},{category: '婴儿用品',categoryId: 392},{category: '妈妈专区',categoryId: 393}],
        38: [{category: '女鞋',categoryId: 38},{category: '男鞋',categoryId: 37}],
        40: [{category: '运动鞋靴',categoryId: 40},{category: '运动服饰',categoryId: 191},{category: '户外服饰',categoryId: 320},{category: '运动装备',categoryId: 216}],
        506: [{category: '功能箱包',categoryId: 506},{category: '男包/皮带',categoryId: 154},{category: '时尚女包',categoryId: 209},{category: '出行必备',categoryId: 510}],
        120: [{category: '面部护理',categoryId: 120},{category: '香水彩妆',categoryId: 214},{category: '口腔护理',categoryId: 477},{category: '身体护理',categoryId: 413},{category: '男士护理',categoryId: 520},{category: '女性护理',categoryId: 181},{category: '清洁/祛味',categoryId: 526},{category: '宠物用品',categoryId: 529}],
        356: [{category: '家纺',categoryId: 356},{category: '生活用品',categoryId: 357}],
        187: [{category: '水具/茶具',categoryId: 187},{category: '厨具',categoryId: 186}],
        534: [{category: '厨用电器',categoryId: 534},{category: '生活家电',categoryId: 335},{category: '美容护理',categoryId: 536}],
        371: [{category: '厨卫用品',categoryId: 371},{category: '灯具',categoryId: 670},{category: '家装软饰',categoryId: 370},{category: '五金工具',categoryId: 372}],
        14: [{category: '卧室',categoryId: 14},{category: '客厅',categoryId: 13},{category: '书房',categoryId: 15},{category: '餐厅',categoryId: 16},{category: '儿童家具',categoryId: 234}],
        472: [{category: '影音充电',categoryId: 472},{category: '外设办公',categoryId: 464}],
        430: [{category: '汽车配件',categoryId: 430},{category: '配饰清洁',categoryId: 574}],
        547: [{category: '保健',categoryId: 547}],
        578: [{category: '箱包出行',categoryId: 578},{category: '服饰鞋靴',categoryId: 582},{category: '软装画饰',categoryId: 585},{category: '茶具水具',categoryId: 434}]
      },
      activeIndex: 0    // 当前高亮显示的页签
    }

    this.navSecondClick = this.navSecondClick.bind(this)
    this.getCategoryList = this.getCategoryList.bind(this)
  }

  componentDidMount() {
    // 滚动效果
    this.navSecondScroll = new BScroll(this.navSecondEl, {
      click: true,
      scrollX: true
    })
  }

  navSecondClick(event, index, item) {
    // 请求当前页签需要渲染的数据
    this.getCategoryList(item.categoryId)

    // 点击当前页签使其高亮
    this.setState({activeIndex: index})

    // 滚动到点击的目标元素
    this.navSecondScroll.scrollToElement(event.target, 100, true, true)

    // 路由跳转
    let categoryValue = this.props.location.state.category    // 需要将上层页签路由再次 push 到 state 中
    this.props.history.push({pathname: '/home/category', state: {
      categoryId: item.categoryId,
      category: categoryValue
    }})
  }

  getCategoryList(categoryId) {
    fetch('/api/classify/getProductData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
      },
      body: qs.stringify({
        categoryID: categoryId
      })
    })
      .then(response => response.json())
      .then(result => this.setState({categoryList: result.data.productList}))
  }

  componentWillReceiveProps(nextProps) {
    // 判断上层页签是否改变，如果改变将 activeIndex 变更为0
    // 这样每次改变上层页签，下层页签都会优先高亮第一个
    if (this.props.location.state.category !== nextProps.location.state.category) {
      this.setState({activeIndex: 0})
    }
  }

  render() {
    const navCategoryId = this.props.location.state.category

    return (
      <NavSecondCate>
        <div ref={el => this.navSecondEl = el}>
          <ul>
            {
              this.state.categoryNavList[navCategoryId].map((item, index) => (
                <NavSecondCateLi
                  key={index}
                  active={this.state.activeIndex === index}
                  onClick={(event) => this.navSecondClick(event, index, item)}
                >
                  <i>{item.category}</i>
                </NavSecondCateLi>
              ))
            }
          </ul>
          <span className="nav-secondCate-line">|</span>
        </div>
        <div className="together">
          <span className="img"></span>
          <span className="title">一起拼</span>
        </div>
      </NavSecondCate>
    );
  }
}

export default withRouter(NavSecondCateContainer);