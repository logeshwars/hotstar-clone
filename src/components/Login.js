import React from "react";
import Styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
function Login({ fun, show }) {
  const shows = () => {
    show(false);
  };
  return (
    <Container>
      <LoginHolder>
        <CloseIcon
          className="close"
          fontSize="medium"
          onClick={shows}
          style={{ cursor: "pointer" }}
        />
        <LC>
          <h3>Login to continue</h3>
          <Signup onClick={fun}>Login with Gmail account!</Signup>
        </LC>
      </LoginHolder>
    </Container>
  );
}

export default Login;
const Container = Styled.div`
width: 100%;
position:fixed;
top:0;
background: rgb(12,11,11,0.5);
height: 100%;
`;
const LoginHolder = Styled.div`
    height: 65vh;
    position: relative;
    transform: translate(33vw , 19vh);
    width:35vw;
    background: #0d172b;
    .close{
      position:absolute;
      right:20px !important;
    }
    padding:20px 30px;
    color:silver;

`;
const LC = Styled.div`
padding:40px 0px;
color:white;
h3{
  margin-top:45px;
  font-weight:500;
}

`;
const Signup = Styled.div`
margin:auto;
margin-top:60px;
width: 100%;
border-radius:5px;
background:#276fff1f;
padding:15px 0px;
color:#3878f8;
text-align:center;
font-weight:bold;
cursor:pointer;
border:1px solid #0055ff;
`;
