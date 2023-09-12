import styled from '@emotion/styled'

const UploadDiv = styled.div`
width: 100%;
margin-top:1rem;
margin-bottom:1rem`

const UploadForm = styled.form`
width:80%;
margin:0 auto;
display:flex;
flex-direction:column;
  #form {
    border-radius:10px;
    border:1px solid #c6c6c6;
    padding:10px;
    margin-bottom:10px;
    &:active,
    &:focus{
      outline:none
  }
  textarea{
    min-height:400px;
    resize:none;
    border-radius:10px;
    border:1px solid #c6c6c6;
    padding:10px;
    &:active,
    &:focus{
      outline:none
    }
    &::-webkit-scrollbar{
      width:10px;

    }
    &::-webkit-scrollbar-thumb{
      background:grey;
      border-radius:15px;
      background-clip:padding-box;
    }
    &::-webkit-scrollbar-track{
      background-color:#c6c6c6;
      border-radius:10px;

    }
  }
  label{
    font-weight:bold;
  }
`

const UploadButtonDiv = styled.div`
margin-top:1rem;
display:flex;
justify-content:flex-end;
button{
  border-radius:15px;
  padding:10px;
  background-color:black;
  border:none;
  color:white;
  &:hover{
    background-color:white;
    color:black;
    border:1px solid black;
  }
}
.cancle{
  margin-left:10px;
  background:red;

  &:hover{
    background:white;
    border:1px solid red;
    color:red;
  }
}
`

export { UploadButtonDiv, UploadDiv, UploadForm }
