import React from "react";
import Container from "Components/Container";
import Header from "Components/Header";
import Video from "Components/Video";
import Member from "Components/Member";
import Project from "Components/Project";
import Contact from "Components/Contact";

const Main = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <Member></Member>
        <Project></Project>
        <Contact></Contact>
      </Container>
      <Video></Video>
    </>
  );
};

export default Main;
