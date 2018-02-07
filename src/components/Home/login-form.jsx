import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd'
const FormItem = Form.Item

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('received values :', values)
        this.props.submitHandle(values)
      }
    })
  }
  render () {
    const { getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{required: true, message: '请输入用户名'}]
          })(
            <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码'}]
          })(
            <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem className="login-form__action">
          <Row type="flex" justify="space-around">
            <Col span={12}>
              <Checkbox>自动登录</Checkbox>
            </Col>
            <Col span={12} style={{textAlign: 'right'}}>
              <a className="login-form-forgot" href="">忘记密码</a>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type="primary" loading={this.props.loading} htmlType="submit" style={{width: '100%'}}>登录</Button>
        </FormItem>
      </Form>
    )
  }
}
export default Form.create()(LoginForm)