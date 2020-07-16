import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/images/hero-image.jpeg";

function Home() {
  return (
    <Wrapper className="page-wrapper">
      <h2>Home</h2>
      <img src={HeroImage} alt="jessie" width="200px" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
`;

export default Home
