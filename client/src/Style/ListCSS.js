import styled from "@emotion/styled"

const ListDiv = styled.div`
padding-top:1rem;
padding-bottom:1rem;
max-width:756px;
margin:0 auto;
@media (max-width:756px){
  width:90%
}
`;

const ListItem = styled.div`
width:100%;
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
`;


export { ListDiv, ListItem }