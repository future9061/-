import styled from "@emotion/styled"

const DetaliDiv = styled.div`padding-top:1rem;
padding-bottom:1rem;
max-width:756px;
margin:0 auto;
@media (max-width:756px){
  width:90%
}`

const DetaliContent = styled.div`width:100%;
height:auto;
min-height:120px;
background-color:#fff;
margin: 5vh auto;
padding:20px;
box-shadow:0px 19px 38px rgba(0,0,0,0.03),0px 15px 12px rgba(0,0,0,0.1);
.title{
  font-weight:bold;
}
a{
  color:black;
  text-decoration:none;
}
img{
  width:100%;
  height:auto;
}
`

const DetaliBtn = styled.div`
text-align:end;

button{
  border:none;
  margin:5px;
  padding:5px;
  border-radius:5px;
  color:#fff;
  font-weight:bold;


  &:first-child{
    background:black;
    border:1.5px solid black;
  }

  &:last-child{
    background:red; 
    border:1.5px solid red;   
  }


  &:hover{
    background:transparent;
    color:black;
  }


}
`

export { DetaliDiv, DetaliContent, DetaliBtn }