import React, { useState } from "react";
import Styled from "styled-components";
import PlayButton from "@material-ui/icons/PlayArrow";
import PlusButton from "@material-ui/icons/PlusOne";

function MoviesPoster({ details }) {
  const [grow, setGrow] = useState(false);

  return (
    <Container
      onMouseEnter={(e) => setGrow(true)}
      onMouseLeave={(e) => setGrow(false)}
    >
      <img src={details.cardImg} alt="" />
      {grow && (
        <Info>
          <span className="title">{details.title}</span>
          <span className="languages">{details.subs}</span>
          <span className="description">{details.description}</span>
          <Action>
            <p>
              <PlayButton className="play" />
              WATCH MOVIE
            </p>
            <p>
              <span className="play">+</span>ADD TO PLAYLIST
            </p>
          </Action>
        </Info>
      )}
    </Container>
  );
}

export default MoviesPoster;
const Container = Styled.div`
width: 10vw;
@media(max-width:768px){
  width: 30vw;
}
z-index:2;
height: 100%;
margin-left:12px;
border-radius:5px;
&:hover{
    transform:scale(1.3)
}
img{
    width:inherit;
    height: inherit;
    border-radius:5px;
   

}

`;
const Info = Styled.div`
border-radius:5px;
width: inherit;
background:linear-gradient( to bottom,transparent ,#192133,#192133 );
bottom:0px;
position:absolute;
padding:10px 10px;
.title{
  font-size:10px;
  color:white;
  font-weight: bold;
}
.description{
  font-size:8px;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 120px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-height:12px;
        -webkit-box-orient: vertical;
        color:silver;
}
.languages{
  display: inline-block;
      font-size:9px;
       width: 120px;
       color:white;
       word-wrap:break-word;
       white-space:normal;
       line-height:12px;
}
`;
const Action = Styled.div`
font-size:10px;
text-align:left;
p{
  padding:2px 0px;
  color:silver;
  &:hover{
    background-color:;
  }
}
.play{
  font-size:medium !important;
  padding-top:7px;
  margin-right:5px;
  padding-right:7px;

}


`;
