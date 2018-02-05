import React, { Component } from 'react';
import {Button} from 'antd'

class LoginHome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Button type="info" style={{marginLeft: '20px'}}>提交</Button>
        </header>
      </div>
    );
  }
}

export default LoginHome;
