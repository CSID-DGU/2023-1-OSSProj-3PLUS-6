import React from "react";
import { Typography, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "../css/SignIn.css"; // CSS 파일 경로

import axios from "axios";

const { Title } = Typography;

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      studentNum: data.get("studentNum"),
      password: data.get("password"),
    };
    console.log(userInfo);
    axios
      .post("/signin", userInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="sign-in-container">
      {/* 로고 이미지 */}
      <div className="text-center">
      <img src="/loginLogo.png" alt="loginLogo" className="loginLogo" />
      </div>
      {/* 로그인 폼 */}
      <form onSubmit={handleSubmit} className="form">
        {/* 학번 입력 필드 */}
        <Input
          required
          className="full-width-input"
          placeholder="학번"
          prefix={<UserOutlined />}
          name="studentNum"
        />
        {/* 비밀번호 입력 필드 */}
        <Input.Password
          required
          className="full-width-input"
          placeholder="비밀번호"
          prefix={<KeyOutlined />}
          name="password"
        />
        {/* 로그인 버튼 */}
        <Button type="primary" htmlType="submit" className="submit-button">
          LOGIN
        </Button>
      </form>
      {/* 회원가입 링크 */}
      <nav>
        <Link to="/signup" className="signup-link">
          회원가입
        </Link>
      </nav>
    </div>
  );
};

export default SignIn;