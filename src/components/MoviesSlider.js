import React from "react";
import Styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowFrontIcon from "@material-ui/icons/ArrowForwardIos";
import MoviesPoster from "./MoviesPoster";
import { selectMovies } from "../features/Movies/MoviesSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function LeftNavButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: "block",
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
        display: "block",
        position: "absolute",
        top: "50%",
        right: "-6vh",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <ArrowFrontIcon style={{ fontSize: "2em" }} />
    </div>
  );
}
function MoviesSlider() {
  const movies = useSelector(selectMovies);
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,
  };
  return (
    <SliderContainer>
      <h2>Recommended For You</h2>
      <Slider {...settings}>
        <OutWrap>
          {movies &&
            movies.map((movie, index) => (
              <Link to={`/details/${movie.id}`}>
                <MoviesPoster details={movie} />
              </Link>
            ))}
        </OutWrap>
        <OutWrap></OutWrap>
      </Slider>
    </SliderContainer>
  );
}

export default MoviesSlider;
const SliderContainer = Styled.div`
padding:0px 45px;
h2{
    font-size:large;
    line-height:30px;
}
margin-top:5px;
`;

const OutWrap = Styled.div`
display: flex !important ;  
margin-top:10px;
@media(max-width:768px){
 height:24vh; 
}
height:30vh;
`;
