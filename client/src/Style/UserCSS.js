import styled from "@emotion/styled";

const LoginDiv = styled.div`
  box-shadow:0px 19px 38px rgba(0,0,0,0.03),0px 15px 12px rgba(0,0,0,0.1);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
  margin:0px auto;
  padding:10px;
  
  label{
    font-weight:bold;
    margin:20px 0px 0px 0px;
  }
  input{
    width:90%;
    height:40px;
    border-radius:10px;
    border:1px solid #ececec;
    padding:10px;
    outline:none;
  
    &:focus{
      background-color:#e4e4e4;
    }
  }
  a{
    width:90%
  }
  button{
    width:100%;
    border:none;
    padding:10px;
    margin:10px 0px;
  
  &:active{
    background-color:black;
    color:#fff;
  }
}




`

export default LoginDiv