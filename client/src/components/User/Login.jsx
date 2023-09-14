import React, { useEffect, useState } from "react";
import LoginDiv from "../../Style/UserCSS";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebase.js";

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [errMSG, setErrMsg] = useState("");
  const navigate = useNavigate();

  const signInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && PW)) {
      alert("모든 항목을 채워주세요");
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(Email, PW);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setErrMsg("존재하지 않는 이메일입니다");
      } else if (err.code === "auth/wrong-password") {
        setErrMsg("비밀번호가 일치하지 않습니다");
      } else {
        setErrMsg("로그인이 실패하였습니다");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrMsg("");
    }, 4000);
  }, [errMSG]);

  return (
    <LoginDiv>
      <label>이메일</label>
      <input
        type="email"
        value={Email}
        required
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <label>비밀번호</label>
      <input
        type="password"
        value={PW}
        required
        onChange={(e) => {
          setPW(e.currentTarget.value);
        }}
      />
      {errMSG && <p>{errMSG}</p>}
      <button
        onClick={(e) => {
          signInFunc(e);
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
