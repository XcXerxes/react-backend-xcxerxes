import { shallow } from 'enzyme'
import React from 'react'
import LoginForm from './login-form'

test('login is successfully', () => {
  const props = {
    username: 'username',
    password: 'password'
  }
  // const loginForm = shallow(<LoginForm {...props} />)
  // expect(loginForm.find('input[placeholder="请输入用户名"]').text()).toBe('username')
  // expect(loginForm.find('input[placeholder="请输入密码"]').text()).toBe('password11232323')
})