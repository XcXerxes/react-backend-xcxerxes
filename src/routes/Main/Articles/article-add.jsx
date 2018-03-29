import React from 'react'
import './index.scss'
import SubTitle from '@/components/SubTitle'
import {Form, Input, Icon, Select, Row, Col, Button} from 'antd'

const FormItem = Form.Item

class ArticleForm extends React.PureComponent{
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 5}
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 8,
          offset: 4
        },
      }
    }
    return (
      <section className="article-wrapper">
        <SubTitle title="新增文章" />
        <Form>
          <FormItem
            {...formItemLayout}
            label="文章标题："
          >
          {getFieldDecorator('title', {
            rules: [
              {
                required: true, message: '请输入标题'
              }
            ]
          })(
            <Input size="small" />
          )}    
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="文章描述："
          >
          {getFieldDecorator('caption', {
            rules: [
              {
                required: true, message: '请输入描述信息'
              }
            ]
          })(
            <Input size="small" />
          )}    
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="缩略图："
          >
          {getFieldDecorator('thumb', {
            rules: [
              {
                required: true, message: '请上传缩略图'
              }
            ]
          })(
            <Input size="small" />
          )}    
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="文章分类："
          >
          {getFieldDecorator('cate_name', {
            rules: [
              {
                required: true, message: '请上传缩略图'
              }
            ]
          })(
            <Input size="small" />
          )}    
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="编写文章："
          >
          {getFieldDecorator('content', {
            rules: [
              {
                required: true, message: '请填写文章内容'
              }
            ]
          })(
            <Input size="small" />
          )}    
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">提交文章</Button>
            <Button style={{marginLeft: '10px'}}>重置内容</Button>
        </FormItem>
        </Form>
      </section>
    )
  }
}

const ArticleAdd = Form.create()(ArticleForm)

export default ArticleAdd
