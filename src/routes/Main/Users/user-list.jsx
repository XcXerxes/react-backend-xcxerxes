import React from 'react'
import {Table, Button, Icon } from 'antd'

const {Column} = Table

const data = [
  {
    key: '1',
    username: 'John',
    email: 'John@gmail.com',
    ip: '10.10.10.3'
  },
  {
    key: '2',
    username: 'John',
    email: 'John@gmail.com',
    ip: '10.10.10.3'
  },
  {
    key: '3',
    username: 'John',
    email: 'John@gmail.com',
    ip: '10.10.10.3'
  },
  {
    key: '4',
    username: 'John',
    email: 'John@gmail.com',
    ip: '10.10.10.3'
  },
  {
    key: '5',
    username: 'John',
    email: 'John@gmail.com',
    ip: '10.10.10.3'
  },
  {
    key: '6',
    username: 'John',
    email: 'John@gmail.com',
    ip: '10.10.10.3'
  }
]

const UserList = () => {
  return (
    <Table dataSource={data} size="small">
      <Column
        title="用户名称"
        dataIndex="username"
        key="username"
        align="center"
      >
      </Column>
      <Column
        title="电子邮箱"
        dataIndex="email"
        key="email"
        align="center"
      >
      </Column>
      <Column
        title="用户IP"
        dataIndex="ip"
        key="ip"
        align="center"
      >
      </Column>
      <Column
        title="操作"
        key="action"
        align="center"
        render={(text, record) => (
          <span>
            <Button size="small" type="primary">查看</Button>
            <Button size="small" style={{margin: '0 5px'}}>编辑</Button>
            <Button size="small" type="danger">删除</Button>
          </span>
        )}
      >
      </Column>
    </Table>
  )
}

export default UserList
