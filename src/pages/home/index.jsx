import React, { Component } from 'react';
import {Row, Col} from 'antd'
import LoginForm from '@/components/Home/login-form'
import api from '@/api'

class LoginHome extends Component {
  constructor (args) {
    super(args)
    this.state = {
      loading: false
    }
  }
  // 登录
  submitHandle = async (values) => {
    try {
      this.setState({loading: true})
      const result = await api.login(values)
      console.log(result)
      this.setState({loading: false})
      if (result.code === 200) {
        console.log('登录成功')
      }
    } catch (error) {
      this.setState({loading: false})
      throw error
    }
  }
  render() {
    return (
      <div className="xcxerxes xcxerxes-home">
        <div className="xcxerxes-home__wrapper"></div>
        <Row type="flex" justify="center" align="middle">
          <Col lg={6} xl={5} md={12} sm={16} xs={24}>
            <div className="xcxerxes-home__content">
              <LoginForm submitHandle={(values) => this.submitHandle(values)} loading={this.state.loading}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginHome;
