import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import style from "./loginForm.module.scss";

const LoginForm = ({ title, linkTitle, pathLocation, onFinish }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className={style.loginForm}>
        <h1>{title}</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {title}
            </Button>
            <Link style={{ marginLeft: "20px" }} to={pathLocation}>
              {linkTitle}
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
