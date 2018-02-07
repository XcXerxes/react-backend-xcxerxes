import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd'
const {Sider} = Layout
const { SubMenu} = Menu

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.menus = props.menuData
  }

  /**
   *  get SubMenu or Item
   */
  getSubMenuOrItem = (item, key) => {
    if (item.children && item.children.some(child => child.name)) {
      return (
        <SubMenu
          key = {key}
          title={
            item.icon ? (
              <span>
                <Icon type={item.icon}></Icon>
                <span>{item.name}</span>
              </span>
            ) : item.name
          }
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      )
    }
  }
  /**
   * 获得菜单子节点
   */
  getNavMenuItems = (menusData) => {
    if (!menusData) {
      return []
    }
    return menusData.map((item, key) => {
      return this.getSubMenuOrItem(item, key)
    })
  } 
  render () {
    const {logo} = this.props
    return (
      <Sider
        trigger={null}
        collapsible
        breakpoint="lg"
        width={200}
        className="main-sider"
        
      >
        <div className="xcxerxes-menu__logo">
          <Link to="/">
            <img src={logo} alt=""/>
            <h1>博客管理系统</h1>
          </Link>
        </div>
        <Menu
          key="Menu"
          mode="inline"
          theme="dark"
          style={{width: '100%'}}
        >
        {this.getNavMenuItems(this.menus)}
        </Menu>
      </Sider>
    )
  }
}