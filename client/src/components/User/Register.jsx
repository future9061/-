import React, { useState } from "react";
import LoginDiv from "../../Style/UserCSS";
import firebase from "../../firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const navigate = useNavigate();

  const RegisterFunc = async (e) => {
    e.preventDefault();
    if (!(name && Email && PW && PWConfirm)) {
      return alert("모든 항목을 채워주세요");
    }
    if (PW !== PWConfirm) {
      return alert("비밀번호가 같지 않습니다.");
    }

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, PW);

    await createdUser.user.updateProfile({
      displayName: name,
    });

    console.log(createdUser);
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };

    axios.post("/api/user/register", body).then((res) => {
      if (res.data.success) {
        navigate("/login");
      } else {
        alert("회원가입 실패");
      }
    });
  };

  return (
    <LoginDiv>
      <label htmlFor="닉네임">닉네임</label>
      <input
        type="name"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />

      <label htmlFor="이메일">이메일</label>
      <input
        type="email"
        value={Email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />

      <label htmlFor="비밀번호">비밀번호</label>
      <input
        type="password"
        value={PW}
        minLength={8}
        onChange={(e) => {
          setPW(e.currentTarget.value);
        }}
      />

      <label htmlFor="비밀번호">비밀번호 재확인</label>
      <input
        type="password"
        value={PWConfirm}
        minLength={8}
        onChange={(e) => {
          setPWConfirm(e.currentTarget.value);
        }}
      />

      <button
        onClick={(e) => {
          RegisterFunc(e);
        }}
      >
        회원가입
      </button>
    </LoginDiv>
  );
}

export default Register;
