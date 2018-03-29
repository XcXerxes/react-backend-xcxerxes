import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import SiderMenu from '@/components/SiderMenu'
import HeaderBar from '@/components/HeaderBar'
import Bread from '@/components/Bread'
import {getMenuData} from '@/common/menu'
import logo from '@/assets/images/logo.svg'

import UserList from './Users/user-list'
import ArticleList from './Articles/article-list'
import ArticleAdd from './Articles/article-add'

const {Content} = Layout

export default class MainList extends Component {
  render () {
    const breadcrumbNameMap = [
      {
        name: '用户列表',
        url: '/users/list'
      },
      {
        name: '用户添加',
        url: '/users/add'
      }
    ]
    return (
      <Layout>
        <SiderMenu  menuData={getMenuData()} logo={logo}/>
        <Layout>
          <HeaderBar />
          <Content style={{margin: '0 16px'}}>
            <Bread breadcrumbNameMap={breadcrumbNameMap}/>
            <div style={{backgroundColor: '#fff', padding: '10px'}}>
              <Switch>
                {/*用户列表*/}
                <Route path="/main/users/list" component={UserList} />

                {/*文章列表*/}
                <Route path="/main/articles/list" component={ArticleList} />

                {/*文章添加*/}
                <Route path="/main/articles/add" component={ArticleAdd} />
              </Switch>
            </div> 
          </Content>
        </Layout>
      </Layout>  
    )
  } 
}
