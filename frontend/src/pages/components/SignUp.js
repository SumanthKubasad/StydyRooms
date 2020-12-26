import React, { Component } from "react";

import { Input, Space, Button, Switch } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  KeyOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import LoginApi, { SignUpApi } from "../../api/LoginApi";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_id: "",
      password: "",
      name: "",
      isTeacher:false,
    };
  }
  handleChangeEmailId = async (event) => {
    const email_id = event.target.value;
    this.setState({ email_id });
  };

  handleChangeInputPassword = async (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  handleIncludeEmail = async () => {
    const { email_id, password } = this.state;
    const payload = { email_id, password };

    await SignUpApi.SignUp(payload)
      .then((res) => {
        window.alert(`Signed up successfully`);
        this.setState({
          email_id: "",
          password: "",
        });
      })
      .catch((error) => {
        window.alert(`unsuccesssfull`);
      });
  };
  render() {
    const { email_id, password, name, usn } = this.state;

    return (
      <>
        <Space direction="vertical">
          <Input
            placeholder="Email Id"
            type="string"
            onChange={this.handleChangeEmailId}
            value={email_id}
            prefix={<UserOutlined />}
          />

          <Input.Password
            type="string"
            value={password}
            onChange={this.handleChangeInputPassword}
            placeholder="Password"
            prefix={<KeyOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input placeholder="Full Name" type="string" value={name} />

          <span style={{ marginLeft: "10px" }}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={(checked) => {
                this.setState({ isTeacher: checked });
              }}
            />
            <span style={{ marginLeft: "10px" }}>Are you a techer?</span>
          </span>
          <Button block={true} onClick={this.handleIncludeEmail} type="primary">
            Sign Up
          </Button>
          {}
        </Space>
      </>
    );
  }
}

export default SignUp;
