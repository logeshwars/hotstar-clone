import React from "react";
import Styled from "styled-components";
import PlayButton from "@material-ui/icons/PlayArrowRounded";
import { Share } from "@material-ui/icons";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

function Baner({ title, description, subTitle, cardImg }) {
  return (
    <Container>
      <Slides>
        <Left>
          <span>VIP</span>
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
          <p className="details">{description}</p>
          <div style={{ position: "relative" }}>
            <Buttons>
              <Play>
                <PlayButton fontSize="large" />
                <p>Watch Movie</p>
              </Play>
              <Sharer>
                <Watch>
                  <AddRoundedIcon fontSize="large" />
                  <p>WATCH LIST</p>
                </Watch>
                <ShareButton>
                  <Share fontSize="medium" />
                  <p>SHARE</p>
                </ShareButton>
              </Sharer>
            </Buttons>
          </div>
        </Left>
        <Right>
          <img src={cardImg} alt="" />
        </Right>
      </Slides>
    </Container>
  );
}

export default Baner;
const Container = Styled.div`
padding: 0px 50px;

`;
const Slides = Styled.div`
display:flex !important;
border-radius:10px;
background-color:#0c111b !important;
height: 60vh;
`;
const Left = Styled.div`
flex:35%;
overflow: visible;
padding: 45px 0px 0px 50px;
line-height:35px;
span{
    background: #ffd000;
    color:black;
    border-radius:3px;
    padding:0px 5px;
    font-size:14px;
    font-weight:bold;
}
h2{
    font-size:27px;
}
h4{
   color:gray; 
}
.details{ 
    font-size:medium;
    position: absolute;
    line-height:25px;
    color: silver;
    margin-top:5px;
    width: 80vh;
    z-index:2;
}
`;

const Right = Styled.div`
flex:65%;
position:relative;
top:0px;
:before{
    content:"";
    width: 40%;
     background:linear-gradient(to right, #0c111b 5%, #0c111b25 80%,transparent);
    top:0px;
    z-index:1;
    position:absolute;
    left:0;
    right:0;
    bottom:0;   
}
img{
   width:100%;
   height: 100%;
   background-color:#0c111b;
   border-radius:0px 10px 10px 0px;
  }`;

const Buttons = Styled.div`
display: flex;
position:absolute;
justify-content:space-between;
align-items:center;
z-index:2;
margin-top:15vh ;
width: 38vw;
`;
const Play = Styled.div`
display: flex;
flex:1;
height:20vh;
align-items:center;
p{
font-size:20px;
margin-left:20px;
font-weight:bold;
}
`;
const Sharer = Styled.div`
display: flex;
font-size:large !important;
align-items:center;
width:unset;
justify-content:space-between;


`;
const Watch = Styled.div`
display: flex;
flex-direction:column;
align-items:center;
p{
font-size:10px;
color:white;
font-weight:bold;
line-height:10px;
}
`;
const ShareButton = Styled.div`
margin-left:30px;
margin-top:7px ;
color:white;
display: flex;
flex-direction:column;
align-items:center;

p{
font-size:10px;
color:white;
font-weight:bold;
line-height:20px;
}

`;
