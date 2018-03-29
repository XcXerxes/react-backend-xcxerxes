import React from 'react'
import {Table, Button, Icon } from 'antd'

const {Column} = Table

const data = [
  {
    key: '1',
    title: 'Reactjs china',
    caption: 'Reactjs china Reactjs chinaReactjs chinaReactjs china',
    cate_name: 'ReactJs',
    visit: 100,
    like: 200,
    comment_count: 10
  },
  {
    key: '2',
    title: 'Reactjs china',
    caption: 'Reactjs china Reactjs chinaReactjs chinaReactjs china',
    cate_name: 'ReactJs',
    visit: 100,
    like: 200,
    comment_count: 10
  },
  {
    key: '3',
    title: 'Reactjs china',
    caption: 'Reactjs china Reactjs chinaReactjs chinaReactjs china',
    cate_name: 'ReactJs',
    visit: 100,
    like: 200,
    comment_count: 10
  },
  {
    key: '4',
    title: 'Reactjs china',
    caption: 'Reactjs china Reactjs chinaReactjs chinaReactjs china',
    cate_name: 'ReactJs',
    visit: 100,
    like: 200,
    comment_count: 10
  },
  {
    key: '5',
    title: 'Reactjs china',
    caption: 'Reactjs china Reactjs chinaReactjs chinaReactjs china',
    cate_name: 'ReactJs',
    visit: 100,
    like: 200,
    comment_count: 10
  },
  {
    key: '6',
    title: 'Reactjs china',
    caption: 'Reactjs china Reactjs chinaReactjs chinaReactjs china',
    cate_name: 'ReactJs',
    visit: 100,
    like: 200,
    comment_count: 10
  }
]

const ArticleList = () => {
  return (
    <Table dataSource={data} size="small">
      <Column
        title="标题"
        dataIndex="title"
        key="title"
        align="center"
      >
      </Column>
      <Column
        title="描述"
        dataIndex="caption"
        key="caption"
        align="center"
      >
      </Column>
      <Column
        title="分类"
        dataIndex="cate_name"
        key="cate_name"
        align="center"
      >
      </Column>
      <Column
        title="浏览次数"
        dataIndex="visit"
        key="visit"
        align="center"
      >
      </Column>
      <Column
        title="点赞次数"
        dataIndex="like"
        key="like"
        align="center"
      >
      </Column>
      <Column
        title="评论次数"
        dataIndex="comment_count"
        key="comment_count"
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

export default ArticleList
