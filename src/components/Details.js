import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Baner from "./Baner";
import MoviesSlider from "./MoviesSlider";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Details() {
  const ids = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    db.collection("movies")
      .doc(ids.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("ids:", doc.data());
          setMovies(doc.data());
        } else {
          console.log("not", ids);
        }
      });
  }, []);
  return (
    <Container>
      <Baner
        title={movies.title}
        cardImg={movies.cardImg}
        subTitle={movies.subs}
        description={movies.description}
      />
      <Info>
        <span>Available In:</span>
        <span className="p">P</span>
        <span>English</span>
        <span>|</span>
        <span className="v">V</span>
        <span>Hindi</span>
        <span>Tamil</span>
        <span>Telugu</span>
      </Info>
      <hr />
      <SlideContainer>
        <MoviesSlider />
      </SlideContainer>
    </Container>
  );
}

export default Details;
const Container = Styled.div`
padding-top: 83px;
hr{
  border: none;
  height: 0.1px;
  margin:5px 40px;
  background:gray;
}
`;
const Info = Styled.div`
padding:20px 60px;
font-weight:500;
display:flex;
width:unset;
color:silver;
align-items:center;
.p,.v{
  background-color:#00fff2;
  color:black;
  width:15px;
  font-size:12px;
  height:15px;
  padding:1px ;
  text-align:center;
  border-radius:50%;
}
.v{
   background-color:#ffd900;
}
span{
  font-size:small;
  margin-left:17px;
}
`;
const SlideContainer = Styled.div`
width: 100%;
overflow: hidden;
padding:10px 0px
`;
