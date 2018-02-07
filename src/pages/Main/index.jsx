import React, {Component} from 'react'
import {Layout} from 'antd'
import SiderMenu from '@/components/SiderMenu'
import {getMenuData} from '@/common/menu'
import logo from '@/assets/images/logo.svg'
const {Header, Sider, Content} = Layout

export default class MainList extends Component {
  render () {
    return (
      <Layout>
        <SiderMenu  menuData={getMenuData()} logo={logo}/>
        
      </Layout>  
    )
  } 
}