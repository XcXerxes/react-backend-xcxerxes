import React from 'react'
import {Layout, Icon} from 'antd'
import {connect} from 'react-redux'
import {triggerMenu} from '@/stores/header/action'

const {Header} = Layout


class HeaderBar extends React.PureComponent{
  triggerHandle = () => {
    this.props.triggerMenu(!this.props.collapsed)
  }
  render () {
    return (
      <Header className="xcxerxes-header">
        <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.triggerHandle}/>
      </Header>
    )
  }
}

export default connect(state => ({
  collapsed: state.menus.collapsed
}), {triggerMenu})(HeaderBar)