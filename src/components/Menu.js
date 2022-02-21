import React from "react";
import Styled from "styled-components";
function Menu() {
  return (
    <Container>
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
  margin-top:10px;
  position: relative,
  top:40px;
  z-index: 2;
  width:fit-content;
  color: silver;
  padding: 10px 10px;
`;
