import React from "react";
import Styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <video
          width="100%"
          autoPlay
          height="100%"
          preload="auto"
          playsInline
          loop
          src="https://firebasestorage.googleapis.com/v0/b/hotstar-clone-cba05.appspot.com/o/disnep.mp4?alt=media&token=27a18236-af3c-438f-883b-0746eebbb2df"
        ></video>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          width="100%"
          autoPlay
          height="100%"
          preload="auto"
          playsInline
          loop
          src="https://firebasestorage.googleapis.com/v0/b/hotstar-clone-cba05.appspot.com/o/pixer.mp4?alt=media&token=b56ae463-e7f4-495b-b885-f1d469016cdc"
        ></video>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          width="100%"
          autoPlay
          height="100%"
          preload="auto"
          playsInline
          loop
          src="https://firebasestorage.googleapis.com/v0/b/hotstar-clone-cba05.appspot.com/o/marvel.mp4?alt=media&token=c1dcbea7-e312-4b08-bb63-24641cee2d95"
        ></video>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          width="100%"
          autoPlay
          height="100%"
          preload="auto"
          playsInline
          loop
          src="https://firebasestorage.googleapis.com/v0/b/hotstar-clone-cba05.appspot.com/o/starwars.mp4?alt=media&token=17cc4ad4-2918-42c6-b80a-0e9b9a01f344"
        ></video>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          width="100%"
          autoPlay
          height="100%"
          preload="auto"
          playsInline
          loop
          src="https://firebasestorage.googleapis.com/v0/b/hotstar-clone-cba05.appspot.com/o/natgeo.mp4?alt=media&token=d94d21b7-49be-4692-8110-9181d9f52330"
        ></video>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewers;
const Container = Styled.div`
margin-top:15px;
display:grid;
padding:5px 45px;
grid-template-columns:repeat(5,minmax(0,1fr));
grid-gap:12px;
`;
const Wrap = Styled.div`
background: linear-gradient(#273552,#19263f);
 border-radius:5px;
 overflow: hidden;
 transition:all 250ms ease-in;
img{
    width: 100%;
    height: 100%;
}
&:hover{
    transform:scale(1.08);
}
&:hover img{
      display: none; 
}
video{
  display: none;
  object-fit:cover;
}
&:hover video{
      display: block; 
}

`;
