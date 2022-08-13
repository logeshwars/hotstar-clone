import React from "react";
import ImageSlider from "./ImageSlider";
import Styled from "styled-components";
import Viewers from "./Viewers";
import MoviesSlider from "./MoviesSlider";

function Home() {
  return (
    <HomeContainer>
      <SlideHolder>
        <ImageSlider />
      </SlideHolder>
      <Viewers />
      <MoviesSlider />
      <MoviesSlider />
    </HomeContainer>
  );
}

export default Home;
const HomeContainer = Styled.div`
overflow-x:hidden ;
padding-bottom:10px;
padding-top: 83px;

`;
const SlideHolder = Styled.div`
width: 100%;
padding-left:40px ;
overflow: hidden;

`;
