import * as React from 'react'
import { Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

interface IProps {
  login: (payload: object) => void
  loading: boolean
}

class Login extends React.Component<IProps> {
  onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  public render() {
    return (
      <div className="login">
        <div className="logo">
          <img alt="logo" src="http://antd-admin.zuiidea.com/public/logo.svg" />
          <span>Blog ADMIN</span>
        </div>
        <Form onFinish={this.onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
