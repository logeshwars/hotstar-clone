import React, { useState } from "react";
import Styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowFrontIcon from "@material-ui/icons/ArrowForwardIos";
import { selectMovies } from "../features/Movies/MoviesSlice";
import { useSelector } from "react-redux";
function LeftNavButton(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        left: "-5vh",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon style={{ fontSize: "2em" }} />
    </div>
  );
}
function RightNavButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        right: "-6vh",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <ArrowFrontIcon style={{ fontSize: "2em" }} />
    </div>
  );
}
function ImageSlider() {
  const movies = useSelector(selectMovies);
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,
  };
  return (
    <Corousel {...settings}>
      {movies.map(
        (movies, i) =>
          i != 5 && (
            <Slides>
              <Left>
                <h2>{movies.title}</h2>
                <h4>{movies.subs}</h4>
                <p>{movies.description}</p>
              </Left>
              <Right>
                <img src={movies.cardImg} alt="" />
              </Right>
            </Slides>
          )
      )}
    </Corousel>
  );
}

export default ImageSlider;
const Corousel = Styled(Slider)`
width:96%;
.slick-prev:before,
.slick-next:before {
  display: none;
}
.slick-list{
    overflow:visible;
}
.slick-slide{
    padding:0px 10px ;
}
button{
    z-index:1;
    background-Color:none !important;
    font-size:50px !important ;
}
`;
const Slides = Styled.div`
display:flex !important;
border-radius:10px;
background-color:#0c111b !important;
height: 60vh;
@media(max-width:768px){
  height: 40vh;
}
`;
const Left = Styled.div`
flex:35%;
padding: 60px 0px 0px 50px;
line-height:40px;
h2{
    font-size:27px;
}
h4{
   color:gray; 
}
p{ 
    color:silver;
    font-size:medium;
    line-height:30px;
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
