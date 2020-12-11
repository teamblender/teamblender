import React from "react";
import styled from "styled-components";
import useStage from "useStage";
import { isMobile } from "react-device-detect";

const Cover = styled.div`
  z-index: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${(props) => (props.stage === 0 ? "1" : "0.4")};
  transition: opacity 1s ease-in-out;
`;

const Container = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Source = styled.source``;

function Video() {
  const stage = useStage();
  return isMobile ? (
    ""
  ) : (
    <Cover stage={stage}>
      <Container preload="auto" autoPlay loop muted>
        <Source
          src="https://victorlee917.github.io/blender_2020/video1_low.mp4"
          type="video/mp4"
        ></Source>
      </Container>
    </Cover>
  );
}

export default Video;
