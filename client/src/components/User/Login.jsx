import React, { useState } from "react";
import LoginDiv from "../../Style/UserCSS";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const navigate = useNavigate();
  return (
    <LoginDiv>
      <label>이메일</label>
      <input
        type="email"
        value={Email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <label>비밀번호</label>
      <input
        type="password"
        value={PW}
        onChange={(e) => {
          setPW(e.currentTarget.value);
        }}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        로그인
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/register");
        }}
      >
        회원가입
      </button>
    </LoginDiv>
  );
}

export default Login;
