import React from "react";
import Styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import GTranslateIcon from "@material-ui/icons/GTranslate";

function Menu() {
  return (
    <Container>
      <MenuOptions>
        <HomeOutlinedIcon />
        Home
      </MenuOptions>

      <MenuOptions>
        <LiveTvRoundedIcon />
        TV
      </MenuOptions>
      <MenuOptions>
        <MovieCreationOutlinedIcon />
        Movies
      </MenuOptions>
      <MenuOptions>Sports</MenuOptions>
      <MenuOptions>Channel</MenuOptions>
      <MenuOptions>Languages</MenuOptions>
      <MenuOptions>Genres</MenuOptions>
    </Container>
  );
}

export default Menu;
const MenuOptions = Styled.div`
padding:15px 30px;
justify-content:space-evenly;
display:flex;
  align-items:center;
&:hover{
  background-color:black;
  color:white;
  
}
`;
const Container = Styled.div`
background-color: #202735;
border-radius:5px;
  color: white;
  font-size: 15px;
  position: absolute,
  top:20px;
  z-index: 1;
  width:fit-content;
  color: silver;
  padding: 10px 0px;
`;
